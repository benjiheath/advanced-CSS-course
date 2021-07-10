import styled from "styled-components";
import { galleryImgs } from "../../img/index";

const Wrapper = styled.section`
  background-color: var(--color-grey-light-1);
  grid-column: full-start / full-end;

  padding: 1rem;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(7, 5vw); // using vw maintains aspect ratio!
  grid-gap: 1rem;
`;

const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: 0.2s;
  overflow: hidden;
  overflow-x: auto;

  &:hover {
    transform: scale(1.0125);
    filter: brightness(1.1);
  }

  grid-column: ${({ idx }) => idx === 0 && "1/3"};
  grid-row: ${({ idx }) => idx === 0 && "1/3"};

  grid-column: ${({ idx }) => idx === 1 && "3/6"};
  grid-row: ${({ idx }) => idx === 1 && "1/4"};

  grid-column: ${({ idx }) => idx === 2 && "6/7"};
  grid-row: ${({ idx }) => idx === 2 && "1/3"};

  grid-column: ${({ idx }) => idx === 3 && "7/-1"};
  grid-row: ${({ idx }) => idx === 3 && "1/3"};

  grid-column: ${({ idx }) => idx === 4 && "1/3"};
  grid-row: ${({ idx }) => idx === 4 && "3/6"};

  grid-column: ${({ idx }) => idx === 5 && "3/5"};
  grid-row: ${({ idx }) => idx === 5 && "4/6"};

  grid-column: ${({ idx }) => idx === 6 && "5/6"};
  grid-row: ${({ idx }) => idx === 6 && "4/5"};

  grid-column: ${({ idx }) => idx === 7 && "6/8"};
  grid-row: ${({ idx }) => idx === 7 && "3/5"};

  grid-column: ${({ idx }) => idx === 8 && "8/9"};
  grid-row: ${({ idx }) => idx === 8 && "3/6"};

  grid-column: ${({ idx }) => idx === 9 && "1/2"};
  grid-row: ${({ idx }) => idx === 9 && "6/8"};

  grid-column: ${({ idx }) => idx === 10 && "2/4"};
  grid-row: ${({ idx }) => idx === 10 && "6/8"};

  grid-column: ${({ idx }) => idx === 11 && "4/5"};
  grid-row: ${({ idx }) => idx === 11 && "6/8"};

  grid-column: ${({ idx }) => idx === 12 && "5/8"};
  grid-row: ${({ idx }) => idx === 12 && "5/8"};

  grid-column: ${({ idx }) => idx === 13 && "8/9"};
  grid-row: ${({ idx }) => idx === 13 && "6/8"};
`;

const randomiseImgOrder = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const Gallery = () => {
  return (
    <Wrapper>
      {randomiseImgOrder(galleryImgs).map((img, idx) => (
        <Img src={img} alt="gallery-photo" idx={idx} key={idx} />
      ))}
    </Wrapper>
  );
};

export default Gallery;
