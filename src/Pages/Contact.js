import React, {  useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();

   
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bcnr2th', 'template_kxkc84p', form.current, '2TSBkAaYSBJoN4xFR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setName('');
      setEmail('');
       setMessage('');
       
  };

 
  
 
  return (
     <section className="section__contacts">
    <div className="section__contacts-cnt">
      <h3 className="section__about-heading">Contact</h3>
      <div className='section__about-underline'></div>
      
        <div  className='section__contacts-form'>
          <form onSubmit={handleSubmit} ref={form} >
          <input type="text" id='name' placeholder='Name' className='section__contacts-form-input' name="user_name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" id='email' placeholder='Email' className='section__contacts-form-input' name="user_email"  value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="textarea"  placeholder='Type your message...' className='section__contacts-form-textarea' name="message"  value={message} onChange={(e) => setMessage(e.target.value)}  />
          <div className="section__contacts-form-btn">
            <button type='submit' className="section__contacts-btn" >Send Email</button>
          </div>
          </form>
      </div>
        
      
    </div>

   </section>
  )
  };

export default Contact
