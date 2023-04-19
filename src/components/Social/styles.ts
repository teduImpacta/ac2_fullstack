import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: grid;
    grid-gap: 1rem;
  `}
`;

export const Link = styled.a`
  ${() => css`
    background-color: #ff895f;
    width: 47px;
    height: 47px;
    border-radius: 5rem;
    display: grid;
    justify-items: center;
    align-items: center;
    transition: transform 0.2s linear;
    &:hover {
      transform: scale(1.1);
    }
  `}
`;

export const Img = styled.img`
  ${() => css`
    width: 23px;
    height: 23px;
  `}
`;
