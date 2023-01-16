import type { AppProps } from "next/app";
import { Hydrate } from "react-query";
import { ReactQueryProvider } from "../app/presentation/providers";
import "../../styles/globals.css";
import { Layout } from "../app/presentation/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </ReactQueryProvider>
  );
}
