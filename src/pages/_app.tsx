import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PlanetListProvider } from "../context/PlanetListContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlanetListProvider>
      <Component {...pageProps} />
    </PlanetListProvider>
  );
}

export default MyApp;
