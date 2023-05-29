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
import { NavigationBlock } from "components/common/navigationBar/block";
import { useRouter } from "next/router";
import { NAVIGATION_SHOW_LIST } from "constants/navigation";

export const NotoSansKr = Noto_Sans_KR({
  preload: false,
  weight: "500",
  display: "auto",
  variable: "--IBMSansKr",
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const showNavigation =
    NAVIGATION_SHOW_LIST.find((url) => url === pathname) ?? false;
  return (
    <>
      <GlobalStyle />
      <BackGround />
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <main className={NotoSansKr.className}>
              <ReactQueryDevtools initialIsOpen={false} />
              {showNavigation && <NavigationBlock />}
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
