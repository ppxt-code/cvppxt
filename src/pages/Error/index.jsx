import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Error() {
  const basename = import.meta.env.PROD ? '/cvppxt/' : '/'; 
  return (
    <div className="errorWrapper">
      <Header />
      <main className="errorBody">
        <h1>Erreur 404</h1><br/>
        <img src={`${basename}images/404error.gif`} alt="animation 404" />
      </main>
      <Footer />
    </div>
  );
}
export default Error