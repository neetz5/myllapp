import logo from "../images/Logo.svg";
import Nav from "./Nav";
function Header() {
  return (
    <header style={{ display: "flex" }}>
      <img src={logo} alt="LogoLittleLemon" />
      <Nav />
    </header>
  );
}
export default Header;
