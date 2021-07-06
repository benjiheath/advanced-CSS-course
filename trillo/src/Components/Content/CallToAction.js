import styled from "styled-components";
import BtnLarge from "./BtnLarge";

const Container = styled.div`
  padding: 3.5rem;
  text-align: center;

  @media (max-width: 900px) {
    padding: 2.5rem;
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
`;

const CTABtn = styled(BtnLarge)`
  position: relative;
  overflow: hidden;

  & > * {
    display: inline-block;
    transition: 0.2s;
  }

  &:hover {
    background-image: linear-gradient(to left, var(--primary-light), var(--primary-dark));

    & span:first-child {
      transform: translateY(100%);
    }

    & span:last-child {
      top: 0;
    }
  }
`;

const BtnTxtVisible = styled.span`
  padding: 2rem 7.5rem;
`;

const BtnTxtHidden = styled.span`
  position: absolute;
  padding: 2rem 0;
  height: 100%;
  width: 100%;
  left: 0;
  top: -100%;
`;

const CallToAction = () => {
  return (
    <Container>
      <Heading>Good news! We have 4 free rooms for your selected dates!</Heading>
      <CTABtn>
        <BtnTxtVisible>Book now</BtnTxtVisible>
        <BtnTxtHidden>Only 4 rooms left</BtnTxtHidden>
      </CTABtn>
    </Container>
  );
};

export default CallToAction;
