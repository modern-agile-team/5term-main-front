"use client";

import { Container, Header } from "components/signup/atom";
import { LOGIN_INPUT_BLOCK } from "constants/login";
import { InputBlock } from "./block";
import { useForm } from "react-hook-form";
import { LayoutGroup } from "framer-motion";
import { LoginBtn, RightTitle, Title, TitleContainer } from "./atom";
import { ILoginForm } from "interfaces/login";
import { requestLogin } from "apis/login";
import { useDispatch } from "react-redux";
import { updateUserState } from "store/slice/loginSlice";

export default function LoginFormView() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    setError,
  } = useForm();
  const dispatch = useDispatch();

  const login = async (data: ILoginForm) => {
    const response = await requestLogin(data);
    if (response) {
      dispatch(updateUserState(true));
    } else {
      setError("id", { message: "아이디 혹은 비밀번호가 올바르지 않습니다." });
    }
  };

  return (
    <form onSubmit={handleSubmit(login)}>
      <Container>
        <Header>LOGO</Header>
        {LOGIN_INPUT_BLOCK.map(({ inputBlockObj }, index) => {
          return (
            <LayoutGroup key={inputBlockObj.id} id={`${index}`}>
              <InputBlock
                inputBlockObj={inputBlockObj}
                register={register}
                errors={errors}
                getValues={getValues}
              ></InputBlock>
            </LayoutGroup>
          );
        })}
        <TitleContainer>
          <Title href={""}>아이디 찾기</Title>
          <Title href={""}>비밀번호 찾기</Title>
          <RightTitle href={"/signup"}>회원가입</RightTitle>
        </TitleContainer>
        <LoginBtn>로그인</LoginBtn>
      </Container>
    </form>
  );
}
