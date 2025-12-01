import Header from '../../components/Header';
import Footer from '../../components/Footer';
import phoneIcon  from '../../assets/tel.webp';
import mailIcon  from '../../assets/email.webp';

function Contact() {
  return (
    <div className="contactWrapper">
      <Header />
      <div className="contactBody">
        <h1>Contactez-moi</h1>
        <h2><img className="contactIcon" src={phoneIcon} alt="icone telephone"/>06 24 85 91 35</h2>
        <h2><img className="contactIcon" src={mailIcon} alt="icone email"/>xuantrang.phamphutu@gmail.com</h2>
      </div>
      <Footer />
    </div>
  );
}
export default Contact