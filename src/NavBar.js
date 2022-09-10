import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <button className="button">Home</button>
        </NavLink>
        <NavLink to="/books">
          <button className="button">Poetry Books</button>
        </NavLink>
        <NavLink to="/formpage">
          <button className="button">Add New poem/book</button>
        </NavLink>
      </div>
    </>
  );
}
export default NavBar;
