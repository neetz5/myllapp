import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
function Main() {
  return (
    <BrowserRouter>
      <main style={{ backgroundColor: "#495E57", padding: "42vh" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
export default Main;
