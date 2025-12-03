import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Error() {
    
  return (
    <div className="errorWrapper">
      <Header />
      <main className="errorBody">
        <h1>Erreur 404</h1><br/>
        <img src="/images/404error.gif" alt="animation 404" />
      </main>
      <Footer />
    </div>
  );
}
export default Error