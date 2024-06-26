import React from 'react';
import './Contact.css';
import bannerImage from '../assets/images/contact.png'; // Update the path accordingly

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={bannerImage} alt="Contact Banner" className="banner-image-contact" />
      <div className="contact-header">
        <div className="header-content">
          <h1>Contact Us</h1>
          <p>Details about how to contact us.</p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-details">
          <h2>Our Office</h2>
          <p>Address: 123 Token Street, Crypto City</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@ourcompany.com</p>
        </div>
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064504544!2d-0.4312438041877819!3d51.52860701338021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sae!4v1718101863971!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
