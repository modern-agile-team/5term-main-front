import { BackGround } from "components/common/backGround/atom";
import { GlobalStyle } from "components/common/Globalstyle";
import type { AppProps } from "next/app";
import { IBM_Plex_Sans_KR } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { teme } from "../styles/theme";

export const IBMSansKr = IBM_Plex_Sans_KR({
  preload: false,
  weight: ["100", "400", "700"],
  display: "auto",
  variable: "--IBMSansKr",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <BackGround />
      <ThemeProvider theme={teme}>
        <main className={IBMSansKr.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
