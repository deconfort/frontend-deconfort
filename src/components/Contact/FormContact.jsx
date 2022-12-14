import React from "react";
import './contact.css'

export default function FormContact() {
  return (
    <form className="formContact">
      <labe className="labelContact">
        Name
        <input
          className="inputContact"
          type="text"
          name=""
          placeholder="Name"
        />
      </labe>
      <labe className="labelContact">
        Phone Number
        <input
          className="inputContact"
          type="text"
          name=""
          placeholder="Phone"
        />
      </labe>
      <labe className="labelContact">
        Mail
        <input
          className="inputContact"
          type="text"
          name=""
          placeholder="Mail"
        />
      </labe>
      <labe className="labelContact">
        Message
        <textarea
          className="inputContact"
          type="text"
          name=""
          placeholder="Enter your message here"
        />
      </labe>
      <button className="buttonContactForm" type="submit">
        Send
      </button>
    </form>
  );
}
