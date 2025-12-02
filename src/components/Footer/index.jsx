
import linkedinIcon  from '../../assets/linkedin.webp'; 
function Footer () {
    return (<div className="footerWrapper">
                <a href="https://www.linkedin.com/in/xuantrang-pham-phu-8b4431398/" target="_blank" rel="noopener noreferrer">
                    <img className="contactIcon" src={linkedinIcon} alt="icone linkedin"/>
                </a>
            </div>);
}
export default Footer;