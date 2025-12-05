import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ModalButton } from '../../components/ModalButton';
import bookiImage from '../../assets/booki.png';
import ninaCarducciImage from '../../assets/nina.png';
import kasaImage from '../../assets/kasa.png';
import sophieImage from '../../assets/sophie.png';
import grimoireImage from '../../assets/grimoire.png';
import { useState } from "react";
import reactImg from '../../assets/skills/frontEnd/react.webp';
import javascriptImg from '../../assets/skills/frontEnd/javascript.webp';
import nodejsImg from '../../assets/skills/backEnd/nodeJs.webp';


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
      alt: "Booki : plateforme de réservation d'hébergements et d'activités",
      modalContent: "Réalisation de la page d'accueil responsive de l'agence de voyage Booki en HTML5 et CSS3 à partir d'une maquette Figma.\nPoints difficiles:\n imposer une meme height responsive,\n faire des overline et underline sur les liens header"
    },
    {
      id: 2,
      category: "front githubpages javascript",
      title: "Optimisation et debug",
      name: "Nina Carducci",
      github: "https://github.com/ppxt-code/Nina-Carducci-Dev",
      link: "https://ppxt-code.github.io/Nina-Carducci-Dev/",
      image: ninaCarducciImage,
      alt: "Nina Carducci : site vitrine pour une photographe",
      modalContent: "Optimisation du site nina-carducci.github.io (CSS,boostrap,javascript) pour les moteurs de recherche et debug.\nRésultats (lighthouse):\namélioration des performances de 60 à 98,\n de l'accessibilité de 70 à 100,\n du SEO de 73 à 100.\nPoints difficiles:\n l'adaptation du css et beaucoup de règles de boostrap ne sont visibles qu'en live"
    },
    {
      id: 3,
      category: "front githubpages javascript react",
      title: "React",
      name: "Kasa",
      github: "https://github.com/ppxt-code/kasa",
      link: "https://ppxt-code.github.io/kasa",
      image: kasaImage,
      alt: "Kasa : plateforme de location d'appartements",
      modalContent: "Développement du front-end de l'application en React (composants React, routes React Router, Vite) et Sass.\nFournis: guide de contraintes techniques, maquettes Figma responsives, fichier JSON avec des annonces de logement (back-end data)\nPoints difficiles:\nchanger l'image et le texte en fonction des media queries\nrediriger vers une page dédiée par logement\nchoisir le texte du lien selon qu'on est sur la page désignée par l'attribut to"
    },   
    {
      id: 4,
      category: "front javascript",
      title: "Développement WEB avec JavaScript",
      name: "Sophie Bluel",
      github: "https://github.com/ppxt-code/Portfolio-architecte-sophie-bluel",
      link: "",
      image: sophieImage,
      alt: "Sophie Bluel : site vitrine pour une architecte",
      modalContent: "Completion du FrontEnd de la page d'accueil en html,css,javascript.\nSont fournis le back-end avec le swagger UI de l'API, le Figma et le Kanban.\nPoints difficiles:\n la gestion des imports,\n l'évènement de close en clic hors de la modale,\n la gestion du temps de chargement des images pour positionner une ancre située après."
    },   
    {
      id: 5,
      category: "back nodejs",
      title: "Développement back-end avec Node.js",
      name: "Mon Vieux Grimoire",
      github: "https://github.com/ppxt-code/mon-vieux-grimoire-backend",
      link: "",
      image: grimoireImage,
      alt: "Mon Vieux Grimoire : back-end d'un site de notation de livres",
      modalContent: "Développement du backEnd en Node.js,Express,MongoDB\nFournis: les specificites fonctionnelles, la maquette Figma, les spécifications techniques de l’API, le code du front-end\nPoints difficiles:\nenlever les messages d'erreur d'EOF linux dans un environnement Windows\nutilisation de dotenv"
    }   
  ];
  const filteredProjects = filter === "all" ? projects 
                          : projects.filter(p => p.category.includes(filter));
  return (
    <div className="portfolioWrapper">
      <Header />
      <aside className="portfolioFilters">
        <button onClick={() => setFilter("all") } className="portfolioFilter" 
          title="tous les projets">Tous</button>
        <button onClick={() => setFilter("front")} className="portfolioFilter" 
          title="intervention FrontEnd">FrontEnd</button>
        <button onClick={() => setFilter("back")} className="portfolioFilter" 
          title="intervention BackEnd">BackEnd</button>
        <button onClick={() => setFilter("githubpages")} className="portfolioFilter" 
          title="puis cliquer sur l'image pour accéder à sa GitHub Page">GitHub Pages</button>
          
        <button className="portfolioIconButton" onClick={() => setFilter("javascript")} title="javascript">
          <img className="portfolioIcon" src={javascriptImg} alt="JavaScript" /></button>
        <button className="portfolioIconButton" onClick={() => setFilter("react")} title="react">
          <img className="portfolioIcon" src={reactImg} alt="React" /></button>
        <button className="portfolioIconButton" onClick={() => setFilter("nodejs")} title="nodejs">
          <img className="portfolioIcon" src={nodejsImg} alt="Node.js" /></button>
      </aside>
      <main className="portfolioBody">
        {filteredProjects.map(proj => (
          <div key={proj.id} className="portfolioDiv">
            <p className="portfolioText">{proj.title}</p>
            <p>github : <a className="portfolioLink" href={proj.github} target="_blank" rel="noopener noreferrer">{proj.name}</a></p>
            <ModalButton 
              buttonText="projet" 
              modalTitle={proj.alt}
              modalContent={proj.modalContent}
            />
            <div>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <img className="portfolioImage" src={proj.image} alt={proj.alt} />
              </a>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
export default Portfolio