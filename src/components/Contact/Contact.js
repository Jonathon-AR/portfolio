import React, { useState } from "react";
import Particle from "../Particle";
import "./contact.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert('Name and Email are mandatory fields');
      return;
    }

    firebase.initializeApp(firebaseConfig);

    try {
      const db = firebase.firestore();

      await db.collection('webVisiter').add({
        name,
        email,
        phone,
        message,
      });

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');

      alert('Contact information submitted successfully!');
    } catch (error) {
      console.error('Error adding contact: ', error);
      alert('Error submitting contact information.');
    }
  };
  
  return (
    
    <div className="contact-page">
      <Particle />
      <h2 className="contact-form">REACH OUT</h2>
      <form onSubmit={handleSubmit}  className="contact-form">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Message:</label>
          <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};


export default Contact;
