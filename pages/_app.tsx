/* eslint-disable @next/next/no-sync-scripts */
import * as React from "react";

import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Partytown } from "@builder.io/partytown/react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { CartProvider } from "react-use-cart";
import { Inter, Nunito } from "next/font/google";

import { ColorModeProvider } from "@/src/colorMode/ColorModeContext";
import createEmotionCache from "@/src/createEmotionCache";
import { pageView } from "@/utils/gtag";
import nextI18NextConfig from "@/next-i18next.config";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  variable: "--font-nunito",
});

const clientSideEmotionCache = createEmotionCache();
const isProduction = process.env.NODE_ENV === "production";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 60 * 1000,
      },
    },
  });
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const [queryClient] = React.useState(makeQueryClient);

  const dehydratedState = "dehydratedState" in pageProps ? pageProps.dehydratedState : undefined;
  const componentPageProps = { ...pageProps } as Record<string, unknown>;
  if ("dehydratedState" in componentPageProps) {
    delete componentPageProps.dehydratedState;
  }

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isProduction) pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={`${inter.variable} ${nunito.variable}`}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <CacheProvider value={emotionCache}>
            <CartProvider>
              <Head>
                <meta content="initial-scale=1.0, width=device-width" name="viewport" />
              </Head>
              {isProduction ? (
                <>
                  <Partytown debug={false} forward={["dataLayer.push", "gtag"]} />
                  <script
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_TAG ?? ""}`}
                    type="text/partytown"
                  />
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){ window.dataLayer.push(arguments)};
              function gtag(){window.dataLayer.push(arguments);};
              gtag('js', new Date());
              gtag('config', '${process.env.ANALYTICS_TAG ?? ""}');
              gtag('config', '${process.env.ADWORDS_TAG ?? ""}');
            `,
                    }}
                    id="google-analytics"
                    type="text/partytown"
                  />
                </>
              ) : null}
              <ColorModeProvider>
                <CssBaseline enableColorScheme />
                <Component {...(componentPageProps as typeof pageProps)} />
              </ColorModeProvider>
            </CartProvider>
          </CacheProvider>
        </HydrationBoundary>
      </QueryClientProvider>
    </div>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
