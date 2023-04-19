import styled, { css } from "styled-components";

export const Wrapper = styled.form`
  ${() => css`
    position: relative;
    width: max-content;
  `}
`;

export const Input = styled.input`
  ${() => css`
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    box-shadow: 0px 5px 5px rgba(#000000, 0.08);
    &::placeholder {
      color: #a9b0be;
    }
  `}
`;

export const Button = styled.button`
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background: #ff895f;
  border: none;
  border-radius: 5rem;
  display: grid;
  justify-items: center;
  align-items: center;
`;
