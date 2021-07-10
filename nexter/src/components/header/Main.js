import styled from "styled-components";
import { logo, bbc, bi, forbes, techcrunch, hero } from "../../img";
import { H3, H1, Button } from "../../styledComponents";

const Wrapper = styled.header`
  grid-column: full-start / col-end 6;

  background-image: linear-gradient(rgba(16, 30, 45, 0.9), rgba(16, 30, 45, 0.9)), url(${hero});
  background-size: cover;
  background-position: center;
  padding: 8rem;
  padding-top: 4rem;

  display: grid;
  grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
  grid-template-columns: minmax(min-content, max-content);
  grid-row-gap: 1.5rem;
  justify-content: center;

  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 600px) {
    padding: 5rem;
  }
`;

const Logo = styled.img`
  height: 3rem;
  justify-self: center;
`;

const HeaderBtn = styled(Button)`
  justify-self: start;
  align-self: start;
  padding: 1.8rem 3rem 1.5rem;
`;

const SeenOnText = styled.div`
  font-size: 1.6rem;
  color: var(--color-grey-light-2);

  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  align-items: center;
  grid-column-gap: 1.5rem;

  &::before,
  &::after {
    content: "";
    height: 1px;
    display: block;
    background-color: currentColor;
  }
`;

const SeenOnLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 3rem;
  justify-items: center;
  align-items: center;

  img {
    max-height: 2.5rem;
    max-width: 100%;
    filter: brightness(70%);
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="Nexter logo" />
      <H3>Your own home:</H3>
      <H1>The ultimate personal freedom</H1>
      <HeaderBtn>View our properties</HeaderBtn>
      <SeenOnText>Seen on</SeenOnText>
      <SeenOnLogos>
        <img src={bbc} alt="BBC logo" />
        <img src={forbes} alt="Forbes logo" />
        <img src={techcrunch} alt="TechCrunch logo" />
        <img src={bi} alt="Business Insider logo" />
      </SeenOnLogos>
    </Wrapper>
  );
};

export default Main;
