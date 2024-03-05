import "./Home.css";
import { FaPlus } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineLocationSearching } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import Menu1 from "../Images/menu-1.jpg";
import Menu3 from "../Images/menu-3.jpg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import Menuu1 from 'path-to-your-image/Menu1'
// import Menuu1 from 'path-to-your-image/Menu1'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest("#menuToggle")) {
        // Close the menu if it's open and the click is outside the menu
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      // Cleanup the event listener when the component is unmounted
      window.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="navBar">
        <div className="navBar_Content-1">
          <Link className="ContactLink" to="Contact">
            {" "}
            <FaPlus />
            <p>Contact</p>
          </Link>
        </div>
        <div className="navBar_Content-2">
          <Link to="/" className="HeadLink">
            {" "}
            <h1>OLD SKOOL</h1>
          </Link>
        </div>
        <div className="NavBar_Content-3">
          <Link className="CartLink" to="Cart">
            {" "}
            <MdOutlineShoppingBag title="Cart" />
          </Link>
          <MdOutlineAccountCircle />
          <MdOutlineLocationSearching />

          <nav role="navigation">
            <div id="menuToggle">
              <input
                type="checkbox"
                checked={isMenuOpen}
                onChange={toggleMenu}
              />
              <FiMenu className="span" />

              <ul id="menu">
                <div className="menuItems">
                  <h2>50% OFFER PROVIDING OLD SKOOL</h2>
                  <div className="row-1">
                    <div className="row">
                      <Link className="MenuLink" to="Tshirt">
                        {" "}
                        <p>T-Shirt</p>
                      </Link>
                      <Link className="MenuLink" to="Bag">
                        {" "}
                        <p>Bag</p>
                      </Link>
                      <Link className="MenuLink" to="Watch">
                        {" "}
                        <p>Watches</p>
                      </Link>
                      <Link className="MenuLink" to="Shoes">
                        {" "}
                        <p>Shoes</p>
                      </Link>

                      <Link className="MenuLink" to="Jeans">
                        {" "}
                      </Link>
                    </div>
                    <div className="rowes">
                      <Link className="HeadLink" to="shirt">
                        {" "}
                        <p>Sailor Shirt</p>
                      </Link>
                      <p>Dress</p>
                      <p>Jeans</p>
                      <p>Sandles</p>
                      <p>Boots</p>
                    </div>
                  </div>
                  <p></p>
                </div>
                <div className="MenuImages">
                  <img src={Menu1} alt="" />
                  <img src={Menu3} alt="" />
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Home;
