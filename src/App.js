import logo from "./logo.svg";
import "./App.css";
import FromValidation from "./Component/FromValidation/FormValidation";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <FromValidation />
      </Container>
    </div>
  );
}

export default App;
