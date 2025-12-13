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
    "title": "DocumentDB – AI-Powered Document Intelligence Hub",
    "description": "A smart document management system that allows users to upload, organize, and query their files using RAG-based AI search. Supports document previews, secure access, and intelligent Q&A powered by OpenRouter LLMs.",
    "image": "image/docintel.png",
    "link": "https://document-db.vercel.app/",
    "git": "https://github.com/23335a0504raju/DocumentDB",
    "documentation": "https://document-db.vercel.app/",
    "video": "https://www.linkedin.com/posts/raju-chowdavada-06b734347_ai-artificialintelligence-rag-activity-7405219264825073664-Gq0S",
    "tech": [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "LangChain",
      "OpenRouter API",
      "JWT Authentication",
      "Render (Backend Deployment)",
      "Vercel (Frontend Deployment)"
    ],
    "features": [
      "Upload, preview, download, and delete documents",
      "AI-powered RAG search across selected documents",
      "Document chunking + embedding + vector-based retrieval",
      "Real-time conversational AI assistant",
      "Query history with sources and references",
      "Fully authenticated dashboard with analytics",
      "Cloud-based file storage and global access"
    ],
    "role": "Full-Stack Developer (End-to-End Architecture, API Design, RAG Pipeline, Deployment)"
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
  },
  {
    title: 'Object Detection',
    description: 'Upload any image and detect objects in real-time.Annotated image returned with bounding boxes, labels, and confidence scores.Lightweight YOLOv8 nano model ensures fast inference with low memory usage.',
    image: 'image/object.png',
    link: 'https://objectdetection-1-d5cq.onrender.com/',
    git:'https://github.com/23335a0504raju/ObjectDetection',
    tech: ['React', 'Django REST', 'Render', 'Rest API'],
    features: [
      'Annotated image returned with bounding boxes',
    ],
    role: 'Full stack Developer'
  },
  {
    title: 'N8N Automation',
    description: 'Built a WhatsApp-controlled Google Drive automation workflow using n8n, deployed via Docker + Render, and integrated with Supabase PostgreSQL for logging.',
    image: 'image/n8n.png',
    link: 'https://n8n-s63m.onrender.com/',
    git:'https://github.com/23335a0504raju/n8nAutomation',
    video: 'https://drive.google.com/file/d/1Q5h_LfxFWdYPsnuMbdHslReYP5F35UmO/view?usp=drive_link',
    tech: ['N8N', 'Java Script','Render','Docker','Automation'],
    features: [
      'This project demonstrates the power of no-code automation combined with scripting for real-world tasks.',
    ],
    role: 'N8n Automation'
  },
    {
    title: 'Navi FrontEnd',
    description: 'Built a frontend website totally usinf very smooth scrolling locomotive scroll.',
    image: 'image/image.png',
    link: 'https://clone-task-one.vercel.app/',
    git:'https://github.com/23335a0504raju/CloneTask',
    tech: ['Java Script','Vercel','React'],
    features: [
      'This project demonstrates the FrontEnd Skills and Clone of a project with smooth scrolling effects and animations.',
    ],
    role: 'N8n Automation'
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
    const achievements = [
    'Delivered 6+ full-stack applications with authentication, REST APIs, and cloud deployment (AWS, Vercel, Render), ensuring scalability and reliability.',
    'Optimized API response times by 25% through query optimization, caching, and efficient state management.',
    'Developed Smart Stock Management system with automated demand forecasting, reducing manual errors and improving decision-making.',
    'Built a secure E-Commerce platform with authentication, payment integration, and an admin dashboard, enhancing user experience and business operations.',
    'Finalist in a Hackathon – developed a blogging platform with authentication and role-based access in under 24 hours.',
    'Solved 450+ coding problems on LeetCode and CodeChef, strengthening algorithmic thinking and problem-solving skills.',
    'Deployed production-ready apps during internships, achieving 99.9% uptime with CI/CD and cloud integration.',
    'Designed and deployed a TensorFlow.js-based stock prediction system, enabling automated reordering and demand forecasting.',
    'Maintained a strong academic record with a CGPA of 8.36/10 while completing internships, certifications, and multiple live projects.'
  ];



  const tabList = ['projects', 'certificates', 'tech','achievements'];

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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 max-w-l"
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

        {/* Certificate 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="p-6 relative">
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">
              AIML Internship
            </h3>
            <p className="text-gray-300 text-sm mb-4">Gained hands-on experience in Machine Learning, Data Analysis, and AI applications, working on practical projects to apply theoretical concepts.</p>
            <a
              href="https://drive.google.com/file/d/1fMXogVfGuIcRUZHsjBRsBQul13Ml-sQ4/view?usp=drive_link"
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

  {/* Certificate 10 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
               Software Engineering Job Simulation
              </h3>
              <p className="text-gray-300 text-sm mb-4"> Completed Accenture Nordics's Software Engineering on Forage </p>
              <a
                href="https://drive.google.com/file/d/16XMEgkddLMRAz8B8F2DAt54doBHPo8GY/view?usp=drive_link"
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

           {/* Certificate 11 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Deloitte Australia Technology Job Simulation on Forage - June 2025
              </h3>
              <p className="text-gray-300 text-sm mb-4"> Completed a job simulation involving development and coding ,Wrote a proposal for creating a dashboard  </p>
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

           {/* Certificate 12 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
               GenAI Powered Data Analytics Job Simulation
              </h3>
              <p className="text-gray-300 text-sm mb-4"> Completed a job simulation involving AI-powered data analytics and strategy development for the Financial Services team at Tata iQ.
Conducted exploratory data analysis (EDA) using GenAI tools to assess data quality, identify risk indicators, and structure insights for predictive modeling. </p>
              <a
                href="https://drive.google.com/file/d/1I8oe2H4NQQWKCCX6GQuyhCYYjgv4LuD_/view?usp=drive_link"
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

           {/* Certificate 13 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
               Accenture UK Introduction to Technology Apprenticeship
              </h3>
              <p className="text-gray-300 text-sm mb-4"> Engaged in a dynamic dialogue as a technology apprentice at Accenture, exploring the attributes of successful technology apprentices, the versatile applications of technology across industries, and cutting-edge technology streams in collaboration with a senior counterpart.
Demonstrated active participation through the completion of targeted multiple-choice questions, reinforcing practical comprehension of key themes discussed during the apprentice dialogue. This interactive approach enhanced the depth of understanding. </p>
              <a
                href="https://drive.google.com/file/d/1wkaiIXbXM_y3OZvkyViTSPfZEcblbrpv/view?usp=drive_link"
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



          {/* Certificate 14 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-6 relative">
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
               Google for Developers
              </h3>
              <p className="text-gray-300 text-sm mb-4">The Google AI/ML Virtual Internship provided practical exposure to core concepts of Artificial Intelligence and Machine Learning, including data preprocessing, model building, evaluation, and deployment. It focused on applying ML algorithms to solve real-world problems and developing hands-on skills in Python, TensorFlow, and data analysis tools. </p>
              <a
                href="https://drive.google.com/file/d/1fMXogVfGuIcRUZHsjBRsBQul13Ml-sQ4/view?usp=drive_link"
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

       {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 p-8 shadow-2xl"
                  >
                    <div className="flex items-start">
                      <div className="text-3xl mr-4 text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
                        🏆
                      </div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  </motion.div>
                ))}
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
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Side-by-side categories */}
            {techStack.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 h-fit"
              >
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text text-center">
                  {category.name}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 p-3 hover:border-purple-500/50 transition-all duration-300 shadow-md hover:shadow-purple-500/10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex flex-col items-center text-center">
                        <div className="text-2xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;