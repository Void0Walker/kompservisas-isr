/** @type {import('next-sitemap').IConfig} */

module.exports = {
  exclude: ["/api/order"],
  exclude: ["/server-sitemap.xml"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://kompservisas.lt/server-sitemap.xml"],
    policies: [
      {
        allow: "/",
        userAgent: "*",
      },
      {
        disallow: "/api/order",
        userAgent: "*",
      },
      {
        disallow: "/stacionarus/[stacionarus]",
        userAgent: "*",
      },
      {
        disallow: "/nesiojami/[nesiojamas]",
        userAgent: "*",
      },
      {
        disallow: "/monitoriai/[monitorius]",
        userAgent: "*",
      },
      {
        disallow: "/kitos-prekes/[preke]",
        userAgent: "*",
      },
    ],
  },
  siteUrl: process.env.SITE_URL || "https://kompservisas.lt",
};
