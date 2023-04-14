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

export const InputBlock = ({
  inputBlockObj,
  register,
  errors,
  trigger,
  getValues,
  setError,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  type DebounceFunction = <T extends any[]>(
    callback: (...args: T) => void,
    delay: number,
  ) => (...args: T) => void;

  const debounce: DebounceFunction = (callback, delay) => {
    let timer: NodeJS.Timeout;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), delay);
    };
  };

  const onFocusEvent = () => {
    setIsVisible(true);
  };

  const onBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setIsVisible(Boolean(value));
  };

  const onChangeEvent = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await trigger(`${inputBlockObj.id}`);
    if (event.target.name === "id") {
    }
    if (event.target.name === "nickName") {
    }
    if (getValues("password") !== getValues("checkPassword")) {
      setError("checkPassword", { message: "비밀번호가 일치하지 않습니다." });
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
