// from https://www.emailjs.com/docs/examples/reactjs/

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ({ onSuccess, onError }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ahiaxgm', 'template_me8z9km', form.current, {
        publicKey: 'IDOddFDLHgRX-6xDG',
      })
      .then(
        () => { 
          console.log('SUCCESS!');
          form.current.reset(); // Reset formulaire
          onSuccess?.(); // Callback succès vers parent
        },
        (error) => { 
          console.log('FAILED...', error.text);
          onError?.(error.text); // Callback erreur vers parent
     },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="contactUsFields">
            <div><label className="contactUsLabel">Name</label>
                <input type="text" name="name" /></div>
            <div><label className="contactUsLabel">Email</label>
                <input type="email" name="from_email" /></div>
            <div><label className="contactUsLabel">Message</label>
                <textarea name="message" /></div>  
        </div>
        <div className="contactUsSubmit">
            <input type="submit" className="contactUsInput" value="Send" />
        </div>
    </form>
  );
};
export default ContactUs;