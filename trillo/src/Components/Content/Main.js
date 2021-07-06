import styled from "styled-components";
import Gallery from "./Gallery";
import Overview from "./Overview";
import Detail from "./Detail";
import CallToAction from "./CallToAction";

const Container = styled.main`
  background-color: #fff;
  flex: 1;
`;

const Main = () => {
  return (
    <Container>
      <Gallery />
      <Overview />
      <Detail />
      <CallToAction />
    </Container>
  );
};

export default Main;
