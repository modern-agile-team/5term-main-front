import { idDuplicationsCheck, nicknameDuplicationsCheck } from "apis/signUp";
import {
  InputContainer,
  InfoInput,
  ServeTitle,
  ValidText,
  SendCertificationBtn,
  CertificationBtn,
  RelativeContainer,
  FocusServeTitle,
  AnnotationText,
} from "./atom";
import { InputProps } from "interfaces/signUp";
import { useState } from "react";
import { debounce } from "utils/debounce";
import { VALIDATION_LIST } from "constants/signUp";

export const InputBlock = ({
  inputBlockObj,
  register,
  errors,
  trigger,
  getValues,
  setError,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setIsVisible(Boolean(value));
  };

  const onChangeEvent = async (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    // nothing in input
    if (value === "") {
      return;
    }

    await trigger(inputBlockObj.id);
    if (event.target.name === "password") {
      await trigger("checkPassword");
    }

    if (getValues("password") !== getValues("checkPassword")) {
      setError("checkPassword", { message: "비밀번호가 일치하지 않습니다." });
      VALIDATION_LIST.checkPassword = false;
    } else {
      VALIDATION_LIST.checkPassword = true;
    }

    if (event.target.name === "id") {
      if ((await idDuplicationsCheck(event.target.value)) === 400) {
        setError("id", { message: "이미 사용중인 아이디 입니다." });
        VALIDATION_LIST.id = false;
      } else {
        VALIDATION_LIST.id = true;
      }
    } else if (event.target.name === "nickname") {
      if ((await nicknameDuplicationsCheck(event.target.value)) === 400) {
        setError("nickname", { message: "이미 사용중인 닉네임 입니다." });
        VALIDATION_LIST.nickname = false;
      } else {
        VALIDATION_LIST.nickname = true;
      }
    }
  };

  return (
    <>
      <InputContainer>
        {isVisible && (
          <FocusServeTitle layoutId="underline">
            {inputBlockObj.title}
          </FocusServeTitle>
        )}
        <ValidText>{errors?.[inputBlockObj.id]?.message as string}</ValidText>
      </InputContainer>
      <RelativeContainer>
        {!isVisible && (
          <ServeTitle layoutId="underline">{inputBlockObj.title}</ServeTitle>
        )}
        <AnnotationText>{inputBlockObj.placeholder}</AnnotationText>
        {inputBlockObj.id === "phone" && (
          <SendCertificationBtn>인증번호 전송</SendCertificationBtn>
        )}
        {inputBlockObj.id === "certificationNumber" && (
          <CertificationBtn>본인인증</CertificationBtn>
        )}
        <InfoInput
          {...register(`${inputBlockObj.id}`, {
            required: {
              value: inputBlockObj.id !== "email",
              message: "필수 입력 사항 입니다.",
            },
            pattern: inputBlockObj.pattern,
            onChange: debounce(onChangeEvent, 500),
            onBlur: onBlurEvent,
          })}
          onFocus={() => setIsVisible(true)}
          type={`${inputBlockObj.type}`}
        />
      </RelativeContainer>
    </>
  );
};
