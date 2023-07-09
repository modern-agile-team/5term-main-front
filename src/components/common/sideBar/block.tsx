import { MenuContainer, SeletServiceText, ServiceText } from "./atom";

export function SideBarBlock() {
  return (
    <MenuContainer>
      <SeletServiceText>프로필 수정</SeletServiceText>
      <ServiceText>자기소개</ServiceText>
      <ServiceText>내가 쓴 글</ServiceText>
    </MenuContainer>
  );
}
