import * as S from "./styles";
import PresentationImg from "../../assets/svg/presentation.svg";

const services = [
  {
    title: "Front-end",
    description: `Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Tenetur quo debitis deserunt id 
      laudantium eum, perspiciatis dolorem dolore consequuntur dolores laboriosam 
      fugit temporibus? Cum consequatur, facilis voluptatibus ullam odio eligendi?`,
  },
  {
    title: "Back-end",
    description: `Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Tenetur quo debitis deserunt id 
      laudantium eum, perspiciatis dolorem dolore consequuntur dolores laboriosam 
      fugit temporibus? Cum consequatur, facilis voluptatibus ullam odio eligendi?`,
  },
  {
    title: "Mobile",
    description: `Lorem ipsum dolor sit amet 
      consectetur adipisicing elit. Tenetur quo debitis deserunt id 
      laudantium eum, perspiciatis dolorem dolore consequuntur dolores laboriosam 
      fugit temporibus? Cum consequatur, facilis voluptatibus ullam odio eligendi?`,
  },
];

export function HomePage() {
  return (
    <S.Wrapper>
      <S.Presentation>
        <S.SocialNetworks />
        <S.Image src={PresentationImg} alt="Apresentação" />
      </S.Presentation>
      <S.Services>
        {services.map(({ title, description }) => (
          <div key={title}>
            <S.Title>{title}</S.Title>
            <S.Text>{description}</S.Text>
          </div>
        ))}
      </S.Services>
    </S.Wrapper>
  );
}
