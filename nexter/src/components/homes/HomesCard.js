import styled from "styled-components";
import Icon from "../Icon";
import Detail from "./Detail";
import { Button } from "../../styledComponents";

const GridContainer = styled.div`
  background-color: var(--color-grey-light-1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3.5rem;
  transition: 0.5s;
`;

const HouseImg = styled.img`
  width: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 1;
`;

const Title = styled.h5`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  z-index: 3;
  justify-self: center;
  align-self: end;

  font-size: 1.6rem;
  text-align: center;
  padding: 1.25rem;
  background-color: var(--color-secondary);
  color: #fff;
  width: 80%;
  height: 5rem;
  margin-bottom: -2.5rem;
`;

const HouseBtn = styled(Button)`
  grid-column: 1 / -1;
`;

const HomesCard = ({ card }) => {
  return (
    <GridContainer>
      <HouseImg src={card.img} alt="house" />
      <Icon name="heart-full" hw="2.5rem" gc="2/3" gr="1/2" js="end" m="0.7rem 1rem" z="2" />
      <Title>{card.title}</Title>
      <Detail text={card.country} icon="map-pin" m />
      <Detail text={`${card.rooms} rooms`} icon="profile-male" m />
      <Detail text={`${card.area}`} icon="expand" m2={true} />
      <Detail text={`$${card.price}`} icon="key" />
      <HouseBtn>Contact Realtor</HouseBtn>
    </GridContainer>
  );
};

export default HomesCard;
