import { SendCertificationBtn, ServeTitle } from "components/sign-up/atom";
import Link from "next/link";
import styled from "styled-components";

export const LoginBtn = styled(SendCertificationBtn)`
  font-size: 20px;
  font-weight: 700;
  width: 390px;
  height: 50px;
  margin-top: 63px;

  position: static;

  @media screen and (max-width: 500px) {
    width: 360px;
  }
`;

export const Title = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  padding: 3px 16px 3px 17px;

  color: ${(props) => props.theme.text3};

  border-right: 1px solid;
`;

export const RightTitle = styled(Title)`
  border: none;
`;

export const TitleContainer = styled.div`
  width: 601px;
  margin-top: 13px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 550px) {
    width: 360px;
  }
`;
