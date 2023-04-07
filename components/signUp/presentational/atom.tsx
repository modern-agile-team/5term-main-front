import { IBMSansKr } from "@/pages/_app";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 601px;
  margin: 0 auto;
`;

export const Header = styled.title`
  font-size: 40px;
  font-weight: 700;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: end;
  color: ${(props) => props.theme.text};
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ServeTitle = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.text3};
`;

export const ValidText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.text2};
`;

export const InputInfo = styled.input`
  width: 600px;
  background: transparent;
  border: 0;
  border-bottom: 3px solid ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.IBMSansKr};
`;

export const SendNumberBtn = styled.button``;

export const CertificationBtn = styled.button``;

export const SignUpBtn = styled.button``;
