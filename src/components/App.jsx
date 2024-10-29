import { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';




function App() {
  const [activeSection, setActiveSection] = useState('projects'); // Inicialmente, solo se muestran los proyectos

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return activeSection ? <AboutMe /> : null;
      case 'contact':
        return activeSection ? <Contact /> : null;
      default:
        return <Projects />;
    }
  };
  


  return (
    
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <main>
      
      {renderSection()}
      </main>
      <Footer />
    </div>
  );
}


export default App;
