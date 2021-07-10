import styled from "styled-components";
import { bg, story1, story2 } from "../../img/index";

const GridContainer = styled.div`
  background-color: var(--color-primary);
  grid-column: full-start / col-end 4;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  align-items: center;

  background-image: linear-gradient(#c699637a, #c699637a), url(${bg});
  background-size: cover;

  @media (max-width: 800px) {
    grid-column: 1 / -1;
    padding: 6rem;
  }
`;

const Img1 = styled.img`
  width: 100%;
  grid-row: 2 /6;
  grid-column: 2 /6;

  @media (max-width: 800px) {
    grid-column: 1 / 5;
    grid-row: 1 / -1;
  }
`;

const Img2 = styled.img`
  width: 115%;
  grid-row: 4 /6;
  grid-column: 4 / 7;
  z-index: 20;
  box-shadow: 0.25rem 1.5rem 5rem 1rem rgba(0, 0, 0, 0.1);

  @media (max-width: 800px) {
    grid-row: 1 / -1;
    width: 100%;
  }
`;

const Pictures = () => {
  return (
    <GridContainer>
      <Img1 src={story1} alt="Couple with new house" />
      <Img2 src={story2} alt="New House" />
    </GridContainer>
  );
};

export default Pictures;
