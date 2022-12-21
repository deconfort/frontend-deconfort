import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import "./modal.css";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function ComponentModal(props) {
  let name = props;
  console.log("soy name", name);
  let form = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_4murwr9",
        "template_6e3ngob",
        event.target,
        "U-PzORJFBqhiAuRp2"
      )
      .then((response) =>
        Swal.fire({
          icon: "success",
          confirmButtonColor: "#5c195d",
          iconColor: "#5c195d",
          title: "The comment was successfully reported",
          showConfirmButton: true,
        })
      )
      .catch((error) => console.log(error));
    form.current.reset();
  };

  return (
    <>
      <Button
        variant="primary"
        className="ButtonCommentForm"
        onClick={handleShow}
      >
        Report Comment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Report Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form ref={form} onSubmit={sendEmail} className="formModal">
            <p className="tittleComentToReport"> Comment to report:</p>
            <textarea
              className="textAreaModalComment"
              type="text"
              name="comment_report"
              value={name.name}
            />
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
            <div className="spaceModal"></div>
            <div className="buttonSendFormModal">
              <button
                className="buttonModalForm"
                type="submit"
                onClick={handleClose}
              >
                Send
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ComponentModal;
