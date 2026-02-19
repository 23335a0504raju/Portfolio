import { motion } from 'framer-motion';
import { FaCss3Alt, FaFigma, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa';
import { SiGraphql, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Node.js', icon: <FaNode /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Figma', icon: <FaFigma /> },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span>Skills</span>
        </motion.h2>

        <motion.div
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-box"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;