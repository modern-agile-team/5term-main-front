import { Container, Header, SignUpBtn } from "components/signUp/atom";
import { InputBlock } from "components/signUp/block";
import { LayoutGroup } from "framer-motion";

const inputBlock = [
  {
    textObj: {
      id: "아이디",
      validText: "중복된 아이디 입니다.",
      placeholder: "",
    },
  },
  {
    textObj: {
      id: "닉네임",
      validText: "중복된 닉네임 입니다.",
      placeholder: "2~20자 사이로 적으세요.",
    },
  },
  {
    textObj: {
      id: "비밀번호",
      validText: "사용 불가능한 비밀번호 입니다.",
      placeholder:
        "숫자, 문자, 특수문자를 모두 사용해 최소 10자 이상 적으세요.",
    },
  },
  {
    textObj: {
      id: "비밀번호 확인",
      validText: "사용 가능한 비밀번호 입니다.",
      placeholder:
        "숫자, 문자, 특수문자를 모두 사용해 최소 10자 이상 적으세요.",
    },
  },
  {
    textObj: {
      id: "핸드폰",
      validText: "인증번호가 전송 되었습니다.",
      placeholder: "",
    },
  },
  {
    textObj: {
      id: "인증번호",
      validText: "본인인증이 완료 됐습니다.",
      placeholder: "",
    },
  },
  {
    textObj: {
      id: "이메일(선택)",
      validText: "",
      placeholder: "",
    },
  },
];

export default function SignUpFormView() {
  return (
    <Container>
      <Header>회원가입</Header>
      {inputBlock.map(({ textObj }, index) => {
        return (
          <LayoutGroup key={textObj.id} id={`${index}`}>
            <InputBlock textObj={textObj}></InputBlock>
          </LayoutGroup>
        );
      })}
      <SignUpBtn>회원가입</SignUpBtn>
    </Container>
  );
}
