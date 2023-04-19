import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    width: min(80rem, 100%);
    margin-inline: auto;
    display: grid;
    grid-template-columns: 3fr 9fr;
    place-items: center;

    & > img,
    & > div {
      max-width: 20rem;
    }
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
