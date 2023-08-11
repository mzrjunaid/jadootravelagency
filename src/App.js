import "./App.css";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container style={{ backgroundColor: "#fff", padding: 0 }}>
      <Home />
    </Container>
  );
}

export default App;
