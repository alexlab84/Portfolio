import meme from '../images/meme.jpg'
import refran from '../images/refran.jpg'
import cards from '../images/HarryPotter.png'
import cholResults from '../images/cholResults.jpg'

const projects = [
  {
    title: 'Meme generator',
    description: 'Aplicación para crear memes personalizados.',
    image: meme,
    liveDemo: 'https://alexlab84.github.io/Meme-Generator/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'], // Tecnologías utilizadas
  },
  {
    title: 'Generador de refranes',
    description: 'Genera refranes divertidos de forma aleatoria.',
    image: refran,
    githubLink: 'https://github.com/alexlab84/Generador-de-refranes-divertidos',
    liveDemo: 'https://alexlab84.github.io/Generador-de-refranes-divertidos/',
    technologies: ['HTML', 'CSS', 'JavaScript'], // Tecnologías utilizadas
  },
  {
    title: 'Harry Potter Cards',
    description: 'Aplicación que muestra personajes de Harry Potter y filtra.',
    image: cards,
    liveDemo: 'https://alexlab84.github.io/HarryPotterCards/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'], // Tecnologías utilizadas
  },
  {
    title: 'Cholesterol results',
    description: 'Interfaz gráfica que muestra resultados de colesterol.',
    image: cholResults,
    liveDemo: 'https://alexlab84.github.io/Visualization-of-cholesterol-test-results/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'], 
  }
];

function Projects() {
  return (
    <section className="projects">
      <h2 className="secondTitle">Proyectos</h2>
      <div className="projectsFlex">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className='projectsTitle'>{project.title}</h3>
            <img src={project.image} alt={project.title} className='imageProyect'/>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies">
              <strong>Tecnologías utilizadas:</strong> {project.technologies.join(', ')}
            </p>
            <a className="linkProjects" href={project.liveDemo} target="_blank" rel="noopener noreferrer">Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

  
  export default Projects;