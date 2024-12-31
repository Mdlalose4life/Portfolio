import "../styles/contact.css";
import Divider from '@mui/material/Divider';
import { Typography} from '@mui/material';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-me">
        <Typography><h4>Contact Me</h4></Typography>
      </div>
      <Divider/>
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>For inquiries, support, or collaboration, please fill out the form below. I’ll get back to you soon!</p>
      </div>
      <form className="contact-form">
        <div className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            required
          />
        </div>
        <input
          type="text"
          className="input-field full-width"
          placeholder="Subject"
          required
        />
        <textarea
          className="textarea-field"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
