import Link from "next/link";
import styled from "styled-components";

export const LoginBtn = styled.button`
  font-size: 20px;
  font-weight: 700;
  font-family: ${(props) => props.theme.NotoSansKr};
  color: ${(props) => props.theme.text4};

  width: 390px;
  height: 50px;
  margin-top: 63px;
  border-radius: 10px;

  cursor: pointer;

  @media screen and (max-width: 500px) {
    width: 360px;
  }
`;

export const Title = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  padding: 3px 16px 3px 17px;

  color: ${(props) => props.theme.text3};
  font-family: ${(props) => props.theme.NotoSansKr};

  border-right: 1px solid;

  cursor: pointer;

  @media screen and (max-width: 550px) {
    font-size: 13px;
  }
`;

export const RightTitle = styled(Title)`
  border: none;
  padding-right: 0px;
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
