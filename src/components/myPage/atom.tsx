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
  width: 62.5vw;
  height: 50vh;
  max-width: 1000px;
  max-height: 600px;
  min-width: 650px;
  min-height: 300px;
  border-radius: 26px;

  /* background: linear-gradient(rgba(6, 9, 11, 0.2), rgba(2, 6, 9, 0.5)); */
  box-shadow: 7px 7px 10px 0 rgba(30, 30, 30, 0.5),
    inset 5px 5px 6px 0 rgba(98, 98, 98, 0.5);
  background: rgba(10, 17, 21, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.4);

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
  background-color: #0052ff;

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
