import PropTypes from 'prop-types';

function Header({ setActiveSection }) {
  const handleSectionChange = (section) => {
    setActiveSection((prev) => (prev === section ? null : section));
  };

  return (
    <header>
      <h1 className="principalTitle">Alejandra Sánchez</h1>
      <h2 className="principalTitleh2">Frontend Developer</h2>
      <nav className="navLinks">
        <ul className="ulLink"> 
          <li className="linkLi"><a className="link" onClick={() => handleSectionChange('projects')}>Proyectos</a></li>
          <li className="linkLi"><a className="link" onClick={() => handleSectionChange('about')}>Sobre mí</a></li>
          <li className="linkLi"><a className="link" onClick={() => handleSectionChange('contact')}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setActiveSection: PropTypes.func.isRequired, // Asegúrate de que sea una función y que sea requerida
};

export default Header;
