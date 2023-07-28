import "./App.css";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      {/* <h1>Little Lemon</h1> */}
      <BrowserRouter>
        <Header />
        {/* <Nav /> */}
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  );
  // <div className="App">HomePage</div>;
}

export default App;
