import React from "react";
import "../Header/Header.css";
import logo from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className="head-container">
      <div className="head-wraper">
        <div className="head-wrapper-child">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </Link>

          <div className="head-list">
            <ul className="head-list1">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="cat-show">
                <a href="#">Categories</a>
                <div className="cat-childs">
                  <ul>
                    <li>
                      <a href="#">Man</a>
                    </li>
                    <li>
                      <a href="#">Woman</a>
                    </li>
                    <li>
                      <a href="#">Kids</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/cart">
          <div className="cart">
            <a href="#">Cart</a>
            <span> ({cart})</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
