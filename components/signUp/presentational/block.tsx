import {
  Container,
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

export const InputBlock = ({ title, validText, placeholder }: InputProps) => {
  return (
    <>
      <InputContainer>
        <FocusServeTitle>{title}</FocusServeTitle>
        <ValidText>{validText}</ValidText>
      </InputContainer>
      <RelativeContainer>
        <ServeTitle>{title}</ServeTitle>
        <AnnotationText>{placeholder}</AnnotationText>
        {title === "핸드폰" && (
          <SendCertificationBtn>인증번호 전송</SendCertificationBtn>
        )}
        {title === "인증번호" && <CertificationBtn>본인인증</CertificationBtn>}
        <InfoInput />
      </RelativeContainer>
    </>
  );
};
