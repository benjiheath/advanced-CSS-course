import styled from "styled-components";
import sprite from "../img/sprite.svg";

const Svg = styled.svg`
  fill: var(--color-primary);
  grid-row: ${({ gr }) => gr};
  grid-column: ${({ gc }) => gc};
  justify-self: ${({ js }) => js};
  transform: ${({ trans }) => trans};
  height: ${({ hw }) => hw};
  width: ${({ hw }) => hw};
  margin: ${({ m }) => m};
  z-index: ${({ z }) => z};
`;

const Icon = ({ name, hw, feat, gr, gc, trans, js, m, z }) => {
  return (
    <Svg feat={feat} hw={hw} gr={gr} gc={gc} trans={trans} js={js} m={m} z={z}>
      <use xlinkHref={`${sprite}#icon-${name}`} />
    </Svg>
  );
};

export default Icon;
