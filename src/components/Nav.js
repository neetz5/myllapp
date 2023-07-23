import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <li style={{ marginRight: "1em" }}>
          <a style={{ textDecoration: "none" }} href="">
            Home
          </a>{" "}
        </li>
        <li style={{ marginRight: "1em" }}>
          <a style={{ textDecoration: "none" }} href="">
            About
          </a>{" "}
        </li>
        <li style={{ marginRight: "1em" }}>
          <a style={{ textDecoration: "none" }} href="">
            Menu
          </a>{" "}
        </li>
        <li style={{ marginRight: "1em" }}>
          <a style={{ textDecoration: "none" }} href="">
            Contact Us
          </a>{" "}
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
