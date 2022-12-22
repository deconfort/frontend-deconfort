import React from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useRef } from "react";

export default function FormContact() {
  let form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_4murwr9', 'template_ziuy8vn', event.target, 'U-PzORJFBqhiAuRp2')
      .then(response => Swal.fire({
        icon: "success",
        confirmButtonColor: "#5c195d",
        iconColor: "#5c195d",
        title: "Your query was sent successfully. In the near future we will contact",
        showConfirmButton: true,
      }))
      .catch(error => console.log(error))
    form.current.reset();
  }
  return (
    <form className="formContact" ref={form} onSubmit={sendEmail}>
      <labe className="labelContact">
        Name
        <input
          className="inputContact"
          type="text"
          name="user_name"
          placeholder="Name"
        />
      </labe>
      <labe className="labelContact">
        Phone Number
        <input
          className="inputContact"
          type="text"
          name="user_phone"
          placeholder="Phone"
        />
      </labe>
      <labe className="labelContact">
        Mail
        <input
          className="inputContact"
          type="text"
          name="user_email"
          placeholder="Mail"
        />
      </labe>
      <labe className="labelContact">
        Message
        <textarea
          className="textAreaMessagge"
          type="text"
          name="user_message"
          placeholder="Enter your message here"
        />
      </labe>
      <button className="buttonContactForm" type="submit">
        Send
      </button>
    </form>
  );
}
