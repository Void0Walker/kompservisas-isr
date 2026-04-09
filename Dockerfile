FROM node:22-slim AS base

# --- Install dependencies ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN NODE_OPTIONS="--max-old-space-size=512" npm ci --prefer-offline

# --- Build the application ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time env vars that get inlined into the JS bundle.
# Passed from docker-compose build args → available during `next build`.
ARG ADWORDS_TAG=""
ARG ANALYTICS_TAG=""
ARG NEXT_PUBLIC_STRAPI_GRAPHQL_URL=""
ENV ADWORDS_TAG=$ADWORDS_TAG
ENV ANALYTICS_TAG=$ANALYTICS_TAG
ENV NEXT_PUBLIC_STRAPI_GRAPHQL_URL=$NEXT_PUBLIC_STRAPI_GRAPHQL_URL

RUN npm run build

# --- Production image ---
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# public/ includes locales (i18n), partytown, sitemaps, and static assets
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
