import styled from "styled-components";
import ReviewCard from "./ReviewCard";
import BtnInline from "./BtnInline";
import List from "./List";
import user3 from "../../img/user-3.jpg";
import user4 from "../../img/user-4.jpg";
import user5 from "../../img/user-5.jpg";
import user6 from "../../img/user-6.jpg";
import user1 from "../../img/user-1.jpg";
import user2 from "../../img/user-2.jpg";

const Detail = () => {
  const hotelListItems = [
    "Close to the beach",
    "Breakfast included",
    "Free airport shuttle",
    "Free wifi in all rooms",
    "Air conditioning and heating",
    "Pets allowed",
    "We speak all languages",
    "Perfect for families",
  ];

  const reviewCards = [
    {
      name: "Nick Smith",
      date: "Feb 23rd, 2017",
      rating: 7.8,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
      photo: user1,
    },
    {
      name: "Mary Thomas",
      date: "Sept 13th, 2017",
      rating: 9.3,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
      photo: user2,
    },
  ];

  return (
    <Container>
      <Description>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione
          sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
        </Paragraph>
        <Paragraph>
          Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus,
          inventore iure aliquid aliquam.
        </Paragraph>
        <List items={hotelListItems} />
        <RecommendationsWrapper>
          <RecTxt>Lucy and 3 other friends recommend this hotel.</RecTxt>
          <RecPhotos>
            <Photo src={user3} alt="Friend 1" />
            <Photo src={user4} alt="Friend 2" />
            <Photo src={user5} alt="Friend 3" />
            <Photo src={user6} alt="Friend 4" />
          </RecPhotos>
        </RecommendationsWrapper>
      </Description>

      <UserReviews>
        {reviewCards.map((review, idx) => (
          <ReviewCard key={idx} review={review} />
        ))}
        <Btn>
          Show all <span>&rarr;</span>
        </Btn>
      </UserReviews>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: flex;
  padding: 4.5rem;
  background-color: var(--grey-light-1);
  border-bottom: var(--line);
  font-size: 1.4rem;

  @media (max-width: 900px) {
    padding: 2.5rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

///////////////////////////////////
// DESCRIPTION

const Description = styled.div`
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  flex: 0 0 60%;
  margin-right: 4.5rem;

  @media (max-width: 900px) {
    padding: 1.75rem;
  }

  @media (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
`;

const Paragraph = styled.p`
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

///////////////////////////////////
// RECOMMENDATIONS

const RecommendationsWrapper = styled.div`
  font-size: 1.3rem;
  color: var(--grey-dark-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RecTxt = styled.p``;

const RecPhotos = styled.div`
  display: flex;
`;

const Photo = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  box-sizing: content-box;
  border: 3px solid #fff;

  &:not(:last-child) {
    margin-right: -2rem;
  }
`;

///////////////////////////////////
// USER REVIEWS

const UserReviews = styled.div`
  flex: 1; // occupy remaining space
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;

const Btn = styled(BtnInline)`
  margin: 0 auto;

  & span {
    margin-left: 3px;
    transition: margin-left 0.2s;
  }

  &:hover span {
    margin-left: 12px;
  }
`;
