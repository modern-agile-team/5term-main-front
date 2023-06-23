import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 601px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.title`
  font-size: 40px;
  font-weight: 700;

  margin-bottom: 4vh;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: end;
  color: ${(props) => props.theme.text};
`;

export const InputContainer = styled.div`
  width: 601px;
  height: 25px;
  padding-left: 10px;
  margin-top: 40px;
  display: flex;
  position: relative;

  @media screen and (max-width: 550px) {
    width: 360px;
  }
`;

export const ServeTitle = styled(motion.label)`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.text3};
  left: 10px;
  top: 15px;

  z-index: -1;
  position: absolute;
`;

export const FocusServeTitle = styled(motion.label)`
  color: ${(props) => props.theme.text2};
  font-size: 16px;
  font-weight: 700;

  position: relative;
`;

export const AnnotationText = styled.label`
  font-size: 14px;
  font-weight: 100;
  color: ${(props) => props.theme.text2};

  position: absolute;
  right: -1px;
  bottom: -18px;
  @media screen and (max-width: 550px) {
    font-size: 10px;
    padding-top: 6px;
  }
`;

export const ValidText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #b8bdde;
  right: 1px;
  position: absolute;

  @media screen and (max-width: 550px) {
    font-size: 10px;
    padding-top: 6px;
  }
`;

export const ErrorText = styled(ValidText)`
  color: #f7e7b1;
`;

export const InfoInput = styled.input`
  font-size: 14px;
  font-weight: 500;
  font-family: ${(props) => props.theme.NotoSansKr};
  color: ${(props) => props.theme.text3};
  border-radius: 10px;
  padding: 15px 0 15px 9px;
  width: 600px;
  height: 50px;
  outline: none;
  background: transparent;
  border: 1px solid ${(props) => props.theme.text};

  @media screen and (max-width: 550px) {
    width: 360px;
  }
`;

export const SendCertificationBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  font-family: ${(props) => props.theme.NotoSansKr};
  color: ${(props) => props.theme.text4};

  left: 1;
  right: 0;
  top: 11px;
  right: 11px;

  width: 108px;
  height: 28px;

  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid #ffffff;

  position: absolute;

  cursor: pointer;
`;

export const CertificationBtn = styled(SendCertificationBtn)`
  width: 80px;
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const SignUpBtn = styled.button`
  font-size: 20px;
  font-weight: 700;
  font-family: ${(props) => props.theme.NotoSansKr};
  color: black;

  width: 390px;
  height: 50px;
  margin: 50px 0 50px;
  border-radius: 10px;

  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 360px;
  }
`;
