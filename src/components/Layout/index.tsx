import { Outlet } from "react-router-dom";
import { Header } from "..";
import * as S from "./styles";

export function Layout() {
  return (
    <S.Wrapper>
      <Header />
      <Outlet />
    </S.Wrapper>
  );
}
