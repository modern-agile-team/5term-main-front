import { SideBarBlock } from "components/common/sideBar/block";
import { Container } from "./atom";
import { MainBlock } from "./block";

export default function MyPageFormView() {
  return (
    <Container>
      <SideBarBlock></SideBarBlock>
      <MainBlock></MainBlock>
    </Container>
  );
}
