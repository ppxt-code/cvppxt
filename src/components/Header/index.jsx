import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <header className="headerWrapper">
            <div className="headerDiv">
                <NavLink to="/" className={({ isActive }) => 
                        isActive ? "headerLink active" : "headerLink"
                    }>Accueil</NavLink>
            </div> 
            <div className="headerDiv">
                <NavLink to="/presentation" className={({ isActive }) => 
                        isActive ? "headerLink active" : "headerLink"
                    }>Présentation</NavLink>
                <NavLink to="/skills" className={({ isActive }) => 
                        isActive ? "headerLink active" : "headerLink"
                    }>Compétences</NavLink> 
            </div> 
            <div className="headerDiv">
                <NavLink to="/portfolio" className={({ isActive }) => 
                        isActive ? "headerLink active" : "headerLink"
                    }>Portfolio</NavLink>  
                <NavLink to="/contact" className={({ isActive }) => 
                        isActive ? "headerLink active" : "headerLink"
                    }>Contact</NavLink> 
            </div>      
        </header>
    );
}
export default Header