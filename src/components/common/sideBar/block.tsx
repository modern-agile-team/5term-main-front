import {
  HeaderText,
  MenuContainer,
  MenuSelectorContainer,
  SeletServiceText,
  ServiceText,
} from "./atom";

export function SideBarBlock() {
  return (
    <MenuContainer>
      <MenuSelectorContainer>
        <HeaderText>마이페이지</HeaderText>
        <SeletServiceText>프로필 수정</SeletServiceText>
        <ServiceText>자기소개</ServiceText>
        <ServiceText>내가 쓴 글</ServiceText>
      </MenuSelectorContainer>
    </MenuContainer>
  );
}
