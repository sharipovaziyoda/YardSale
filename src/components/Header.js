import React from "react";
import { GrHome } from "react-icons/gr";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

function Header({ cartItems }) {
  const location = useLocation();

  return (
    <nav style={{ fontFamily: "Arial, sans-serif" }}>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <GrHome />
            <span>Yard </span>Sale
          </Link>
        </li>
        <input type="text" className="search" placeholder="Search.." />
        <li className={location.pathname === "/cart" ? "active" : ""}>
          <Link to="/cart">
            <span className="cart">
              Cart
              <GiShoppingCart />
              {cartItems.length > 0 && `(${cartItems.length})`}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
