// from https://www.emailjs.com/docs/examples/reactjs/

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import DOMPurify from 'dompurify';

export const ContactUs = ({ onSuccess, onError }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // Récupérer et sanitiser les données
    const formData = new FormData(form.current);
    const name = validator.escape(DOMPurify.sanitize(formData.get('name')?.trim() || ''));
    const from_email = validator.normalizeEmail(formData.get('from_email')?.trim() || '');
    const message = validator.escape(DOMPurify.sanitize(formData.get('message')?.trim() || ''));
    // Validation stricte
    if (!name || name.length < 2 || !validator.isEmail(from_email)) {
      onError?.('Champs invalides');
      return;
    }
    // Créer objet nettoyé pour EmailJS
    const sanitizedData = { name, from_email, message };

    emailjs
      .send('service_ahiaxgm', 'template_me8z9km', sanitizedData, {
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
            <div><label className="contactUsLabel" for="name">Name</label>
                <input className="contactUsInputtext" type="text" name="name" id="name"/></div>
            <div><label className="contactUsLabel" for="from_email">Email</label>
                <input className="contactUsInputtext" type="email" name="from_email" id="from_email" /></div>
            <div><label className="contactUsLabel" for="message">Message</label>
                <textarea className="contactUsTextArea" name="message" id="message" /></div>  
        </div>
        <div className="contactUsSubmit">
            <input type="submit" className="contactUsInput" value="Send" />
        </div>
    </form>
  );
};
export default ContactUs;