import Link from "next/link";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  width: 100vw;
  right: 0px;
  top: 40px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  position: fixed;
`;

export const NavigationWapper = styled.div`
  width: 456px;

  display: flex;
  justify-content: space-between;
`;

export const TemporaryLogo = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: ${(props) => props.theme.NotoSansKr};
`;

export const Navigation = styled(Link)`
  font-size: 20px;
  font-weight: 500;

  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.NotoSansKr};

  cursor: pointer;
`;
