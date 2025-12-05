import Header from '../../components/Header';
import Footer from '../../components/Footer';
import photo from '../../assets/maPhoto.jpg';

function Presentation() {
    
  return (
    <div className="presentationWrapper">
      <Header />
      <main className="presentationBody">
        <div className="presentationPhotoDiv"><img className="presentationPhoto" src={photo} alt="ma photo"/><br/></div>
        <h1>8 ans d'expérience en développement orienté objet (C++, java) 
              <br/>et 3 ans en tant que développeur web (java JEE).</h1>
        <p className="presentationText">
            J'ai pu intervenir sur des projets variés: très grosses applications, petites applications from scratch
            et mes domaines d’intervention sont : BackEnd, FrontEnd, Conception, Développement, Optimisation de code.
        </p><br/>
        <h2>Ma formation est :</h2>
        <p className="presentationText">Double compétence Scientifique/ Informatique 
              <em className="presentationEm"> (Post Graduée en Calcul Scientifique, <br/> DEA de Physique Statistique,
              Maitrise de mathématiques appliquées, <br/>Développeur WEB, Développeur Java JEE, Développeur C#)
               </em>
        </p>
        <p className="presentationText">Finance de Marché <em className="presentationEm">(Certificat de compétences des marchés financiers)</em> et Actuariat.</p>
        <br/>
        <h2>Je recherche un poste en tant que Développeur Web (FrontEnd, BackEnd, FullStack) <br/>ou Développeur Objet.</h2>
      </main>
      <Footer />
    </div>
  );
}
export default Presentation