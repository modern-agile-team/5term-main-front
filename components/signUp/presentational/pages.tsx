import { Container, Header, SignUpBtn } from "./atom";
import { InputBlock } from "./block";

const inputBlock = [
  {
    id: "아이디",
    text: "중복된 아이디 입니다.",
    placeholder: "",
  },
  {
    id: "닉네임",
    text: "중복된 닉네임 입니다.",
    placeholder: "2~20자 사이로 적으세요.",
  },
  {
    id: "비밀번호",
    text: "사용 불가능한 비밀번호 입니다.",
    placeholder: "숫자, 문자, 특수문자를 모두 사용해 최소 10자 이상 적으세요.",
  },
  {
    id: "비밀번호 확인",
    text: "사용 가능한 비밀번호 입니다.",
    placeholder: "숫자, 문자, 특수문자를 모두 사용해 최소 10자 이상 적으세요.",
  },
  {
    id: "핸드폰",
    text: "인증번호가 전송 되었습니다.",
    placeholder: "",
  },
  {
    id: "인증번호",
    text: "본인인증이 완료 됐습니다.",
    placeholder: "",
  },
  {
    id: "이메일(선택)",
    text: "",
    placeholder: "",
  },
];

export default function SignUpFormView() {
  return (
    <Container>
      <Header>회원가입</Header>
      {inputBlock.map(({ id, text, placeholder }) => {
        return (
          <InputBlock
            key={id}
            title={id}
            validText={text}
            placeholder={placeholder}
          ></InputBlock>
        );
      })}
      <SignUpBtn>회원가입</SignUpBtn>
    </Container>
  );
}
