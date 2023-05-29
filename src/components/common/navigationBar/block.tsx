import {
  Navigation,
  NavigationContainer,
  NavigationWapper,
  TemporaryLogo,
} from "./atom";

export function NavigationBlock() {
  return (
    <NavigationContainer>
      <TemporaryLogo>LOGO</TemporaryLogo>
      <NavigationWapper>
        <Navigation href={"/"}>스터디모집</Navigation>
        <Navigation href={"/"}>스터디 관리</Navigation>
        <Navigation href={"/"}>채팅</Navigation>
        <Navigation href={"/"}>마이페이지</Navigation>
      </NavigationWapper>
    </NavigationContainer>
  );
}
