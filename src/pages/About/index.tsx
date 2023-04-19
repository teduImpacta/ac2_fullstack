import * as S from "./styles";
import DevSvg from "../../assets/svg/dev.svg";

export function AboutPage() {
  return (
    <S.Wrapper>
      <img alt="Developer" src={DevSvg} />
      <div>
        <S.Title>Sobre mim!</S.Title>
        <S.Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam rem
          iure odio maiores neque! Dignissimos quod facilis dolores asperiores
          reiciendis cupiditate tempora recusandae deserunt delectus commodi.
          Consequatur aliquam ut sint!
        </S.Text>
      </div>
    </S.Wrapper>
  );
}
