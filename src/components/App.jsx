import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import RenderSection from './RenderSection';

function App() {
  const [activeSection, setActiveSection] = useState('projects'); // Inicialmente, solo se muestran los proyectos

  return (
    <div className="App">
      <Header setActiveSection={setActiveSection} />
      <main>
        <RenderSection activeSection={activeSection} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
