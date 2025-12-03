import Header from '../../components/Header';
import Footer from '../../components/Footer';
import photo from '../../assets/maPhoto.jpg';

function Presentation() {
    
  return (
    <div className="presentationWrapper">
      <Header />
      <main className="presentationBody">
        <img className="presentationPhoto" src={photo} alt="ma photo"/><br/>
        <ul className="presentationText">
            <li>8 ans d'expérience en tant que développeur objet (C++, java) 
              <br/>et 3 ans d'expérience en tant que développeur web (java JEE).</li>
            <li>J'ai pu intervenir sur des projets variés: très grosses applications, petites applications from scratch</li>
            <li>et mes domaines d’intervention sont : BackEnd, FrontEnd, Conception, Développement, Optimisation de code.</li>
            <li>Ma formation est :  <ul><li>Double compétence Scientifique/ Informatique 
                                    <em className="presentationEm"> (Post Graduée en Calcul Scientifique, <br/> DEA de Physique Statistique,
                                    Maitrise de mathématiques appliquées, Développeur WEB, Développeur Java JEE, Développeur C#)
                                    </em>
                                </li>
	                            <li>Finance de Marché <em className="presentationEm">(Certificat de compétences des marchés financiers)</em> et Actuariat.</li>
                            </ul>       
            </li>
            <li>Je recherche un poste en tant que Développeur Web (FrontEnd, BackEnd, FullStack) ou Développeur Objet.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
export default Presentation