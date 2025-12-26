import "./styles/global.css";
import "./styles/theme.css";

import Container from "./components/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <section>FORM</section>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </div>
  );
}

export default App;
