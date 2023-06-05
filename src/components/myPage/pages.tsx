import { SideBarBlock } from "components/common/sideBar/block";
import { Container, RightContainer } from "./atom";
import { MainBlock, PasswordChangeBlock } from "./block";
import { useState } from "react";

export default function MyPageFormView() {
  const [currentPage, setCurrentPage] = useState("home");

  const handlePageChange = (page: string) => {
    // 버튼을 누를 때 컴포넌트 전환과 브라우저의 이력 추가
    setCurrentPage(page);
    const stateData = { page };
    window.history.pushState(stateData, "", `/${page}`);
  };

  return (
    <Container>
      <SideBarBlock></SideBarBlock>
      <RightContainer>
        <MainBlock handleButtonClick={handlePageChange}></MainBlock>

        <PasswordChangeBlock></PasswordChangeBlock>
      </RightContainer>
    </Container>
  );
}
