import { BrowserRouter, NavLink } from "react-router-dom";
import Main from "./Main";
function Nav() {
  return (
    // <BrowserRouter>
    <>
      <nav>
        <NavLink style={{ textDecoration: "none", margin: "1em" }} to="/">
          Home
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", marginRight: "1em" }}
          to="/aboutus"
        >
          About Us
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", marginRight: "1em" }}
          to="/menu"
        >
          Menu
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", marginRight: "1em" }}
          to="/reservations"
        >
          Reservations
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", marginRight: "1em" }}
          to="/orderonline"
        >
          Order Online
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", marginRight: "1em" }}
          to="/loginSignUp"
        >
          Login
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", marginRight: "1em" }}
          to="/booking"
        >
          Booking
        </NavLink>
        {/* <ul style={{ display: "flex", listStyleType: "none" }}>
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
        </ul> */}
      </nav>
    </>
    // </BrowserRouter>
  );
}
export default Nav;
