import styled from "styled-components";
import FeatureCard from "./FeatureCard";

const GridContainer = styled.section`
  grid-column: center-start / center-end;

  margin: 15rem 0;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start; // fixed gap issue with p text in children (feature card)

  @media (max-width: 600px) {
    margin: 8rem 0;
  }
`;

const Features = () => {
  const featureData = [
    {
      icon: "global",
      title: "World's best luxury homes",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      icon: "trophy",
      title: "Only the best properties",
      text: "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.",
    },
    {
      icon: "map-pin",
      title: "All homes in in top locations",
      text: "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.",
    },
    {
      icon: "key",
      title: "New home in one week",
      text: "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: "presentation",
      title: "Top 1% realtors",
      text: "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.",
    },
    {
      icon: "lock",
      title: "Secure payments on nexter",
      text: "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.",
    },
  ];

  return (
    <GridContainer>
      {featureData.map((feature, idx) => (
        <FeatureCard key={idx} feature={feature} />
      ))}
    </GridContainer>
  );
};

export default Features;
