import styled from "styled-components";
import { H3, H2, Button } from "../../styledComponents";

const FlexWrapper = styled.div`
  background-color: var(--color-grey-light-1);
  grid-column: col-start 5 / full-end;

  padding: 6rem 8vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 800px) {
    grid-column: 1 / -1;
    grid-row: 5 / 6;
  }
`;

const H3Story = styled(H3)`
  margin-bottom: 2rem;
`;

const H2Story = styled(H2)`
  margin-bottom: 3rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 4rem;
`;

const Content = () => {
  return (
    <FlexWrapper>
      <H3Story>Happy customers</H3Story>
      <H2Story>&ldquo;The best decision of our lives&rdquo;</H2Story>
      <Text>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur
        voluptatibus. Quidem consequatur harum volupta!
      </Text>
      <Button>Find your own home</Button>
    </FlexWrapper>
  );
};

export default Content;
