import Header from '../../components/Header';
import Footer from '../../components/Footer';
import bookiImage from '../../assets/booki.png';
import ninaCarducciImage from '../../assets/nina.png';
import kasaImage from '../../assets/kasa.png';
import sophieImage from '../../assets/sophie.png';
import grimoireImage from '../../assets/grimoire.png';
import { useState } from "react";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const projects = [
    {
      id: 1,
      category: "front githubpages",
      title: "Intégration web avec HTML, CSS",
      name: "Booki",
      github: "https://github.com/ppxt-code/booki-starter-code",
      link: "https://ppxt-code.github.io/booki-starter-code/",
      image: bookiImage,
      alt: "Booki : plateforme de réservation d'hébergements et d'activités"
    },
    {
      id: 2,
      category: "front githubpages",
      title: "Optimisation et debug",
      name: "Nina Carducci",
      github: "https://github.com/ppxt-code/Nina-Carducci-Dev",
      link: "https://ppxt-code.github.io/Nina-Carducci-Dev/",
      image: ninaCarducciImage,
      alt: "Nina Carducci : site vitrine pour une photographe"
    },
    {
      id: 3,
      category: "front githubpages",
      title: "React",
      name: "Kasa",
      github: "https://github.com/ppxt-code/kasa",
      link: "https://ppxt-code.github.io/kasa",
      image: kasaImage,
      alt: "Kasa : plateforme de location d'appartements"
    },   
    {
      id: 4,
      category: "front",
      title: "Développement WEB avec JavaScript",
      name: "Sophie Bluel",
      github: "https://github.com/ppxt-code/Portfolio-architecte-sophie-bluel",
      link: "",
      image: sophieImage,
      alt: "Sophie Bluel : site vitrine pour une architecte"
    }   ,   
    {
      id: 5,
      category: "back",
      title: "Développement back-end avec Node.js",
      name: "Mon Vieux Grimoire",
      github: "https://github.com/ppxt-code/mon-vieux-grimoire-backend",
      link: "",
      image: grimoireImage,
      alt: "Mon Vieux Grimoire : back-end d'un site de notation de livres"
    }   
  ];
  const filteredProjects = filter === "all" ? projects 
                          : projects.filter(p => p.category.includes(filter));
  return (
    <div className="portfolioWrapper">
      <Header />
      <div className="portfolioFilters">
        <button onClick={() => setFilter("all")} title="tous les projets">Tous</button>
        <button onClick={() => setFilter("front")} title="intervention FrontEnd">FrontEnd</button>
        <button onClick={() => setFilter("back")} title="intervention BackEnd">BackEnd</button>
        <button onClick={() => setFilter("githubpages")} title="puis cliquer sur l'image pour accéder à sa GitHub Page">GitHub Pages</button>
      </div>
      <div className="portfolioBody">
        {filteredProjects.map(proj => (
          <div key={proj.id} className="portfolioDiv">
            <p className="portfolioText">{proj.title}</p>
            <p>github : <a href={proj.github} target="_blank" rel="noopener noreferrer">{proj.name}</a></p>
            <div>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <img className="portfolioImage" src={proj.image} alt={proj.alt} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
  /*return (
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
  );*/
}
export default Portfolio