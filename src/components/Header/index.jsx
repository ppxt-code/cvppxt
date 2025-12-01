import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className="headerWrapper">
            <div className="headerDiv">
                <Link to="/">Accueil</Link>
                <Link to="/presentation">Présentation</Link>
                <Link to="/skills">Compétences</Link> 
            </div> 
            <div className="headerDiv">
                <Link to="/portfolio">Portfolio</Link>  
                <Link to="/contact">Contact</Link> 
            </div>      
        </div>
    );
}
export default Header