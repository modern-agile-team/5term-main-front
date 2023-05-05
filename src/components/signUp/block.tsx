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

export const InputBlock = ({ textObj }: InputProps) => {
  const [isVisible, setIsVisible] = useState({
    title: false,
    valid: false,
    explanation: true,
  });

  const onblurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setIsVisible((prevState) => {
      return { ...prevState, title: Boolean(value) };
    });
  };

  const onchangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setIsVisible((prevState) => {
      return { ...prevState, explanation: !Boolean(value) };
    });
  };

  return (
    <>
      <InputContainer>
        {isVisible.title && (
          <FocusServeTitle layoutId="underline">{textObj.id}</FocusServeTitle>
        )}
        {isVisible.valid && <ValidText>{textObj.validText}</ValidText>}
      </InputContainer>
      <RelativeContainer>
        {!isVisible.title && (
          <ServeTitle layoutId="underline">{textObj.id}</ServeTitle>
        )}
        {isVisible.explanation && (
          <AnnotationText>{textObj.placeholder}</AnnotationText>
        )}
        {textObj.id === "핸드폰" && (
          <SendCertificationBtn>인증번호 전송</SendCertificationBtn>
        )}
        {textObj.id === "인증번호" && (
          <CertificationBtn>본인인증</CertificationBtn>
        )}
        <InfoInput
          onFocus={() =>
            setIsVisible((prevState) => {
              return { ...prevState, title: true };
            })
          }
          onBlur={(e) => onblurEvent(e)}
          onChange={(e) => onchangeEvent(e)}
        />
      </RelativeContainer>
    </>
  );
};
