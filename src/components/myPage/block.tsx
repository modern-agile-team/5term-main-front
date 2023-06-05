import {
  ColumnContour,
  HeaderText,
  LabelText,
  MainContainer,
  NameText,
  Profile,
  ProfileContainer,
  RowContour,
  UpdateBtn,
  UserContainer,
  UserInfoContainer,
  UserInfoText,
} from "./atom";

interface InputProps {
  handleButtonClick: (page: string) => void;
}

export function MainBlock({ handleButtonClick }: InputProps) {
  return (
    <MainContainer>
      <ProfileContainer onClick={() => handleButtonClick("pages")}>
        <HeaderText>프로필 수정</HeaderText>
        <Profile />
        <HeaderText>닉네임</HeaderText>
      </ProfileContainer>
      <ColumnContour />
      <UserInfoContainer>
        <LabelText>기본정보</LabelText>
        <UserContainer>
          <NameText>이름</NameText>
        </UserContainer>
        <RowContour />
        <UserContainer>
          <UserInfoText>비밀번호</UserInfoText>
          <UpdateBtn onClick={() => handleButtonClick("pages1")}>
            수정
          </UpdateBtn>
        </UserContainer>
        <RowContour />
        <UserContainer>
          <UserInfoText>전화번호</UserInfoText>
          <UpdateBtn>수정</UpdateBtn>
        </UserContainer>
        <RowContour />
        <UserContainer>
          <UserInfoText>이메일</UserInfoText>
          <UpdateBtn onClick={() => handleButtonClick("pages2")}>
            수정
          </UpdateBtn>
        </UserContainer>
      </UserInfoContainer>
    </MainContainer>
  );
}

export function PasswordChangeBlock() {
  return (
    <MainContainer>
      <div>TEST</div>
      <div>TEST</div>
      <div>TEST</div>
    </MainContainer>
  );
}
