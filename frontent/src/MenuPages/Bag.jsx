import React, { useContext } from "react";
import "../MenuPages/Bag.css";
import videos1 from "../Videos/f.mp4";
import { ContextProvider } from "../Context";

const Bag = () => {
  const { value } = useContext(ContextProvider);

  return (
    <>
      <div className="bagError"></div>
      <div className="BagVideos">
        <video className="BagVideo" loop autoPlay muted src={videos1}></video>
        <div className="videoTextCover">
          <h2>Personalised Bag</h2>
        </div>
      </div>
      <div className="mappingText">
       <div className="radio">
       <h1>PERSONALISED BAGS</h1>
        <p>
          The house’s most functional creations, our designer bags are
          conceptualised and crafted to be the perfect companion for your
          inseparable essentials. Handcrafted purely in vegan leather, these
          luxurious bags add the ultimate touch of sophistication to every look.
          Explore the Outhouse's bag
        </p>
        <h3>SEE THE PRODUCTS</h3>
       </div>
      </div>
      <div className="bagMapContainer">
        {value.slice(0, 9).map((item) => (
          <div className="BagMapContainer">
            <div className="BagMapImage">
              <img className="Bgimg" src={item.img} alt="" />
            </div>
            <p className="bgPtag">₹{item.price}</p>
            <h4 className="bgh4">{item.name}</h4>
            <button>VIEW PRODUCT</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bag;
