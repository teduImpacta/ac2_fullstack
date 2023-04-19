import styled, { css } from "styled-components";
import { Social } from "../../components";

export const Wrapper = styled.div`
  ${() => css``}
`;

export const Presentation = styled.div`
  ${() => css`
    grid-template-columns: 1fr 9fr;
    &,
    ${Image} {
      position: relative;
      display: grid;
      justify-content: center;
    }
  `}
`;

export const SocialNetworks = styled(Social)`
  ${() => css`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 80%;
    justify-self: center;
  `}
`;

export const Services = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 5rem;
  `}
`;

export const Title = styled.h2`
  ${() => css`
    color: #935e92;
    font-weight: bold;
    margin-bottom: 0.8rem;
  `}
`;

export const Text = styled.p`
  ${() => css`
    color: #293947;
    line-height: 1.5;
  `}
`;
