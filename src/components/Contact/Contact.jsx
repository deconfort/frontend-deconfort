import React from "react";
import "./contact.css";
import contactus from "../../image/bannerContact.png";

export default function Contact() {
  return (
    <div className="containerContact">
      <img className="imgBannerContact" src={contactus} alt="Contact us" />
      <p className="textContact">
        Hello! We are Confort. Our team is available to answer from
        Monday-Friday, 9:30 to 15:30. We are waiting for you at our premises
        located at: Mall of America and .... Monday to Sunday from 10 a.m. to 7
        p.m. We are working hard to keep up with inquiries and recommendations.
        Thank you for understanding..
      </p>
      <form className="formContact">
        <labe className='labelContact'>Name
            <input className="inputContact" type="text" name="" placeholder="Name"/>
        </labe>
        <labe className='labelContact'>Phone Number
            <input  className="inputContact" type="text" name="" placeholder="Phone"/>
        </labe>
        <labe className='labelContact'>Mail
            <input  className="inputContact" type="text" name="" placeholder="Mail"/>
        </labe>
        <labe className='labelContact'>Message
            <textarea  className="inputContact" type="text" name="" placeholder="Enter your message here"/>
        </labe>
        <button className="buttonContactForm" type="submit">Send</button>
      </form>
    </div>
  );
}
