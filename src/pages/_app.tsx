import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BackGround } from "components/common/backGround/atom";
import { GlobalStyle } from "components/common/Globalstyle";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import store from "store/configureStore";
import { NaigationBlock } from "components/common/navigationBar/block";

export const NotoSansKr = Noto_Sans_KR({
  preload: false,
  weight: "500",
  display: "auto",
  variable: "--IBMSansKr",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <BackGround />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <main className={NotoSansKr.className}>
              <ReactQueryDevtools initialIsOpen={false} />
              <NaigationBlock />
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
