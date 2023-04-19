import * as S from "./styles";

export function Navbar() {
  return (
    <S.Wrapper>
      <S.Item to="/">Início</S.Item>
      <S.Item to="/about">Sobre mim</S.Item>
    </S.Wrapper>
  );
}
