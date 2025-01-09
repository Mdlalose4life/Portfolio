import { useState } from "react";
import "../styles/contact.css";
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material';
import { PropagateLoader } from 'react-spinners'
import {ToastContainer, toast} from 'react-toastify'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    const backendURL = import.meta.env.VITE_BACKEND_URL;
    try {
      setIsSubmitting(true)
      const response = await fetch(`${backendURL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message recieved", {
          position: "bottom-center",
          autoClose: 800
        })
        setIsSubmitting(false)
        e.target.reset();
      } else {
        toast("Opps, try again")
        setIsSubmitting(false)
        toast.error("Opps, try again",{
          position: "bottom-center",
          autoClose: 800
        })
        alert(data.error || "Failed to send message");
      }

    } catch (error) {
      toast.error("Opps, try again", {
        position:"bottom-center",
        autoClose: 800
      })
      setIsSubmitting(false)
      console.error("Error sending the message", error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-me">
        <Typography><h4>Contact Me</h4></Typography>
      </div>
      <Divider />
      <div className="contact-header">
          <h1>Get in Touch</h1>
        <p>For inquiries, support, or collaboration, please fill out the form below. I’ll get back to you soon!</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            className="input-field"
            placeholder="Email"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          className="input-field full-width"
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          className="textarea-field"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit"
         className="submit-button"
         disabled={isSubmitting}
         >
          {isSubmitting ? <PropagateLoader size={16} color="#E8EAF6"/> : <p>Submit</p>}
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Contact;
