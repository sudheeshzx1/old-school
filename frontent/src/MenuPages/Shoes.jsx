import React, { useContext } from "react";
import "../MenuPages/Shoes.css";
import { ContextProvider } from "../Context";

const Shoes = () => {
  const { value } = useContext(ContextProvider);
  return (
    <>
      <div className="shoesError"></div>
      <div className="map-data-img">
        <h1>Shoesyyy Spoted</h1>
        <p>Branded collection web.....!</p>
      </div>
      <div className="collection-shoes">
        <h1>CHECK THE COLLECTION</h1>
      </div>
      <div className="map-Shoes-container">
        {value.slice(16,24).map((item)=>(
<div className="map-shoes">
<div className="map-shoes-img">
  <img src={item.img} alt="" />
</div>
<p>₹{item.price}</p>
<h5>{item.name}</h5>
<button className="map-shoes-img-button">Check Product</button>
</div>
        ))}
        </div>
    </>
  );
};

export default Shoes;
