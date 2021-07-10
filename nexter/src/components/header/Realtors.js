import styled from "styled-components";
import { H3, H4 } from "../../styledComponents";
import { realtor1, realtor2, realtor3 } from "../../img";

const GridContainer = styled.div`
  background-color: var(--color-secondary);
  grid-column: col-start 7 / full-end;

  display: grid;
  align-content: center;
  justify-content: center;
  grid-row-gap: 2rem;

  padding: 3rem;

  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;

const Heading = styled(H3)`
  justify-self: center;
`;

const RealtorsGridContainer = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  grid-column-gap: 2rem;
  grid-row-gap: 5vh;

  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, min-content max-content);
  }

  @media (max-width: 600px) {
    grid-template-columns: min-content max-content;
    grid-row-gap: 3vh;
  }
`;

const RealtorPhoto = styled.img`
  border-radius: 50%;
  display: block;
  width: 7rem;
`;

const RealtorDetails = styled.div``;

const Name = styled(H4)`
  color: var(--color-grey-light-1);
`;

const HousesSold = styled.p`
  text-transform: uppercase;
  color: var(--color-grey-light-2);
  margin-top: -3px;
`;

const Realtors = () => {
  return (
    <GridContainer>
      <Heading>Top 3 Realtors</Heading>
      <RealtorsGridContainer>
        <RealtorPhoto src={realtor1} alt="Realtor 1" />
        <RealtorDetails>
          <Name>Erik Feinman </Name>
          <HousesSold>245 houses sold</HousesSold>
        </RealtorDetails>
        <RealtorPhoto src={realtor2} alt="Realtor 2" />
        <RealtorDetails>
          <Name>Kim Brown</Name>
          <HousesSold>212 houses sold</HousesSold>
        </RealtorDetails>
        <RealtorPhoto src={realtor3} alt="Realtor 3" />
        <RealtorDetails>
          <Name>Toby Ramsey</Name>
          <HousesSold>198 houses sold</HousesSold>
        </RealtorDetails>
      </RealtorsGridContainer>
    </GridContainer>
  );
};

export default Realtors;
