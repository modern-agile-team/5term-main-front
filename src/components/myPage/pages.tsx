import { SideBarBlock } from "components/common/sideBar/block";
import { Container, RightContainer } from "./atom";
import { MainBlock } from "./block";

export default function MyPageFormView() {
  return (
    <Container>
      <SideBarBlock></SideBarBlock>
      <RightContainer>
        <MainBlock></MainBlock>
      </RightContainer>
    </Container>
  );
}
