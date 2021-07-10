import GlobalStyle, { GridContainer } from "./globalStyles";
import Sidebar from "./components/Sidebar";
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import Story from "./components/story/Story";
import Homes from "./components/homes/Homes";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <GridContainer>
        <Sidebar />
        <Header />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer />
      </GridContainer>
    </>
  );
}

export default App;
