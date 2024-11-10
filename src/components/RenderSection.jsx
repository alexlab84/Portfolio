// RenderSection.jsx
import PropTypes from 'prop-types'; 
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

const RenderSection = ({ activeSection }) => {
  switch (activeSection) {
    case 'about':
      return <AboutMe />;
    case 'contact':
      return <Contact />;
    default:
      return <Projects />;
  }
};

RenderSection.propTypes = {
  activeSection: PropTypes.string.isRequired,  // 'activeSection' debe ser un string y es obligatorio
};

export default RenderSection;
