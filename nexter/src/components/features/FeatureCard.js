import styled from "styled-components";
import Icon from "../Icon";
import { H4 } from "../../styledComponents";

const GridContainer = styled.div`
  display: grid;
  transition: all 0.25s;
  border-radius: 0px;
  padding: 1rem 0 0 1rem;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1.5rem;

  grid-template-columns: min-content 1fr;

  &:hover {
    box-shadow: 0px 12px 20px 8px #c699633f;
    transform: translateY(-0.3rem);
  }
`;

const Text = styled.p`
  font-size: 1.7rem;
`;

const FeatureCard = ({ feature }) => {
  return (
    <GridContainer>
      <Icon name={feature.icon} hw="4.5rem" gr="1 / span 2" />
      <H4>{feature.title}</H4>
      <Text>{feature.text}</Text>
    </GridContainer>
  );
};

export default FeatureCard;
