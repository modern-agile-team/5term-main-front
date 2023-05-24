import MyPageFormView from "components/myPage/pages";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Home() {
  //   const router = useRouter();
  //   console.log(router.query); 서버 라우터 수정 예정

  return <MyPageFormView />;
}
