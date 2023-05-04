import { Container, Header, SignUpBtn } from "components/signUp/atom";
import { InputBlock } from "components/signUp/block";
import { LayoutGroup } from "framer-motion";
import { IForm } from "interfaces/signUp";
import { useForm } from "react-hook-form";

const inputBlock = [
  {
    inputBlockObj: {
      id: "id",
      title: "아이디",
      placeholder: "4~20자 사이로 적으세요.",
      pattern: {
        value: /^[a-zA-Z][a-zA-Z0-9]{3,19}$/,
        message: "올바른 아이디 입력 바랍니다.",
      },
    },
  },
  {
    inputBlockObj: {
      id: "nickName",
      title: "닉네임",
      placeholder: "2~20자 사이로 적으세요.",
      pattern: {
        value: /^[a-zA-Z0-9가-힣]{2,20}$/,
        message: "올바른 닉네임 입력 바랍니다.",
      },
    },
  },
  {
    inputBlockObj: {
      id: "password",
      type: "password",
      title: "비밀번호",
      placeholder:
        "숫자, 문자, 특수문자를 모두 사용해 최소 10자 이상 적으세요.",
      pattern: {
        value:
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/,
        message: "사용 불가능한 비밀번호 입니다.",
      },
    },
  },
  {
    inputBlockObj: {
      id: "checkPassword",
      type: "password",
      title: "비밀번호 확인",
      placeholder:
        "숫자, 문자, 특수문자를 모두 사용해 최소 10자 이상 적으세요.",
    },
  },
  {
    inputBlockObj: {
      id: "phone",
      title: "핸드폰",
      validText: "인증번호가 전송 되었습니다.",
      pattern: {
        value: /^[0-9]{2,3}[0-9]{4}[0-9]{4}$/,
        message: "형식에 맞지 않는 번호입니다.",
      },
    },
  },
  {
    inputBlockObj: {
      id: "certificationNumber",
      title: "인증번호",
      validText: "본인인증이 완료 됐습니다.",
    },
  },
  {
    inputBlockObj: {
      id: "email",
      title: "이메일(선택)",
      pattern: {
        value: /^[a-z0-9\.\-_]+@([a-z0-9\-]+\.)+[a-z]{2,6}$/,
        message: "형식에 맞지 않는 이메일입니다.",
      },
    },
  },
];

export default function SignUpFormView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
    getValues,
  } = useForm();

  const onValid = (data: IForm) => {
    console.log(data);
    console.log("성공");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <Container>
        <Header>회원가입</Header>
        {inputBlock.map(({ inputBlockObj }, index) => {
          return (
            <LayoutGroup key={inputBlockObj.id} id={`${index}`}>
              <InputBlock
                register={register}
                inputBlockObj={inputBlockObj}
                errors={errors}
                trigger={trigger}
                getValues={getValues}
                setError={setError}
              ></InputBlock>
            </LayoutGroup>
          );
        })}
        <SignUpBtn>회원가입</SignUpBtn>
      </Container>
    </form>
  );
}
