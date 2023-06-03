import { useMutation, useQuery } from "@tanstack/react-query";
import { requestLogin } from "apis/login";
import { checkAccessToken } from "apis/token";
import { useRouter } from "next/router";

const PATHS = {
  login: "/login",
  signup: "/signup",
};

export const useLoginMutation = (options?: any) => {
  const router = useRouter();

  return useMutation(requestLogin, {
    onSuccess: (data) => {
      // data 성공했을 떄 서버가 넘겨주는 데이터
      router.push("/");
    },
    onError: (err) => {
      // 에러 로직
    },
    onSettled: () => {
      // 로직
    },
    ...options,
  });
};

// export const requestFreshTokenQuery = () => {
//   // ...
// };

// ...
export const useAccessTokenQuery = (options?: any) => {
  const router = useRouter();

  return useQuery(["auth-token"], checkAccessToken, {
    onSuccess: (data) => {
      // data 성공했을 떄 서버가 넘겨주는 데이터
      if (router.pathname === PATHS.login || router.pathname === PATHS.signup) {
        router.push("/");
      }
    },
    onError: () => {
      // refresh token 로직
      router.push("/login");
    },
    ...options,
  });
};
