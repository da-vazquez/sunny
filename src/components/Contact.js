import React, { useState } from "react";
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
  };
  return (
    <form className='contact-container' onSubmit={handleSubmit}>
      <div>
        <h1 style={{marginBottom: "1em"}}>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" style={{width: '80%', marginBottom: '1em', marginLeft: '1em', padding: '.5em'}} id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" style={{width: '80%', marginBottom: '1em', marginLeft: '1em',padding: '.5em'}} id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <input id="message" style={{width: '100%', marginBottom: '1em', padding: '.5em', height: "6em", marginLeft: '0.1em'}}  required />
      </div>
      {sentStyle ? <button style={{backgroundColor: 'green'}}className='login-button' type="submit">{status}</button>
      : <button className='login-button' type="submit">{status}</button> }
    </form>
  );
};

export default ContactForm;