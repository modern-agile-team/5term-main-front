import { useRouter } from "next/router";
import {
  ColumnContour,
  DelitationBtn,
  HeaderText,
  LabelText,
  MainContainer,
  NameText,
  NicknameText,
  NicknameWafer,
  Profile,
  ProfileCangeEditor,
  CangeWafer,
  ProfileChange,
  ChangeBtn,
  ProfileChangeContainer,
  ProfileContainer,
  ProfileText,
  ProfileWafer,
  RowContour,
  UpdateBtn,
  UserContainer,
  UserInfoContainer,
  UserInfoText,
  ChangeInput,
  EditroWafer,
  CheckBtn,
  CancelBtn,
  PasswordChangeContainer,
  ChangeText,
  PasswordChangeWapper,
  PasswordInputWapper,
  PasswordChangeLabel,
  ValidText,
  IntroductionChangeContainer,
  IntroductionChangeWafer,
} from "./atom";

interface InputProps {
  handlePageChange: (page: string) => void;
}
export function MainBlock({ handlePageChange }: InputProps) {
  const router = useRouter();

  return (
    <MainContainer>
      <ProfileContainer onClick={() => handlePageChange("/pages1")}>
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
          <UpdateBtn onClick={() => handlePageChange("/password")}>
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
          <UpdateBtn onClick={() => handlePageChange("pages2")}>수정</UpdateBtn>
        </UserContainer>
      </UserInfoContainer>
    </MainContainer>
  );
}

export function ProfileChangeBlock({ handlePageChange }: InputProps) {
  return (
    <ProfileChangeContainer>
      <ProfileWafer>
        <ProfileText>프로필 사진</ProfileText>
        <CangeWafer>
          <ProfileChange />
          <ProfileCangeEditor>
            <ChangeBtn>사진 변경</ChangeBtn>
            <DelitationBtn>삭제</DelitationBtn>
          </ProfileCangeEditor>
        </CangeWafer>
      </ProfileWafer>
      <NicknameWafer>
        <NicknameText>닉네임</NicknameText>
        <CangeWafer>
          <ChangeInput />
        </CangeWafer>
      </NicknameWafer>
      <EditroWafer>
        <CheckBtn>적용</CheckBtn>
        <CancelBtn>취소</CancelBtn>
      </EditroWafer>
    </ProfileChangeContainer>
  );
}

export function PasswordChangeBlock({ handlePageChange }: InputProps) {
  return (
    <PasswordChangeContainer>
      <ChangeText>비밀번호 변경</ChangeText>
      <PasswordChangeWapper>
        <PasswordInputWapper>
          <PasswordChangeLabel>현재 비밀번호</PasswordChangeLabel>
          <ChangeInput />
          <ValidText>맞음</ValidText>
        </PasswordInputWapper>
        <PasswordInputWapper>
          <PasswordChangeLabel>새 비밀번호</PasswordChangeLabel>
          <ChangeInput />
          <ValidText>맞음</ValidText>
        </PasswordInputWapper>
        <PasswordInputWapper>
          <PasswordChangeLabel>새 비밀번호 확인</PasswordChangeLabel>
          <ChangeInput />
          <ValidText>맞음</ValidText>
        </PasswordInputWapper>
      </PasswordChangeWapper>
      <EditroWafer>
        <CheckBtn>확인</CheckBtn>
        <CancelBtn>취소</CancelBtn>
      </EditroWafer>
    </PasswordChangeContainer>
  );
}

export function IntroductionChangeBlock({ handlePageChange }: InputProps) {
  return (
    <IntroductionChangeContainer>
      <ChangeText>자기소개</ChangeText>
      <IntroductionChangeWafer></IntroductionChangeWafer>
      <EditroWafer>
        <CheckBtn>수정</CheckBtn>
        <CancelBtn>취소</CancelBtn>
      </EditroWafer>
    </IntroductionChangeContainer>
  );
}
