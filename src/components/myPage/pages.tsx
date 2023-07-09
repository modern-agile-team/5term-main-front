import { SideBarBlock } from "components/common/sideBar/block";
import { Container, RightContainer } from "./atom";
import { MainBlock, PasswordChangeBlock, ProfileChangeBlock } from "./block";
import { useEffect, useState } from "react";

export default function MyPageFormView() {
  const [currentPage, setCurrentPage] = useState("");

  const handlePageChange = (page: string) => {
    // 버튼을 누를 때 컴포넌트 전환과 브라우저의 이력 추가
    setCurrentPage(page);
    const stateData = { page };
    window.history.pushState(stateData, "", `${page}`);
  };

  useEffect(() => {
    //뒤로가기 이벤트 및 앞으로 가기 이벤트
    setCurrentPage(window.location.pathname);
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <Container>
      <SideBarBlock></SideBarBlock>
      <RightContainer>
        {currentPage === "/user" && ( // 백엔드 api 연동때 수정 예정
          <MainBlock handlePageChange={handlePageChange}></MainBlock>
        )}
        {currentPage === "/pages1" && (
          <ProfileChangeBlock
            handlePageChange={handlePageChange}
          ></ProfileChangeBlock>
        )}
        {currentPage === "/password" && (
          <PasswordChangeBlock
            handlePageChange={handlePageChange}
          ></PasswordChangeBlock>
        )}
      </RightContainer>
    </Container>
  );
}
