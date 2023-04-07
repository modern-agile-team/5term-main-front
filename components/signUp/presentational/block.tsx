import { IBMSansKr } from "@/pages/_app";
import {
  Container,
  Header,
  InputContainer,
  InputForm,
  InputInfo,
  ServeTitle,
  ValidText,
} from "./atom";

export const InputBlock = () => {
  return (
    <Container>
      <InputContainer>
        <ServeTitle>아이디</ServeTitle>
        <ValidText>중복된 아이디입니다.</ValidText>
      </InputContainer>
      <InputInfo />
    </Container>
  );
};

{
  /* <Container>
<Header>회원가입</Header>
<InputForm>
  <div>테스트 입니다.</div>
  <div>테스트 입니다.</div>
  <div>테스트 입니다.</div>
  <div>테스트 입니다.</div>
</InputForm>
</Container> */
}
