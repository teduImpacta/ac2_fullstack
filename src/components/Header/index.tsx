import { Logo, Navbar, Search } from "..";
import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <Logo />
      <Navbar />
      <Search />
    </S.Wrapper>
  );
}
