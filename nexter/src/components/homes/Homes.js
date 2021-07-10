import styled from "styled-components";
import HomesCard from "./HomesCard";
import { house1, house2, house3, house4, house5, house6 } from "../../img/index";

const GridContainer = styled.section`
  grid-column: center-start / center-end;

  margin: 15rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 7rem;

  @media (max-width: 600px) {
    margin: 7rem 0;
  }
`;

const Homes = () => {
  const cards = [
    {
      title: "Beautiful Familiy House",
      img: house1,
      country: "USA",
      rooms: 5,
      area: 325,
      price: "1,200,000",
    },
    {
      title: "Modern Glass Villa",
      img: house2,
      country: "Canada",
      rooms: 6,
      area: 450,
      price: "2,750,000",
    },
    {
      title: "Cozy Country House",
      img: house3,
      country: "UK",
      rooms: 4,
      area: 250,
      price: "850,000",
    },
    {
      title: "Large Rustical Villa",
      img: house4,
      country: "Portugal",
      rooms: 6,
      area: 480,
      price: "1,950,000",
    },
    {
      title: "Majestic Palace House",
      img: house5,
      country: "Germany",
      rooms: 18,
      area: 4230,
      price: "9,500,000",
    },
    {
      title: "Modern Familiy Apartment",
      img: house6,
      country: "Italy",
      rooms: 3,
      area: 180,
      price: "600,000",
    },
  ];

  return (
    <GridContainer>
      {cards.map((card, idx) => (
        <HomesCard card={card} key={idx} />
      ))}
    </GridContainer>
  );
};

export default Homes;
