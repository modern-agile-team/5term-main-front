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

  padding-bottom: 20px;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: end;
  color: ${(props) => props.theme.text};
`;

export const Form = styled.form``;

export const InputContainer = styled.div`
  width: 601px;
  display: flex;
  justify-content: space-between;
  padding: 27px 0 20px;
  @media screen and (max-width: 500px) {
    width: 360px;
  }
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

export const InfoInput = styled.input`
  font-size: 14px;
  font-weight: 500;
  font-family: ${(props) => props.theme.NotoSansKr};
  color: ${(props) => props.theme.text2};
  padding-bottom: 11px;

  width: 600px;
  outline: none;
  background: transparent;
  border: 0;
  border-bottom: 3px solid ${(props) => props.theme.text};
  @media screen and (max-width: 500px) {
    width: 360px;
  }
`;

export const SendCertificationBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  font-family: ${(props) => props.theme.NotoSansKr};
  color: ${(props) => props.theme.text4};

  position: absolute;
  left: 1;
  right: 0;

  width: 108px;
  height: 28px;
  background: rgb(182 187 190 / 95%);
  box-shadow: inset 5px 5px 8px #4c4b4b80, 7px 7px 15px #4e4c4c9e;
  backdrop-filter: blur(20px);
  border-radius: 6px;
  border: 1px solid #aaaaaa;

  cursor: pointer;
`;

export const CertificationBtn = styled(SendCertificationBtn)`
  width: 80px;
`;

export const EmailSelectBtn = styled(SendCertificationBtn)`
  width: 180px;
  height: 32px;
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const SignUpBtn = styled.button`
  font-size: 20px;
  font-weight: 700;
  font-family: ${(props) => props.theme.NotoSansKr};
  color: ${(props) => props.theme.text};

  width: 390px;
  height: 50px;
  margin: 50px 0 50px;
  background: rgb(28 36 41 / 95%);
  box-shadow: inset 5px 5px 6px #62626280, 7px 7px 10px #000000;
  backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid #aaaaaa;

  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 360px;
  }
`;
