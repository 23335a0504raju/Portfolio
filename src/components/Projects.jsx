import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Full-featured online store with product listings, cart, and secure checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    github: '#',
    live: '#',
    image: 'project1.jpg'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Productivity app with drag-and-drop functionality and team collaboration.',
    tags: ['React', 'Firebase', 'Material UI'],
    github: '#',
    live: '#',
    image: 'project2.jpg'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with 5-day forecast and location data.',
    tags: ['JavaScript', 'API Integration', 'CSS3'],
    github: '#',
    live: '#',
    image: 'project3.jpg'
  }
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span>Projects</span>
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={`/assets/${project.image}`} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;