import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${() => css`
    width: 100%;
    display: grid;
    grid-template-columns: 160px repeat(2, auto);
    align-items: center;
    justify-content: space-between;
  `}
`;
