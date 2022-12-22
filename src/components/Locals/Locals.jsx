import React from "react";
import "./Locals.css";
import local1 from "../../image/local1.jpg";
import Local2 from "../../image/Local2.jpg";
import Local3 from "../../image/Local3.jpg";
import Local4 from "../../image/Local4.png";
import LocalsBanner from "../../image/LocalsBanner.png";

export default function Locals() {
  return (
    <div className="locals-main">
      <img className="localsBanner" src={LocalsBanner} alt="LocalsBanner" />
      <div className="container-locals">
        <div className="texto-locals">
          <h2 className="Name-Local">Mall of America</h2>
          <a className="linksLocals" href="https://goo.gl/maps/UDf79zFBQGqVARW67" target="_blank" rel="noopener noreferrer">60 E Broadway, Bloomington, MN 55425, Estados Unidos</a>
          <a className="linksLocals" href="tel:+3516532134">3516532134</a>
          <div className="container-locals">
            <img className="img-locals" src={local1} alt="shops" />
          </div>
        </div>
        <div className="texto-locals">
          <h2 className="Name-Local">OUR SCHEDULES</h2>
          <p> Monday - Friday: 9 - 18Hs</p>
          <p>Saturday: 9 - 14Hs</p>
          <div className="container-locals">
            <img className="img-locals" src={Local2} alt="shops" />
          </div>
        </div>
      </div>
      <div className="container-locals">
        <div className="texto-locals">
          <h2 className="Name-Local">The Galleria at Fort Lauderdale</h2>
          <a className="linksLocals" href="https://goo.gl/maps/mRaMUqmyspUUNphZ9" target="_blank" rel="noopener noreferrer">2414 E Sunrise Blvd, Fort Lauderdale, FL 33304, Estados Unidos</a>
          <a className="linksLocals" href="tel:+3516532134">3516532134</a>
          <div className="container-locals">
            <img className="img-locals" src={Local3} alt="shops" />
          </div>
        </div>
        <div className="texto-locals">
          <h2 className="Name-Local">OUR SCHEDULES</h2>
          <p> Monday - Friday: 9 - 18Hs</p>
          <p>Saturday: 9 - 14Hs</p>
          <div className="container-locals">
            <img className="img-locals" src={Local4} alt="shops" />
          </div>
        </div>
      </div>
    </div>
  );
}
