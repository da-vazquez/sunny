import React, { useState } from "react";
import './contact.css';
import Spinner from 'react-bootstrap/Spinner'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [sentStyle, setSentStyle] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(<Spinner animation="border" variant="primary" />);
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Sent!");
    setSentStyle(true);
    let result = await response.json();
    console.log(result.status)
  }

  return (
    <form className='contact-container' onSubmit={handleSubmit}>
      <div>
        <h1>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input className="primary-contact" type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input className="primary-contact" type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <input className="secondary-contact" id="message" required />
      </div>
      {sentStyle ? <button style={{backgroundColor: 'black'}}className='login-button' type="submit">{status}</button>
      : <button className='contact-button' type="submit">{status}</button> }
    </form>
  )
}

export default ContactForm;