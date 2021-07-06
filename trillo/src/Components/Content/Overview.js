import styled from "styled-components";
import Icon from "../Icon";
import BtnInline from "./BtnInline";

const Overview = () => {
  return (
    <Container>
      <Heading>Hotel Las Palmas</Heading>
      <StarsWrapper>
        <Icon icon="star" hw="1.75" color="var(--primary-light)" />
        <Icon icon="star" hw="1.75" color="var(--primary-light)" />
        <Icon icon="star" hw="1.75" color="var(--primary-light)" />
        <Icon icon="star" hw="1.75" color="var(--primary-light)" />
        <Icon icon="star" hw="1.75" color="var(--primary-light)" />
      </StarsWrapper>
      <Location>
        <Icon icon="location-pin" hw="1.75" color="var(--primary-light)" />
        <BtnInline>Albufeira, Portugal</BtnInline>
      </Location>
      <Rating>
        <Average>8.6</Average>
        <Count>429 votes</Count>
      </Rating>
    </Container>
  );
};

export default Overview;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: var(--line);
`;

const Heading = styled.h1`
  padding: 1.5rem 3rem;
  font-size: 2.25rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 500px) {
    font-size: 1.8rem;
    letter-spacing: 0.5px;
    padding: 1.25rem 1.5rem;
  }

  @media (max-width: 430px) {
    font-size: 1.7rem;
    padding: 1.25rem 1rem;
  }

  @media (max-width: 400px) {
    max-width: 11.5rem;
  }
`;

const StarsWrapper = styled.div`
  margin-right: auto; //! REM
  display: flex;
  align-items: center;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-right: 3rem;

  @media (max-width: 430px) {
    margin-right: 1rem;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const Rating = styled.div`
  background-color: var(--primary-light);
  color: #fff;
  padding: 0 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  @media (max-width: 430px) {
    padding: 0 0.5rem;
  }
`;

const Average = styled.div`
  font-size: 2.25rem;
  font-weight: 300;
`;

const Count = styled.div`
  font-size: 0.8rem;
  text-transform: uppercase;
`;
