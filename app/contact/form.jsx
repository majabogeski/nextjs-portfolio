"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from './form.module.css'

const Contact = () => {
  const emailRef = useRef();
  const subjectRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };
    // console.log("templateParams", templateParams);
    
    emailjs
      .send(
        "service_d0jcfc4",
        "template_q2fgojc",
        templateParams,
        "bBUONnaygCYx70K4y"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thanks, message sent successfully");
        },
        function (error) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
    nameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div className={styles.contact} id="contact">
      <form onSubmit={sendMessage} action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Full Name"
          ref={nameRef}
          required
        />
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="Enter Subject"
          ref={subjectRef}
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter Your Email"
          ref={emailRef}
        />
        <textarea
          name="message"
          id="message"
          cols="25"
          rows="7"
          required
          placeholder="Enter Message..."
          ref={messageRef}
        ></textarea>
        <button type="submit">send message</button>
      </form>
    </div>
  );
};

export default Contact;
