import type { AppProps } from "next/app";
import { Hydrate } from "react-query";
import { ReactQueryProvider } from "../app/main/providers";
import "../../styles/globals.css";
import { Layout } from "../app/presentation/components";
import { CacheProvider } from "../app/main/providers/cache-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ReactQueryProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Hydrate>
      </ReactQueryProvider>
    </CacheProvider>
  );
}
