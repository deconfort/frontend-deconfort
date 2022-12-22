import React from "react";
import "./aboutUs.css";
import bannerAbout from '../../image/bannerAbout.png'

export default function AboutUs() {
  return (
    <div className="containerAllAbout">
      <img className="imgBannerContact" src={bannerAbout} alt="Banner About Us" />
      <div className="containerAbout">
        <img
          className="imgAboutUs"
          src="https://images-negozona-argentina.s3.amazonaws.com/uploads/picture/image/35443/IMG-4715.webp"
          alt="About us"
        />
        <div className="aboutUsText">
          <h3>Mission</h3>
          <p>
            Our mission is to offer the best design and decoration solutions,
            maintaining the highest quality standards, respecting the
            environment and constantly searching for processes that allow us to
            be more productive and competitive in the market, obtaining greater
            benefits for our clients, collaborators. and our own reason for
            being.
          </p>
        </div>
      </div>
      <div className="containerAbout">
        <div className="aboutUsText">
          <h3>Vision</h3>
          <p>
            Our vision is to be a leading company for interior design,
            decoration and accessories solutions, using the most modern
            methodologies and respecting the needs of our clients, thus
            providing maximum added value, providing them with confidence and
            security.
          </p>
        </div>
        <img
          className="imgAboutUs"
          src="https://cdn.shopify.com/s/files/1/0259/4835/6663/files/About_us_3x2_1_600x_09285351-ea72-48d0-a08a-ab5ca7d1b6ca.png?v=1659443205"
          alt="About us"
        />
      </div>
      <div className="containerAbout">
        <img
          className="imgAboutUs"
          src="https://cdn.shopify.com/s/files/1/0259/4835/6663/files/About_us_3x2_2_600x_4ca1de18-eada-4b24-8370-0d699fc996c7.png?v=1659443209"
          alt="About us"
        />
        <div className="aboutUsText">
          <h3>Our philosophy</h3>
          <p>
            Home design is constantly evolving. Home design, however, has
            remained the same for generations. Everyday items can be expected &
            uninspired. But they don't have to be. From dish racks to bread
            boxes to waste paper baskets—we believe they can (and should be)
            made better. With passion & purpose, we believe we can elevate the
            industry with a new, higher standard of product design. If home is
            what you make it, make it tidy. Make it beautiful. Make it
            Deconfort!.
          </p>
        </div>
      </div>
    </div>
  );
}
