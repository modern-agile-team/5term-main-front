import "@/styles/globals.css";
import { BackGround } from "components/common/backGround/atom";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackGround />
      <Component {...pageProps} />
    </>
  );
}
