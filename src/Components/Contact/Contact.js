import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Facebook from "../../assets/facebook.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TweeterIcon from "../../assets/twitter.png";
import InstaIcon from "../../assets/instagram.png";
import YTIcon from "../../assets/youtube.png";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const form = useRef();

  const sendEmail = async (event) => {
    event.preventDefault();

    //web3 forms
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "38315efd-48bc-4fcf-9c15-b0861fcc61be");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    //Email JS
    emailjs
      .sendForm(
        "service_8errcek",
        "template_bpyaans",
        form.current,
        "L7RyaqLnSiQd4FdVq"
      )
      .then(
        (result) => {
          console.log(result.text);
          event.target.reset();
          // alert("Your Message Send !")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const notify = () => {
    toast.success("Send !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I had the opportunity to works with a diverse group of companies. some
          of the notable companies I have worked with includes.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="" className="clientImg" />
          <img src={Adobe} alt="" className="clientImg" />
          <img src={Microsoft} alt="" className="clientImg" />
          <img src={Facebook} alt="" className="clientImg" id="fb" />
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Plese fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <span>{result}</span>
          <button
            onClick={notify}
            type="submit"
            value="Send"
            className="submitBtn"
          >
            Send
          </button>
          <ToastContainer />

          <div className="links">
            <img src={FacebookIcon} alt="facebook" className="link" />
            <img src={TweeterIcon} alt="tweeter" className="link" />
            <img src={YTIcon} alt="youtube" className="link" />
            <img src={InstaIcon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
