import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactUs from '../../components/ContactUs';
import phoneIcon  from '../../assets/tel.webp';
import mailIcon  from '../../assets/email.webp';


function Contact() {
  const [status, setStatus] = useState(''); // '', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => { emailjs.init("IDOddFDLHgRX-6xDG"); }, []);
  const handleSuccess = () => {
    setStatus('success');
    setErrorMsg('');
    setTimeout(() => setStatus(''), 5000); // Reset après 5s
  };
  const handleError = (msg) => {
    setStatus('error');
    setErrorMsg(msg);
    setTimeout(() => {
      setStatus('');
      setErrorMsg('');
    }, 5000);
  };
  return (
    <div className="contactWrapper">
      <Header />
      <main className="contactBody">
        <h1>Contactez-moi</h1>
        {status === 'success' && (
          <div className="successMsg">✅ Message envoyé avec succès !</div>
        )}
        {status === 'error' && (
          <div className="errorMsg">❌ Erreur : {errorMsg}</div>
        )}
        <ContactUs  onSuccess={handleSuccess} onError={handleError} />
        <h2 className="contactTitle"><img className="contactIcon" src={phoneIcon} alt="icone telephone"/>06 24 85 91 35</h2>
        <h2 className="contactTitle"><img className="contactIcon" src={mailIcon} alt="icone email"/>xuantrang.phamphutu@gmail.com</h2>
      </main>
      <Footer />
    </div>
  );
}
export default Contact