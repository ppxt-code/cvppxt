import TypewriterEffect from 'typewriter-effect';

function TypeWriter() {
  const lines = [ "Développeur Objet", "Développeur Web",  
                  "11 ans d'expérience"];
  return (
    <div style={{ 
      fontFamily: 'monospace', 
      fontSize: '2rem', 
      lineHeight: '2.5rem',
      padding: '60px 20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <TypewriterEffect
          options={{ loop: true,
                    delay: 50,      // Vitesse frappe (ms par caractère)
                    deleteSpeed: 20 // Vitesse suppression
           }}
          onInit={(typewriter) => {
            typewriter
              .typeString(lines[0])
              .pauseFor(200)
              .typeString(`<br>${lines[1]}`)
              .pauseFor(200)
              .typeString(`<br>${lines[2]}`)
              .pauseFor(2000)
              .deleteAll(1) // Efface tout
              .start();
          }}
      />
    </div>
  );
}

export default TypeWriter;
