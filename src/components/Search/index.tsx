import * as S from "./styles";
import SearchSvg from "../../assets/svg/search.svg";

export function Search() {
  return (
    <S.Wrapper>
      <S.Input type="text" placeholder="Buscar" />
      <S.Button>
        <img src={SearchSvg} alt="Ícone de pesquisa" />
      </S.Button>
    </S.Wrapper>
  );
}
