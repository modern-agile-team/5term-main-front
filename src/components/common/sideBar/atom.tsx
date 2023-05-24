import styled from "styled-components";

export const MenuContainer = styled.aside`
  width: 20vw;
  max-width: 400px;
  min-width: 205px;

  height: 100vh;
  background-color: ${(props) => props.theme.text};
`;

export const MenuSelectorContainer = styled.section`
  height: 400px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderText = styled.header`
  font-size: 40px;
  font-family: ${(props) => props.theme.NotoSansKr};
  font-weight: bold;
  margin-bottom: 30px;

  @media screen and (max-width: 1300px) {
    font-size: 30px;
  }
`;

export const ServiceText = styled.div`
  font-size: 20px;
  font-family: ${(props) => props.theme.NotoSansKr};
  font-weight: bold;

  cursor: pointer;

  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }
`;

export const SeletServiceText = styled(ServiceText)`
  color: #0052ff;
  padding-bottom: 4px;
  border-bottom: 2px solid #0052ff;
`;
