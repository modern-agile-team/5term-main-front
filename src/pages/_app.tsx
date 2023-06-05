import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
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
import { useEffect } from "react";
import { NAVIGATION_SHOW_LIST } from "constants/navigation";
import Auth from "components/common/Auth";

export const NotoSansKr = Noto_Sans_KR({
  preload: false,
  weight: "500",
  display: "auto",
  variable: "--IBMSansKr",
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
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
              <Auth>
                <Component {...pageProps} />
              </Auth>
            </main>
          </ThemeProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
