import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import Star from '../../components/Star';

function Skills() {
  const frontEnd = import.meta.glob('../../assets/skills/frontEnd/*.webp', { eager: true });
  const frontEndImages = Object.values(frontEnd).map(img => img.default);
  const backEnd = import.meta.glob('../../assets/skills/backEnd/*.webp', { eager: true });
  const backEndImages = Object.values(backEnd).map(img => img.default);
  return (
    <div className="skillsWrapper">
        <Header />
        <main className="skillsBody">
            <div className="skillsDiv"> 
                <div><p>Front End :<br/>
                    <Star /> 1) HTML5, CSS3/Sass, JavaScript, React.js <br/>
                    <Star /><Star /> 2) JSF(PrimeFaces)/JSP(JSTL)
                </p><br/>
                <p>Outils et Tests :<br/>
                    JUnit/TestNG, Log4j <br/>
                    Git/GitHub, SVN<br/>
                    Maven, Tomcat Server, Apache CFX<br/>
                    Visual Studio Code, Eclipse<br/>
                    Microsoft Visual Studio<br/>
                </p></div>
            </div>
            <div className="skillsDiv">
                <p>Back End :<br/>
                <Star /> 1) Node.js, Express<br/>
                <Star /> BDD: MongoDB(Mongoose)<br/>
                <Star /><Star /> 2) JEE(servlets, EJB), Java 8, Spring/JPA(Hibernate)<br/>
                <Star /> Apache CXF : Services web SOAP/REST<br/>
                <Star /> BDD: Oracle11g<br/>
                 3) <Star /><Star /><Star /> C++, <Star /> C#<br/>
                <Star /> BDD: OracleXE<br/>
                <Star /> API REST<br/>
                </p>
            </div>
        </main>
        <aside className="skillsCarouselWrapper">
          <div className="skillsCarousel"><Carousel images={frontEndImages} /></div>
          <div className="skillsCarousel"><Carousel images={backEndImages} /></div>
        </aside>
        <Footer />
    </div>
  );
}
export default Skills