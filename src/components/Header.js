import logo from "../images/Logo.svg";
import Nav from "./Nav";
function Header() {
  return (
    <header
      style={{
        display: "flex",
        position: "sticky",
        top: "0px",
        borderBottom: "4px solid #f4CE14",
      }}
    >
      <img src={logo} alt="LogoLittleLemon" />
      <Nav />
    </header>
  );
}
export default Header;
