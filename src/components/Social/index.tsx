import * as S from "./styles";
import Github from "../../assets/svg/github.svg";
import Facebook from "../../assets/svg/facebook.svg";
import Twitter from "../../assets/svg/twitter.svg";

const links = [
  {
    icon: Github,
    name: "Github",
    to: "https://github.com/teduImpacta",
  },
  {
    icon: Twitter,
    name: "Twitter",
    to: "https://github.com/teduImpacta",
  },
  {
    icon: Facebook,
    name: "Facebook",
    to: "https://github.com/teduImpacta",
  },
];

export function Social() {
  return (
    <S.Wrapper>
      {links.map(({ icon, to, name }, i) => (
        <S.Link key={to} href={to} target="_blank" rel="noopener noreferrer">
          <S.Img alt={name} src={icon} />
        </S.Link>
      ))}
    </S.Wrapper>
  );
}
