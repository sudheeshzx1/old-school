import React from "react";
import "../Component/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="FooterContainer">
        <div className="mayIHelpu">
          <h3>MAY I HELP YOU?</h3>
          <p>Contact</p>
          <p>My Orders</p>
          <p>FAQ</p>
          <p>Email Unsubscribe</p>
          <p>SiteMap</p>
        </div>
        <div className="TheCompany">
          <h3>THE COMPANY</h3>
          <p>About Old Skool</p>
          <p>Carriers</p>

          <p>Privacy And Policy</p>
          <p>Cookie Setting</p>
        </div>
        <div className="storeLocator">
          <div className="OLD">
            <h1>OLD SKOOL</h1>
          </div>
          <div className="StoreLocator">
            <h3>Store locator</h3>
            <div className="coolinput">
              <label htmlFor="input" className="text">
                Location:
              </label>
              <input
                type="text"
                placeholder="Search here..."
                name="input"
                className="input"
              />
            </div>
            <div className="sites">
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
