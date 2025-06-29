import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact
} from 'react-icons/fa';
import {
  SiCisco,
  SiCplusplus,
  SiDjango,
  SiMaterialdesign,
  SiMysql,
  SiTailwindcss,
  SiTensorflow
} from 'react-icons/si';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
  {
    title: 'Campus Colab',
    description: 'A collaborative platform connecting students across campuses for group projects, knowledge sharing, and academic networking.',
    image: 'image/campus.png',
    link: 'https://campus-colab.vercel.app/',
    git:'https://github.com/23335a0504raju/CampusColab',
    tech: ['React', 'Django REST Framework', 'Vercel', 'Render'],
    features: [
      'Real-time collaboration tools',
      'Academic resource sharing',
      'Cross-institution networking'
    ],
    role: 'Full-stack Developer'
  },
  {
    title: 'Smart Stock Management',
    description: 'Comprehensive inventory management system with machine learning-powered stock predictions and automated reordering.',
    image: 'image/inventory.png',
    link: 'https://inventory-pi-smoky.vercel.app/',
    git:'https://github.com/23335a0504raju/Inventory',
    tech: ['React', 'Django REST', 'Vercel', 'Render', 'TensorFlow.js'],
    features: [
      'ML-based demand forecasting',
      'Automated low-stock alerts',
      'Interactive data visualizations'
    ],
    role: 'Lead Developer & ML Engineer'
  },
  {
    title: '4 SEED - Farm Direct',
    description: 'Direct-to-consumer agricultural marketplace eliminating middlemen to benefit both farmers and buyers.',
    image: 'image/4seed.png',
    link: 'http://4seed.infinityfreeapp.com/',
    git:'https://github.com/23335a0504raju/4seed',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'jQuery', 'MySQL'],
    features: [
      'Farm-fresh produce marketplace',
      'Direct farmer-consumer transactions',
    
    ],
    role: 'Frontend Developer'
  },
  {
    title: 'Travel Pool',
    description: 'Ride-sharing platform for travelers to connect and share journeys, reducing costs and environmental impact.',
    image: 'image/travel.png',
    link: 'https://travelpool.infinityfreeapp.com/',
    git:'https://github.com/23335a0504raju/Travel',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'jQuery', 'Google Maps API'],
    features: [
      'Route matching algorithm',
      'User rating system',
      
    ],
    role: 'Full-stack Developer'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Feature-rich online shopping platform developed during internship with personalized recommendations.',
    image: 'image/codealpha.png',
    link: 'https://code-alpha-task-nu.vercel.app/',
    git:'https://github.com/23335a0504raju/CodeAlpha_Task2',
    tech: ['React', 'Django REST', 'Vercel', 'Stripe API'],
    features: [
     
      'Secure payment processing',
      'Admin dashboard analytics'
    ],
    role: 'Frontend Developer Intern'
  },
  {
    title: 'Fitness Tracker',
    description: 'Fitness website for hackthon',
    image: 'image/codealpha.png',
    link: 'https://code-alpha-task-nu.vercel.app/',
    git:'https://github.com/23335a0504raju/CodeAlpha_Task2',
    tech: ['Html', 'Django', 'Vercel', 'Stripe API'],
    features: [
     
      'Fitbit integration',
      'Points generation and doctor appointments'
    ],
    role: 'Full Stack Developer'
  }

  ];

  const techStack = [
    { 
      name: 'Programming Languages', 
      skills: [
        { name: 'Java', icon: <FaJava className="text-orange-500" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
        { name: 'C/C++', icon: <SiCplusplus className="text-blue-600" /> }
      ]
    },
    { 
      name: 'Web Development', 
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Django-Rest', icon: <SiDjango className="text-green-700" /> }
      ]
    },
    { 
      name: 'Database', 
      skills: [
        { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
       
      ]
    },
    { 
      name: 'UI Frameworks', 
      skills: [
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
        { name: 'Material UI', icon: <SiMaterialdesign className="text-blue-500" /> }, // Using Material Design icon instead
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
    { 
      name: 'Other Skills', 
      skills: [
        { name: 'Cisco Packet Tracer', icon: <SiCisco className="text-blue-500" /> },
        { name: 'Machine Learning', icon: <SiTensorflow className="text-orange-500" /> },
        { name: 'Artificial Intelligence', icon: <span className="text-purple-400">AI</span> }
      ]
    }
  ];

  const tabList = ['projects', 'certificates', 'tech'];

  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 text-white w-full overflow-hidden"
    >
      {/* Dark background with subtle gradient */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[300px] h-[300px] -top-1/4 -right-1/4 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[300px] h-[300px] -bottom-1/4 -left-1/4 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Make container full width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              My Portfolio
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex rounded-full bg-gray-900/50 p-1.5 backdrop-blur-sm border border-gray-700/50 shadow-lg"
          >
            {tabList.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-highlight"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {tech}
                          
                        </span>
                      ))}
                    </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                      {project.role.map((role, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {role}
                          
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((features, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {features}
                          
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={project.link}
                      className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      View Git Hub
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                    
                    <a
                      href={project.git}
                      className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      View Project
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

   {activeTab === 'certificates' && (
        <motion.div
          key="certificates"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Certificate 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Python Essentials 1 & 2
              </h3>
              <p className="text-gray-300 text-sm mb-4">Completed Python Essentials from Cisco</p>
              <a
                href="https://drive.google.com/file/d/1I8--y5JZ1_vfreF3i5qNmsvk8CIABtn-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                View Certificate
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Certificate 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                CCNA-3 modules and Cybersecurity provided by Cisco
              </h3>
              <p className="text-gray-300 text-sm mb-4">successfully completed all modules of CCNA 3 (Cisco Certified Network Associate) under the Cisco Networking Academy!</p>
              <a
                href="https://drive.google.com/file/d/1joG86kXEps8nMkyfzcLPptdl_QNW441f/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                View Certificate
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Certificate 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                NPTEL Cloud Computing Fundamentals
              </h3>
              <p className="text-gray-300 text-sm mb-4">Completed Cloud Computing Course and scored 84</p>
              <a
                href="https://drive.google.com/file/d/1pJRevLW9F-Fofb6USBc2D_qLhsd56DvX/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                View Certificate
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

           {/* Certificate 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Deloitte Australia's Technology on Forage
              </h3>
              <p className="text-gray-300 text-sm mb-4">Completed a job simulation involving development and coding
 Wrote a proposal for creating a dashboard</p>
              <a
                href="https://drive.google.com/file/d/1praxyQCpluZVPG_vIZHjmqQdC5xOCV-o/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                View Certificate
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}

          {activeTab === 'tech' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {techStack.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-4 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex flex-col items-center text-center">
                          <div className="text-2xl mb-2">
                            {skill.icon}
                          </div>
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;