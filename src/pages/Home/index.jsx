import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeWriter from '../../components/TypeWriter';

function Home() {
  const basename = import.meta.env.PROD ? '/cvppxt/' : '/';  
  return (
    <div className="homeWrapper">
      <Header />
      <div className="homeBody">
        <div className="homeDiv">
          <h1>Xuan Trang PHAM PHU</h1>
          <a className="homelink"
             href={`${basename}documents/PhamPhu_DC_2025.pdf`}
             target="_blank"
             rel="noopener noreferrer" > mon CV </a>
        </div>
        <TypeWriter />
      </div>
      <Footer />
    </div>
  );
}
export default Home