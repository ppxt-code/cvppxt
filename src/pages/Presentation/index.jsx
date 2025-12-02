import Header from '../../components/Header';
import Footer from '../../components/Footer';
import photo from '../../assets/maPhoto.jpg';

function Presentation() {
    
  return (
    <div className="presentationWrapper">
      <Header />
      <div className="presentationBody">
        <img className="presentationPhoto" src={photo} alt="ma photo"/><br/>
        <ul className="presentationText">
            <li>8 ans d'expérience en programmation orientée objet (C++, java) + 3 ans d'expérience en java JEE</li>
            <li>Projets variés: très grosses applications, petites applications from scratch.</li>
            <li>Domaines d’intervention: BackEnd, FrontEnd. Conception, Développement, Optimisation de code.</li>
            <li>Formation:  <ul><li>Double compétence Scientifique/ Informatique 
                                    <em className="presentationEm"> (Post Graduée en Calcul Scientifique, <br/> DEA de Physique Statistique,
                                    Maitrise de mathématiques appliquées, Développeur WEB)
                                    </em>
                                </li>
	                            <li>Finance de Marché <em className="presentationEm">(Certificat de compétences des marchés financiers)</em> et Actuariat.</li>
                            </ul>       
            </li>
        </ul>
        </div>
      <Footer />
    </div>
  );
}
export default Presentation