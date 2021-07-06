import styled from "styled-components";

const Wrapper = styled.figure`
  padding: 3rem;
  margin-bottom: 3.5rem;
  background-color: #fff;
  box-shadow: var(--shadow-light);

  @media (max-width: 900px) {
    padding: 1.75rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 3rem;
  }
`;

const Quote = styled.blockquote`
  margin-bottom: 2rem;
`;

const User = styled.figcaption`
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  height: 4.5rem;
  width: 4.5rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

const NameDateWrapper = styled.div`
  margin-right: auto;
`;

const Name = styled.p`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

const Date = styled.p`
  font-size: 1rem;
`;

const Rating = styled.div`
  color: var(--primary-light);
  font-weight: 300;
  font-size: 2.2rem;
`;

const ReviewCard = ({ review, idx }) => {
  return (
    <Wrapper>
      <Quote>{`"${review.text}"`}</Quote>
      <User>
        <Photo src={review.photo} />
        <NameDateWrapper>
          <Name>{review.name}</Name>
          <Date>{review.date}</Date>
        </NameDateWrapper>
        <Rating>{review.rating}</Rating>
      </User>
    </Wrapper>
  );
};

export default ReviewCard;
