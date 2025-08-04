import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaPython,
  FaReact
} from 'react-icons/fa';
import {
  SiApache,
  SiCisco,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiMaterialdesign,
  SiMysql,
  SiNodemon,
  SiOpenai,
  SiPostgresql,
  SiRender,
  SiTensorflow,
  SiVercel
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
    documentation: 'https://drive.google.com/file/d/1wn1RrdDCIKBXLN264LbOwnjrlFUsLKKw/view?usp=drive_link',
    video: 'https://youtu.be/FJc1TvDGNC0?feature=shared',
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
    documentation: 'https://drive.google.com/file/d/1cltbKexsiuCJuossKtMv0rqNoAEKe1bY/view?usp=drive_link',
    video: 'link-to-video-demo',
    tech: ['React', 'Django REST', 'Vercel', 'Render', 'TensorFlow.js'],
    features: [
      'ML-based demand forecasting',
      'Automated low-stock alerts',
      'Interactive data visualizations'
    ],
    role: 'Lead Developer & ML Engineer'
  },
    {
    title: 'Fitness Tracker',
    description: 'Fitness website for hackthon',
    image: 'image/fibit.png',
    link: 'https://naga.pythonanywhere.com/',
    git:'https://github.com/23335a0504raju/',
    documentation: 'https://drive.google.com/file/d/1XlIQbEZc5xqoPEJgwp-ZSC5enEw36wN_/view?usp=drive_link',
    video: 'link-to-video-demo',
    tech: ['Html', 'Django', 'Vercel', 'Stripe API'],
    features: [
     
      'Fitbit integration',
      'Points generation and doctor appointments'
    ],
    role: 'Full Stack Developer'
  },
  {
    title: '4 SEED - Farm Direct',
    description: 'Direct-to-consumer agricultural marketplace eliminating middlemen to benefit both farmers and buyers.',
    image: 'image/4seed.png',
    link: 'http://4seed.infinityfreeapp.com/',
    git:'https://github.com/23335a0504raju/4seed',
    documentation: 'link-to-pdf-documentation',
    video: 'link-to-video-demo',
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
    documentation: 'https://drive.google.com/file/d/1A-qosKEZiNrq1rYsWT59hM8YvvCkAmrC/view?usp=drive_link',
    video: 'https://www.youtube.com/watch?v=GEq9HO3_ggI',
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
    documentation: 'link-to-pdf-documentation',
    video: 'https://www.linkedin.com/posts/raju-chowdavada-06b734347_reactjs-djangorest-fullstackdevelopment-activity-7340183116860346368-BAC-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFbIklMBA8YxnN7oEFgqR0MEhjqS9cXdiUY',
    tech: ['React', 'Django REST', 'Vercel', 'Stripe API'],
    features: [
     
      'Secure payment processing',
      'Admin dashboard analytics'
    ],
    role: 'Frontend Developer Intern'
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
        { name: 'Django-Rest', icon: <SiDjango className="text-green-700" /> }
      ]
    },
    { 
      name: 'Database', 
      skills: [
        { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
        
      ]
    },
    { 
      name: 'UI Frameworks', 
      skills: [
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
        { name: 'Material UI', icon: <SiMaterialdesign className="text-blue-500" /> }, // Using Material Design icon instead
  
      ]
    },
    { 
      name: 'Other Skills', 
      skills: [
  { name: 'Cisco Packet Tracer', icon: <SiCisco className="text-blue-500" /> },
  { name: 'Machine Learning', icon: <SiTensorflow className="text-orange-500" /> },
  { name: 'Artificial Intelligence', icon: <SiOpenai className="text-purple-400" /> },
  { name: 'N8N automation', icon: <SiNodemon className="text-purple-400" /> },
  { name: 'Xampp', icon: <SiApache className="text-purple-400" /> },
  { name: 'Docker', icon: <SiDocker className="text-purple-400" /> },
  { name: 'Vercel', icon: <SiVercel className="text-purple-400" /> },
  { name: 'Render', icon: <SiRender className="text-purple-400" /> }
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
                      {project.features.map((features, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {features}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a
                        href={project.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] inline-flex items-center justify-center text-sm px-3 py-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] inline-flex items-center justify-center text-sm px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                        </svg>
                        Live Demo
                      </a>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-3">
                      <a
                        href={project.documentation || "#"} // Add project.documentation to your project objects
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] inline-flex items-center justify-center text-sm px-3 py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Documentation
                      </a>
                      
                      <a
                        href={project.video || "#"} // Add project.video to your project objects
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] inline-flex items-center justify-center text-sm px-3 py-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-colors duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                        Video Demo
                      </a>
                    </div>
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
    className="space-y-12"
  >
    {/* Internship Certificates Section */}
    <div>
      <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 text-transparent bg-clip-text">
        Internship Certificates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Internship Certificate 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="p-6 relative">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">
              CodeAlpha Internship
            </h3>
            <p className="text-gray-300 text-sm mb-4">Full Stack Developer Internship</p>
            <a
              href="https://drive.google.com/file/d/1Ae8pboizYSS6flTPe7Y32SXbE5cPpWWA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
            >
              View Certificate
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Certificate 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="p-6 relative">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">
              Pit Solutions Internship
            </h3>
            <p className="text-gray-300 text-sm mb-4">FrontEnd development and UI/UX design and realtime clients management</p>
            <a
              href="https://drive.google.com/file/d/1PL1pZrYUftqmXFWnN_6JSk-vYiuW7pGl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
            >
              View Certificate
              <svg
                className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>


    
     <div>
      <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
        Course Certificates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Certificate 1 - Python */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
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

            {/* Certificate 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Introduction to GitHub Copilot course
              </h3>
              <p className="text-gray-300 text-sm mb-4">GitHub Copilot is an incredible tool — it’s like pair programming with AI! 🤖 It has boosted my productivity and helped me explore alternative code patterns much faster.</p>
              <a
                href="https://drive.google.com/file/d/10Re6aFaGoKxM5IoGYnjZ8k5lBg2RxKSw/view?usp=drive_link"
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

            {/* Certificate 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Digital Business Skills By HP
              </h3>
              <p className="text-gray-300 text-sm mb-4">Completed six certified cources provided by HP, AI for Beginners,Customer Experience (CX) for Business Success,Agile Project Management,Introduction to Cybersecurity Awareness,Data Science & Analytics,Introduction to Digital Business Skills</p>
              <a
                href="https://drive.google.com/file/d/1L_3Gx6nRi8Slt31-0LpiBv4p3uVgPoxf/view?usp=drive_link"
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

            {/* Certificate 7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Professional Development provided by HP
              </h3>
              <p className="text-gray-300 text-sm mb-4">Completed Resume Writing and Job Interviewing,Effective Leadership,Success Mindset</p>
              <a
                href="https://drive.google.com/file/d/1mWXvsGB_OteeZ3mdZr7N4B1CYTW1q-m_/view?usp=drive_link"
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
          {/* certificate-8 */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                AWS's Solutions Architecture on Forage
              </h3>
              <p className="text-gray-300 text-sm mb-4">Designed and simple and scalable hosting architecture based on Elastic
 Beanstalk for a client experiencing significant growth and slow response
 times.</p>
              <a
                href="https://drive.google.com/file/d/1s-98UMACRj1yT7BhL1hP6Adl01amcjAB/view?usp=drive_link"
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
              {/* Certificate 9 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Data Analytics Job Simulation
              </h3>
              <p className="text-gray-300 text-sm mb-4"> Completed a Deloitte job simulation involving data analysis and forensic technology </p>
              <a
                href="https://drive.google.com/file/d/1sb4K5UNgzQzDUiRmB_VWe4e1b8ykQoeN/view?usp=drive_link"
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
            </div>
            </div>
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