import { MenuContainer, SeletServiceText, ServiceText } from "./atom";

interface InputProps {
  handlePageChange: (page: string) => void;
}

export function SideBarBlock({ handlePageChange }: InputProps) {
  return (
    <MenuContainer>
      <SeletServiceText>프로필 수정</SeletServiceText>
      <ServiceText onClick={() => handlePageChange("/pages2")}>
        자기소개
      </ServiceText>
      <ServiceText>내가 쓴 글</ServiceText>
    </MenuContainer>
  );
}
