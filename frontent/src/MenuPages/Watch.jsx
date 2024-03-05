import React, { useContext } from "react";
import "../MenuPages/Watch.css";
import Carousel from "react-bootstrap/Carousel";
import { ContextProvider } from "../Context";

const Watch = () => {
  const { value } = useContext(ContextProvider);
  return (
    <>
      <div className="watchTexterror"></div>

      <div className="watchcaro">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="caroimg"
              src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2023/10/Jacob-Cos-Astronomia-Collection-Masthead-Desktop@2x-scaled.jpg"
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="caroimg"
              src="https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2023/09/Haute-Rive-Debut-Honoris-I-1000-Hour-Power-Reserve-5-2048x796.jpg"
              alt=""
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Watch-sec-1">
        <div className="Watch-sec-2">

        </div>
        <div className="Watch-sec-3">
<h2>Classic Watch</h2>
<h2>Collections</h2>
        </div>
      </div>
      <div className="watch-text-1">
        <h1>SEE THE PRODUCTS</h1>
      </div>
      <div className="Watch-Mapping">
        {value.slice(10,15).map((item)=>(
<div className="Watch-map-container">
  <div className="map-Watch-img">
    <img className="watch-map-img" src={item.img} alt="" />
  </div>
  <p>₹{item.price}</p>
  <h3>{item.name}</h3>
  <button>VIEW PRODUCT</button>
</div>
        ))}
      </div>
    </>
  );
};

export default Watch;
