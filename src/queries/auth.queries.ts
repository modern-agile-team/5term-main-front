import { useMutation, useQuery } from "@tanstack/react-query";
import { requestLogin } from "apis/login";
import { checkAccessToken, checkFreshToken } from "apis/token";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const PATHS = {
  login: "/login",
  signup: "/signup",
};

export const useLoginMutation = (setError: any) => {
  const router = useRouter();

  return useMutation(requestLogin, {
    onSuccess: (data) => {
      // data 성공했을 떄 서버가 넘겨주는 데이터
      // router.push("/");
    },
    onError: (err) => {
      setError("id", {
        message: "아이디 혹은 비밀번호가 일치하지 않습니다.",
      });
    },
    onSettled: () => {
      // 로직
    },
  });
};

export const useFreshTokenQuery = (options?: any) => {
  const router = useRouter();

  return useQuery(["auth-token"], checkFreshToken, {
    onSuccess: (data) => {
      // data 성공했을 떄 서버가 넘겨주는 데이터
      if (router.pathname === PATHS.login || router.pathname === PATHS.signup) {
        // router.push("/");
      }
      console.log("fresh 성공");
    },
    onError: () => {
      // refresh token 로직
      console.log("fresh 실패");
      // router.push("/login");
    },
    ...options,
  });
};

// ...
export const useAccessTokenQuery = (options?: any) => {
  const router = useRouter();
  const { refetch } = useFreshTokenQuery({ enabled: false });

  return useQuery(["auken"], checkAccessToken, {
    // refetchOnWindowFocus: false,
    onSuccess: (data) => {
      // data 성공했을 떄 서버가 넘겨주는 데이터
      if (router.pathname === PATHS.login || router.pathname === PATHS.signup) {
        // router.push("/");
      }
    },
    onError: () => {
      refetch();
    },
    ...options,
  });
};
