import styled from "styled-components";

// Typography

export const H1 = styled.h1`
  font-size: 4.5rem;
  color: var(--color-grey-light-1);
  line-height: 1;
`;

export const H2 = styled.h2`
  font-size: 4rem;
  font-style: italic;
  line-height: 1;
`;

export const H3 = styled.h3`
  font-size: 1.6rem;
  color: var(--color-primary);
  text-transform: uppercase;
`;

export const H4 = styled.h4`
  font-size: 1.9rem;
`;

// Other

export const Button = styled.button`
  border: 1px solid transparent;
  background-color: var(--color-primary);
  color: #fff;
  font-family: var(--font-display);
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  transition: 0.25s;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
    background-color: #fff;
    border: 1px solid var(--color-primary);
  }
`;
