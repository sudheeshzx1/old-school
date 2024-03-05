import React from "react";
import "../Component/HomeContent.css";
import video1 from "../Videos/x.mp4";
import video2 from "../Videos/a.mp4";
import video3 from "../Videos/b.mp4";
import video4 from "../Videos/c.mp4";


const HomeContent = () => {
  return (
    <>
      <div className="Content_Image">
        <div className="Content-img-1">
          <h1>Classic</h1>
        </div>
        <div className="Content-img-2">
          <h1>Collection</h1>
        </div>
      </div>
      <div className="ValantineCollection">
        <h1>VALANTINE COLLECTION</h1>
        <button>EXPLORE THE COLLECTIONs</button>
      </div>
      <div className="Content-img-containers">
        <div className="Content-img-containers-1">
          <div className="img-1">
            <div className="HoverData">
              <h1>Mini Bags</h1>
              <button>EXPLORE COLLECTION</button>
            </div>
          </div>
          <div className="img-2">
            <div className="HoverData">
              <h1>G-Timeless Watch</h1>
              <button>EXPLORE THE STYLE</button>
            </div>
          </div>
        </div>
        <div className="Content-img-containers-2">
          <div className="img-3">
            <div className="HoverData">
              <h1>old Skool Re-Shoes </h1>
              <button>EXPLORE COLLECTION</button>
            </div>
          </div>

          <div className="img-4">
            <div className="HoverData">
              <h1>Web - OutFit</h1>
              <button>EXPLORE COLLECTION</button>
            </div>
          </div>
        </div>
      </div>
      <div className="FeaturedContent">
        <h3>FEATURED</h3>
      </div>
      <div className="FashionShow">
        <div className="fashionVideo">
          <video
            className="fashionVideos"
            loop
            autoPlay
            muted
            src={video1}
          ></video>
        </div>
        <div className="fashionText">
          <h1>FALL WINTER 2024</h1>
          <h1>FASHION VIDEO CONTEXT</h1>
          <p>
            Creative Director Sabato De Sarno makes his menswear debut at the
            House with the Fall Winter 2024 collection.{" "}
          </p>
        </div>
      </div>
      <div className="oldText">
        <h1>OLD SKOOL SERVICES</h1>
      </div>
<div className="OldSkoolServices">
<div className="ServiceContainer">
<div className="video-1">
  <video className="videoses1" loop autoPlay controls muted src={video2}></video>
</div>
<div className="videoTexted">
<h2>PERSONALISATION</h2>
<p>Emboss select bags, luggage, belts, leather accessories, and items from the pet’s collection  unique piece.</p>
<button>Discover The Collection</button>
</div>
</div>



<div className="ServiceContainer">
<div className="video-1">
<video className="videoses1" loop autoPlay controls muted src={video4}></video>

</div>
<div className="videoTexted">
  <h2>PACKAGING</h2>
  <p>Choose our online exclusive tote or add a gift message at checkout to enjoy the boutique shopping bag.</p>
  <button>Explore The packing</button>
</div>
</div>




<div className="ServiceContainer">
<div className="video-1">
<video className="videoses1" loop autoPlay controls muted src={video3}></video>

</div>
<div className="videoTexted">
  <h2>COLLECT IN STORE</h2>
  <p>Order online and collect your order from your preferred Gucci boutique.And the good Store</p>
  <button>Discover How</button>
</div>
</div>
</div>
    </>
  );
};

export default HomeContent;
