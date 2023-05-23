import {
  ColumnContour,
  HeaderText,
  LabelText,
  MainContainer,
  MenuContainer,
  NameText,
  PenSvg,
  Profile,
  ProfileContainer,
  RightContainer,
  RowContour,
  UpdateBtn,
  UserContainer,
  UserInfoContainer,
  UserInfoText,
} from "./atom";

export function SideBarBlock() {
  return <MenuContainer></MenuContainer>;
}

export function MainBlock() {
  return (
    <RightContainer>
      <MainContainer>
        <ProfileContainer>
          <HeaderText>프로필 수정</HeaderText>
          <PenSvg />
          <Profile />
          <HeaderText>닉네임</HeaderText>
        </ProfileContainer>
        <ColumnContour />
        <UserInfoContainer>
          <LabelText>기본정보</LabelText>
          <UserContainer>
            <NameText>이름</NameText>
            <span></span>
          </UserContainer>
          <RowContour />
          <UserContainer>
            <UserInfoText>비밀번호</UserInfoText>
            <UpdateBtn>수정</UpdateBtn>
          </UserContainer>
          <RowContour />
          <UserContainer>
            <UserInfoText>전화번호</UserInfoText>
            <UpdateBtn>수정</UpdateBtn>
          </UserContainer>
          <RowContour />
          <UserContainer>
            <UserInfoText>이메일</UserInfoText>
            <UpdateBtn>수정</UpdateBtn>
          </UserContainer>
        </UserInfoContainer>
      </MainContainer>
    </RightContainer>
  );
}
