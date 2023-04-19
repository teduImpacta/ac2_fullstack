import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    width: min(115rem, 85%);
    margin-inline: auto;
    padding: 5rem;
    display: grid;
    grid-gap: 5rem;
  `}
`;
