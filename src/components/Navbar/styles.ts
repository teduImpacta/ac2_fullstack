import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  ${() => css`
    width: max-content;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2.5rem;
  `}
`;

export const Item = styled(Link)`
  ${() => css`
    color: #293947;
    text-decoration: none;
    font-size: 1.3rem;
  `}
`;
