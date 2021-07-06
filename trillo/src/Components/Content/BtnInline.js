import styled from "styled-components";

const BtnInline = styled.button`
  border: none;
  color: var(--primary-light);
  font-size: inherit;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    animation: pulsate 1.2s infinite;
  }
`;

export default BtnInline;
