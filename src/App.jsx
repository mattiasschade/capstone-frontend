import "./App.css"
import Container from "react-bootstrap/Container"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Container fluid>
    <div>
      <BrowserRouter>
          <Header />
          <Content />
          <Footer />
      </BrowserRouter>
    </div>
    </Container>
  )
}

export default App;