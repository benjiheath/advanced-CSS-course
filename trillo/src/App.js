import GlobalStyle, { Container } from "./globalStyles";
import Header from "./Components/Header";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Header />
        <Content />
      </Container>
    </div>
  );
}

export default App;
