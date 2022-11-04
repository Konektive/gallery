import React from "react";
import { useState } from "react";
import ball from "../source/ball.jpg";
import deer from "../source/deer.jpg";
import dog from "../source/dog.jpg";
import europe from "../source/europe.jpg";
import fish from "../source/fish.jpg";
import flower from "../source/flower.jpg";
import leopard from "../source/leopard.jpg";
import sleopard from "../source/sleopard.jpg";
import spider from "../source/spider.jpg";
import squirrel from "../source/squirrel.jpg";

const Gallery = () => {
  const [viewGallery, setViewGallery] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  document.addEventListener("mousemove", (e) => {
    setMousePosition({
      left: e.pageX,
      top: e.pageY,
    });
  });

  return (
    <>
      {!viewGallery && (
        <button
          onClick={() => {
            setViewGallery(true);
          }}
        >
          Turn on Gallery
        </button>
      )}

      {viewGallery ? (
        <div
          style={{
            transform: `translate(${mousePosition.left * -0.5}px, ${
              mousePosition.top * -0.5
            }px)`,
          }}
          className="gallery"
          id="gallery"
        >
          <div className="tile">
            <img src={ball} alt="" />
          </div>
          <div className="tile">
            <img src={deer} alt="" />
          </div>
          <div className="tile">
            <img src={dog} alt="" />
          </div>
          <div className="tile">
            <img src={fish} alt="" />
          </div>
          <div className="tile">
            <img src={europe} alt="" />
          </div>
          <div className="tile">
            <img src={flower} alt="" />
          </div>
          <div className="tile">
            <img src={leopard} alt="" />
          </div>
          <div className="tile">
            <img src={sleopard} alt="" />
          </div>
          <div className="tile">
            <img src={spider} alt="" />
          </div>
          <div className="tile">
            <img src={squirrel} alt="" />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Gallery;
