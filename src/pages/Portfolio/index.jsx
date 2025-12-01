import Header from '../../components/Header';
import Footer from '../../components/Footer';
import bookiImage from '../../assets/booki.png';
import ninaCarducciImage from '../../assets/nina.png';
import kasaImage from '../../assets/kasa.png';
import sophieImage from '../../assets/sophie.png';
import grimoireImage from '../../assets/grimoire.png';

function Portfolio() {
  return (
    <div className="portfolioWrapper">
      <Header />
      <div className="portfolioBody">
        <div className="portfolioDiv">
            <p className="portfolioText">Intégration web avec HTML, CSS</p>
            <p>github : <a href="https://github.com/ppxt-code/booki-starter-code" target="_blank" rel="noopener noreferrer">Booki</a></p>
            <div><a href="https://ppxt-code.github.io/booki-starter-code/" target="_blank" rel="noopener noreferrer">
                    <img className="portfolioImage" src={bookiImage} alt="Booki : plateforme de réservation d'hébergements et d'activités" />

                </a>
            </div>
            <p className="portfolioComment">cliquer pour accéder au projet</p>
        </div>  
        <div className="portfolioDiv">
            <p className="portfolioText">Optimisation et debug</p>
            <p>github : <a href="https://github.com/ppxt-code/Nina-Carducci-Dev" target="_blank" rel="noopener noreferrer">Nina Carducci</a></p>
            <div><a href="https://ppxt-code.github.io/Nina-Carducci-Dev/" target="_blank" rel="noopener noreferrer">
                    <img className="portfolioImage" src={ninaCarducciImage} alt="Nina Carducci : site vitrine pour une photographe" />
                 </a>
            </div>
            <p className="portfolioComment">cliquer pour accéder au projet</p>
        </div>
        <div className="portfolioDiv">
            <p className="portfolioText">React</p>
            <p>github : <a href="https://github.com/ppxt-code/kasa" target="_blank" rel="noopener noreferrer">Kasa</a></p>
            <div><a href="https://ppxt-code.github.io/kasa" target="_blank" rel="noopener noreferrer">
                    <img className="portfolioImage" src={kasaImage} alt="Kasa : plateforme de location d'appartements" />
                  </a>
            </div>
            <p className="portfolioComment">cliquer pour accéder au projet</p>
        </div>
      </div>
      <br/>
      <div className="portfolioBody">
        <div className="portfolioDiv">
            <p className="portfolioText">Développement WEB avec JavaScript</p>
            <p>github : <a href="https://github.com/ppxt-code/Portfolio-architecte-sophie-bluel" target="_blank" rel="noopener noreferrer">Sophie Bluel</a></p>
            <div><img className="portfolioImage" src={sophieImage} alt="Sophie Bluel : site vitrine pour une architecte" />
            </div>
        </div>
        <div className="portfolioDiv">
            <p className="portfolioText">Développement back-end avec Node.js</p>
            <p>github : <a href="https://github.com/ppxt-code/mon-vieux-grimoire-backend" target="_blank" rel="noopener noreferrer">Mon Vieux Grimoire</a></p>
            <div><img className="portfolioImage" src={grimoireImage} alt="Mon Vieux Grimoire : back-end d'un site de notation de livres" />
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Portfolio