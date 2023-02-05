import type { AppProps } from "next/app";
import { Hydrate } from "react-query";
import { ReactQueryProvider } from "@/app/main/providers";
import "@/pages/styles/globals.css";
import { Layout } from "@/app/presentation/components";
import { ContextProvider } from "@/app/main/providers/context-provider";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ContextProvider>
      <ReactQueryProvider>
        <SessionProvider session={session}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Hydrate>
        </SessionProvider>
      </ReactQueryProvider>
    </ContextProvider>
  );
}
