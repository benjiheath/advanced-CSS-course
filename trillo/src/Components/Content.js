import styled from "styled-components";
import Sidebar from "./Content/Sidebar";
import Main from "./Content/Main";

const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Content = () => {
  return (
    <ContentContainer>
      <Sidebar />
      <Main />
    </ContentContainer>
  );
};

export default Content;
