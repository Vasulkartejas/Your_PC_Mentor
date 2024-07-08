import React from 'react';
import '../css/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <p>Have a question or need to schedule a service? Contact us today and we'll get back to you within 24 hours!</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" />
            <label>Name</label>
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
            <label>Email</label>
          </div>
          <div className="form-group">
            <textarea placeholder="Message"></textarea>
            <label>Message</label>
          </div>
          <button>Send us your query</button>
        </form>
        <div className="contact-info">
          <h3>Address</h3>
          <p>IET Cdac ShivajiNagar,Pune </p>
          <h3>Phone</h3>
          <p>(555) 555-5555</p>
          <h3>Email</h3>
          <p>ypm@pcservice.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;