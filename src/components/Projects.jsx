const projects = [
    {
      title: 'Generador de memes',
      description: 'Una aplicación para crear memes personalizados.',
      image: 'url_del_meme_project_image',
      githubLink: 'https://github.com/alexlab84/Generador-de-memes',
      liveDemo: 'https://alexlab84.github.io/Generador-de-memes/',
    },
    {
      title: 'Generador de refranes',
      description: 'Genera refranes divertidos de forma aleatoria.',
      image: 'url_del_refran_project_image',
      githubLink: 'https://github.com/alexlab84/Generador-de-refranes-divertidos',
      liveDemo: 'https://alexlab84.github.io/Generador-de-refranes-divertidos/',
    },
    // Añadir más proyectos aquí
  ];

  function Projects() {
    return (
      <section id="projects">
        <h2>Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Demo en vivo</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;