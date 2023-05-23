import { Container } from "./atom";
import { MainBlock, SideBarBlock } from "./block";

export default function MyPageFormView() {
  return (
    <Container>
      <SideBarBlock></SideBarBlock>
      <MainBlock></MainBlock>
    </Container>
  );
}
