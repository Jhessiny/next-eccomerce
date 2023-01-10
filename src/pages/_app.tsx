import type { AppProps } from "next/app";
import { Hydrate } from "react-query";
import { ReactQueryProvider } from "../app/presentation/providers";
import "../../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />;
      </Hydrate>
    </ReactQueryProvider>
  );
}
