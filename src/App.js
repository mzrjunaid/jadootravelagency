import "./App.css";
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="bg-white p-0 shadow">
      <Home />
    </Container>
  );
}

export default App;
