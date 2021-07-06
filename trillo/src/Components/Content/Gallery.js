import styled from "styled-components";
import hotel1 from "../../img/hotel-1.jpg";
import hotel2 from "../../img/hotel-2.jpg";
import hotel3 from "../../img/hotel-3.jpg";

const Container = styled.div`
  display: flex;
`;

const ImgWrapper = styled.figure``;

const Img = styled.img`
  width: 100%;
  display: block;
`;

const Gallery = () => {
  return (
    <Container>
      <ImgWrapper>
        <Img src={hotel1} />
      </ImgWrapper>
      <ImgWrapper>
        <Img src={hotel2} />
      </ImgWrapper>
      <ImgWrapper>
        <Img src={hotel3} />
      </ImgWrapper>
    </Container>
  );
};

export default Gallery;
