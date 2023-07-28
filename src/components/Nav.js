import React, { Component } from "react";
import "./Nav.css";
function Nav() {
  return (
    <>
      <nav>
        {/* <NavLink style={{ textDecoration: "none", margin: "1em" }} to="/">
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
        </NavLink> */}
        <ul style={{ display: "flex", listStyleType: "none" }}>
          <li style={{ marginRight: "1em" }}>
            <a style={{ textDecoration: "none" }} href="/">
              Home
            </a>{" "}
          </li>
          <li style={{ marginRight: "1em" }}>
            <a style={{ textDecoration: "none" }} href="/aboutus">
              About
            </a>{" "}
          </li>{" "}
          <li style={{ marginRight: "1em" }}>
            <a style={{ textDecoration: "none" }} href="/menu">
              Menu
            </a>{" "}
          </li>
          <li style={{ marginRight: "1em" }}>
            <a style={{ textDecoration: "none" }} href="/reservations">
              Reservations
            </a>{" "}
          </li>
          <li style={{ marginRight: "1em" }}>
            <a style={{ textDecoration: "none" }} href="/orderonline">
              Order Online
            </a>{" "}
          </li>
          <li style={{ marginRight: "1em" }}>
            <a style={{ textDecoration: "none" }} href="/loginsignup">
              Login/SignUp
            </a>{" "}
          </li>
          <li style={{ marginRight: "1em" }}>
            <a style={{ textDecoration: "none" }} href="/booking">
              Booking
            </a>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
