import meme from '../images/meme.png'
import refran from '../images/refran.jpg'

const projects = [
    {
      title: 'Meme generator',
      description: 'Aplicación para crear memes personalizados.',
      image: meme,
      liveDemo: 'https://alexlab84.github.io/Meme-Generator/',
    },
    {
      title: 'Generador de refranes',
      description: 'Genera refranes divertidos de forma aleatoria.',
      image: refran,
      githubLink: 'https://github.com/alexlab84/Generador-de-refranes-divertidos',
      liveDemo: 'https://alexlab84.github.io/Generador-de-refranes-divertidos/',
    },
    // Añadir más proyectos aquí
  ];

  function Projects() {
    return (
     
      <section className="projects">
        <h2 className="secondTitle">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} className='imageProyect'/>
              <p className="paragraph">{project.description}</p>
              
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Demo en vivo</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;