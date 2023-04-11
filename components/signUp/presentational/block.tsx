import {
  Container,
  InputContainer,
  InfoInput,
  ServeTitle,
  ValidText,
  SendCertificationBtn,
  CertificationBtn,
  RelativeContainer,
} from "./atom";
import { InputProps } from "interfaces/signUp";

export const InputBlock = ({ title, text }: InputProps) => {
  return (
    <>
      <InputContainer>
        <ServeTitle>{title}</ServeTitle>
        <ValidText>{text}</ValidText>
      </InputContainer>
      <RelativeContainer>
        <InfoInput />
        {title === "핸드폰" && (
          <SendCertificationBtn>인증번호 전송</SendCertificationBtn>
        )}
        {title === "인증번호" && <CertificationBtn>본인인증</CertificationBtn>}
      </RelativeContainer>
    </>
  );
};
