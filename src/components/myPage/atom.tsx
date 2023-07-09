import styled from "styled-components";
import Image from "next/image";
import defaultImg from "../../../public/common/defaultImg_test.png";
import penSvg from "../../../public/common/pen.svg";

// ----------------------------------------------------------------------------------
//            프로필 수정 및 기본정보 atom
// ----------------------------------------------------------------------------------

export const Container = styled.div`
  display: flex;
`;

export const RightContainer = styled.section`
  margin: 0 auto;
  display: flex;

  align-items: center;
`;

export const MainContainer = styled.div`
  width: 73vw;
  height: 50vh;
  max-width: 1000px;
  max-height: 600px;
  min-width: 650px;
  min-height: 300px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ProfileContainer = styled.div`
  width: 30%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ColumnContour = styled.div`
  width: 2px;
  height: 80%;

  background-color: ${(props) => props.theme.text};
`;

export const RowContour = styled(ColumnContour)`
  height: 1px;
  width: 85%;
`;

export const UserInfoContainer = styled.div`
  width: 60%;
  height: 60%;
  margin: 0 2vw;

  display: flex;

  flex-direction: column;
  justify-content: space-around;
`;

export const HeaderText = styled.div`
  font-size: 20px;
  font-weight: bold;

  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.NotoSansKr};
`;

const PencilIconContainer = styled.span`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  background-color: #0052ff;
  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: -10px;
  bottom: -10px;
`;

const ProfileCustom = styled.div`
  /* react-cropper로 이미지 수정 진행*/
  margin-top: 30px;

  position: relative;
`;

const ImageWapper = styled.div`
  overflow: hidden;
  border-radius: 20px;
`;

export const Profile = () => (
  <ProfileCustom>
    <ImageWapper>
      <Image src={defaultImg} alt="test" width={150} height={150} />
    </ImageWapper>
    <PencilIconContainer>
      <Image src={penSvg} alt="penIcon" width={30} height={30} />
    </PencilIconContainer>
  </ProfileCustom>
);

export const ProfileChange = () => (
  <ImageWapper>
    <Image src={defaultImg} alt="test" width={150} height={150} />
  </ImageWapper>
);

export const LabelText = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 25px;

  color: ${(props) => props.theme.text2};
  font-family: ${(props) => props.theme.NotoSansKr};
`;

export const NameText = styled(HeaderText)`
  font-size: 24px;

  margin: 7px 0px 7px;
`;

export const UserInfoText = styled(NameText)`
  font-size: 16px;
  font-weight: 300;
`;

export const UpdateBtn = styled.button`
  width: 42px;
  height: 20px;

  padding: 0;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.text};

  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.text};
  font-family: ${(props) => props.theme.NotoSansKr};

  cursor: pointer;
`;

export const UserContainer = styled.div`
  width: 73%;
  margin-left: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// ----------------------------------------------------------------------------------
//            프로필 및 닉네임 변경 atom
// ----------------------------------------------------------------------------------

export const ProfileChangeContainer = styled.div`
  width: 73vw;
  height: 50vh;
  max-width: 1000px;
  max-height: 600px;
  min-width: 650px;
  min-height: 300px;
  border-radius: 26px;

  display: flex;
  flex-direction: column;
`;

export const NicknameWafer = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

export const ProfileWafer = styled(NicknameWafer)`
  border-bottom: solid 1px white;
`;

export const ProfileText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  width: 250px;
  height: 100px;
  font-size: 20px;
`;

export const NicknameText = styled(ProfileText)``;

export const CangeWafer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProfileCangeEditor = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

export const ChangeBtn = styled(UpdateBtn)`
  width: 80px;
  height: 26px;
  font-size: 18px;
  background-color: #2f77ff;
  border: none;
  font-size: 16px;
`;

export const DelitationBtn = styled(UpdateBtn)`
  width: 50px;
  height: 26px;
  font-size: 15px;
`;

export const ChangeInput = styled.input`
  width: 457px;
  height: 42px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid white;
`;

export const EditroWafer = styled.div`
  width: 80%;

  display: flex;
  justify-content: center;
`;

export const CheckBtn = styled(ChangeBtn)`
  width: 92px;
  height: 46px;
  font-size: 20px;
  background-color: #2f77ff;
  border: none;
`;

export const CancelBtn = styled(DelitationBtn)`
  width: 92px;
  height: 46px;
  font-size: 20px;
  margin-left: 30px;
`;

// ----------------------------------------------------------------------------------
//            패스워드 변경 atom
// ----------------------------------------------------------------------------------

export const PasswordChangeContainer = styled.div`
  width: 73vw;
  height: 50vh;
  max-width: 1000px;
  max-height: 600px;
  min-width: 650px;
  min-height: 300px;
  border-radius: 26px;

  display: flex;
  flex-direction: column;
`;

export const PasswordChangeText = styled.div`
  height: 40px;
  color: ${(props) => props.theme.text};
  font-size: 28px;
`;

export const PasswordChangeWapper = styled.div`
  width: 800px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const PasswordInputWapper = styled.div`
  width: 80%;
  margin-bottom: 40px;
`;

export const PasswordChangeLabel = styled.label`
  display: inline-block;
  width: 130px;
  height: 20px;
  color: ${(props) => props.theme.text};
`;

export const ValidText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #b8bdde;
  right: 150px;
  position: absolute;

  @media screen and (max-width: 550px) {
    font-size: 10px;
    padding-top: 6px;
  }
`;
