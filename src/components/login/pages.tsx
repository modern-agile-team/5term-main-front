import { Container, Header } from "components/sign-up/atom";
import { LOGIN_INPUT_BLOCK } from "constants/login";
import { InputBlock } from "./block";
import { useForm } from "react-hook-form";
import { LayoutGroup } from "framer-motion";
import { LoginBtn, RightTitle, Title, TitleContainer } from "./atom";

export default function LoginFormView() {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <Header>LOGO</Header>
      {LOGIN_INPUT_BLOCK.map(({ inputBlockObj }, index) => {
        return (
          <LayoutGroup key={inputBlockObj.id} id={`${index}`}>
            <InputBlock
              inputBlockObj={inputBlockObj}
              register={register}
              errors={errors}
            ></InputBlock>
          </LayoutGroup>
        );
      })}
      <TitleContainer>
        <Title href={""}>아이디 찾기</Title>
        <Title href={""}>비밀번호 찾기</Title>
        <RightTitle href={"/sign-up"}>회원가입</RightTitle>
      </TitleContainer>
      <LoginBtn>로그인</LoginBtn>
    </Container>
  );
}
