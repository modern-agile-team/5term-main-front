import { BackGround } from "components/common/backGround/atom";
import { GlobalStyle } from "components/common/Globalstyle";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "@next/font/google";

export const notoSansKr = Noto_Sans_KR({
  preload: false,
  weight: ["100", "400", "700"],
  display: "auto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <BackGround />
      <main className={notoSansKr.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
