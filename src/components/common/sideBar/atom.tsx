import styled from "styled-components";

export const MenuContainer = styled.aside`
  width: 23vw;
  max-width: 400px;
  min-width: 205px;
  margin-right: 100px;

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const ServiceText = styled.div`
  width: 180px;
  height: 67px;
  margin-bottom: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  font-family: ${(props) => props.theme.NotoSansKr};
  font-weight: 100;

  cursor: pointer;

  @media screen and (max-width: 1300px) {
    font-size: 20px;
  }
`;

export const SeletServiceText = styled(ServiceText)`
  background-color: #5c5c5c;
`;
