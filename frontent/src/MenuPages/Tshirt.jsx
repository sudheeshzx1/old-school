import React, { useContext, useEffect, useState } from "react";
import "../MenuPages/Tshirt.css";
import ttwo from "../Images/t-1.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ContextProvider } from "../Context";

const Tshirt = () => {
  const { value } = useContext(ContextProvider);


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="t-shirtText">
        <div className="t-text">
          <div className="onetText">
            <h1>T-Shirts</h1>
            <h3>
              For every weird and wonderful thing you love, there's an artist
              out there who put it on a t-shirt.
            </h3>
            <button>View Details</button>
          </div>
          <div className="twoText">
            <img src={ttwo} alt="" />
          </div>
        </div>
      </div>
      <div className="x"></div>
      <div className="T-shirtCover">
        <div className="tCentre">
          <Carousel responsive={responsive}>
            <div>
              <img
                src="https://images.pexels.com/photos/16997638/pexels-photo-16997638/free-photo-of-young-woman-in-a-casual-outfit-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>Widley GreateFul</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8089958/pexels-photo-8089958.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>Perfectly Imperfect</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/17445628/pexels-photo-17445628/free-photo-of-woman-in-white-t-shirt-sitting-with-ball.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
              <p>Sport T-Shirt</p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/19290489/pexels-photo-19290489/free-photo-of-young-woman-posing-in-studio-in-a-simple-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <p>Outta May Be</p>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="T-ShirtData">
        <h3>VIST THE COLLECTION</h3>
      </div>
      <div className="MapData-Tshirt">
        {value.slice(40, 49).map((item) => (
          <div className="MapContainer">
            <div className="MapImgcontainer">
              <img src={item.img} alt="" />
            </div>
            <div className="ImageDetails">
              <h3>{item.name}</h3>
              <p> ₹{item.price} /-</p>
              <button>Details</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tshirt;
