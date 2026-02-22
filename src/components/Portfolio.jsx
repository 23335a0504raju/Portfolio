import { AnimatePresence, motion } from 'framer-motion';
import { Award, Brain, CheckCircle, Cloud, Code, GraduationCap, Server, Terminal, Trophy, Zap } from 'lucide-react';
import { useState } from 'react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaGlobe,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaProjectDiagram,
  FaPython,
  FaReact,
  FaServer
} from 'react-icons/fa';
import {
  SiApache,
  SiCisco,
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiExpress,
  SiMaterialdesign,
  SiMongodb,
  SiMysql,
  SiNodemon,
  SiOpenai,
  SiPostgresql,
  SiRender,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
  SiVercel
} from 'react-icons/si';

import { BentoGrid } from './ui/bento-grid';
import CardStack from './ui/card-stack';
import { ExpandableTabs } from './ui/expandable-tabs';
import { LayoutGrid } from './ui/layout-grid';
import OrbitingSkills from './ui/orbiting-skills';
const mappedAchievements = [
  {
    title: "Full-Stack Mastery",
    meta: "6+ Apps",
    description: "Delivered 6+ full-stack applications with authentication, REST APIs, and cloud deployment, ensuring scalability.",
    icon: <Cloud className="w-4 h-4 text-blue-500" />,
    status: "Verified",
    tags: ["AWS", "Vercel", "Render"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "API Optimization",
    meta: "+25% Speed",
    description: "Optimized API response times by 25% through query optimization, caching, and efficient state management.",
    icon: <Zap className="w-4 h-4 text-yellow-500" />,
    status: "Performance",
    tags: ["Caching", "Query Opt"],
    colSpan: 1,
  },
  {
    title: "AI Integration",
    meta: "ML System",
    description: "Developed Smart Stock Management system with automated demand forecasting and ML predictions.",
    icon: <Brain className="w-4 h-4 text-purple-500" />,
    status: "Innovation",
    tags: ["TensorFlow", "Automation"],
    colSpan: 1,
  },
  {
    title: "Hackathon Finalist",
    meta: "Top Rank",
    description: "Finalist in a Hackathon – developed a blogging platform with authentication and role-based access in under 24 hours.",
    icon: <Trophy className="w-4 h-4 text-orange-500" />,
    status: "Award",
    tags: ["Rapid Dev", "Competition"],
    colSpan: 2,
  },
  {
    title: "Secure E-Commerce",
    meta: "Production",
    description: "Built a secure E-Commerce platform with authentication, payment integration, and an admin dashboard.",
    icon: <CheckCircle className="w-4 h-4 text-green-500" />,
    status: "Security",
    tags: ["Stripe", "Auth"],
    colSpan: 1,
  },
  {
    title: "Algorithmic Expert",
    meta: "450+ Solved",
    description: "Solved 450+ coding problems on LeetCode and CodeChef, strengthening algorithmic thinking.",
    icon: <Code className="w-4 h-4 text-indigo-500" />,
    status: "Elite",
    tags: ["DSA", "Problem Solving"],
    colSpan: 2,
  },
  {
    title: "Production Deployment",
    meta: "99.9% Uptime",
    description: "Deployed production-ready apps during internships with CI/CD and cloud integration.",
    icon: <Server className="w-4 h-4 text-slate-500" />,
    status: "DevOps",
    tags: ["CI/CD", "Reliability"],
    colSpan: 1,
  },
  {
    title: "Academic Excellence",
    meta: "8.36 CGPA",
    description: "Maintained a strong academic record while completing internships, certifications, and live projects.",
    icon: <GraduationCap className="w-4 h-4 text-pink-500" />,
    status: "Honors",
    tags: ["Education", "Growth"],
    colSpan: 2,
  },
];





const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'Campus Colab',
      description: 'A collaborative platform connecting students across campuses for group projects, knowledge sharing, and academic networking.',
      image: 'image/campus.png',
      link: 'https://campus-colab.vercel.app/',
      git: 'https://github.com/23335a0504raju/CampusColab',
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
      git: 'https://github.com/23335a0504raju/Inventory',
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
      git: 'https://github.com/23335a0504raju/',
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
      git: 'https://github.com/23335a0504raju/4seed',
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
      git: 'https://github.com/23335a0504raju/Travel',
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
      git: 'https://github.com/23335a0504raju/CodeAlpha_Task2',
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
      git: 'https://github.com/23335a0504raju/ObjectDetection',
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
      git: 'https://github.com/23335a0504raju/n8nAutomation',
      video: 'https://drive.google.com/file/d/1Q5h_LfxFWdYPsnuMbdHslReYP5F35UmO/view?usp=drive_link',
      tech: ['N8N', 'Java Script', 'Render', 'Docker', 'Automation'],
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
      git: 'https://github.com/23335a0504raju/CloneTask',
      tech: ['Java Script', 'Vercel', 'React'],
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
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'C/C++', icon: <SiCplusplus className="text-blue-600" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'MERN Stack', icon: <FaReact className="text-blue-400" /> },
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-500 dark:text-white" /> },
        { name: 'Django-Rest', icon: <SiDjango className="text-green-700" /> },
        { name: 'Web Applications', icon: <FaGlobe className="text-blue-400" /> }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'SQL', icon: <SiMysql className="text-blue-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-green-400" /> }
      ]
    },
    {
      name: 'UI Frameworks',
      skills: [
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
        { name: 'Material UI', icon: <SiMaterialdesign className="text-blue-500" /> },

      ]
    },
    {
      name: 'Other Skills',
      skills: [
        { name: 'Project Management', icon: <FaProjectDiagram className="text-orange-500" /> },
        { name: 'API Handling', icon: <FaServer className="text-gray-500" /> },
        { name: 'Cisco Packet Tracer', icon: <SiCisco className="text-blue-500" /> },
        { name: 'Machine Learning', icon: <SiTensorflow className="text-orange-500" /> },
        { name: 'Artificial Intelligence', icon: <SiOpenai className="text-purple-400" /> },
        { name: 'N8N automation', icon: <SiNodemon className="text-green-500" /> },
        { name: 'Xampp', icon: <SiApache className="text-orange-500" /> },
        { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
        { name: 'Vercel', icon: <SiVercel className="text-gray-900 dark:text-gray-100" /> },
        { name: 'Render', icon: <SiRender className="text-blue-400" /> }
      ]
    }
  ];
  // const achievements = [
  //   'Delivered 6+ full-stack applications with authentication, REST APIs, and cloud deployment (AWS, Vercel, Render), ensuring scalability and reliability.',
  //   'Optimized API response times by 25% through query optimization, caching, and efficient state management.',
  //   'Developed Smart Stock Management system with automated demand forecasting, reducing manual errors and improving decision-making.',
  //   'Built a secure E-Commerce platform with authentication, payment integration, and an admin dashboard, enhancing user experience and business operations.',
  //   'Finalist in a Hackathon – developed a blogging platform with authentication and role-based access in under 24 hours.',
  //   'Solved 450+ coding problems on LeetCode and CodeChef, strengthening algorithmic thinking and problem-solving skills.',
  //   'Deployed production-ready apps during internships, achieving 99.9% uptime with CI/CD and cloud integration.',
  //   'Designed and deployed a TensorFlow.js-based stock prediction system, enabling automated reordering and demand forecasting.',
  //   'Maintained a strong academic record with a CGPA of 8.36/10 while completing internships, certifications, and multiple live projects.'
  // ];


  const tabItems = [
    { title: "Projects", icon: Code },
    { title: "Certificates", icon: Award },
    { title: "Tech Stack", icon: Terminal },
    { title: "Achievements", icon: Trophy },
  ];

  return (
    <section
      id="portfolio"
      className="py-16 px-4 md:px-8 lg:px-16 text-gray-900 dark:text-white"
    >

      {/* Make container full width */}
      <div className="w-full relative z-10 transition-colors duration-300">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white block">
            My Portfolio
          </h2>
          <div className="h-1 w-20 mx-auto bg-gray-900 dark:bg-white rounded-full"></div>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 no-scrollbar">
          <ExpandableTabs
            tabs={tabItems}
            onChange={(index) => {
              const tabs = ['projects', 'certificates', 'tech', 'achievements'];
              setActiveTab(tabs[index]);
            }}
            defaultSelected={0}
            enableOutsideClick={false}
            activeColor="text-gray-900 dark:text-white"
            className="bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 min-w-max"
          />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <div className="min-h-screen w-full pb-20">
              <LayoutGrid cards={projects.map((project, index) => ({
                id: index + 1,
                content: <ProjectCardContent project={project} />,
                className: (index % 4 === 0 || index % 4 === 3) ? "col-span-2 md:col-span-2" : "col-span-1",
                thumbnail: project.image
              }))} />
            </div>
          )}

          {activeTab === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <CardStack />
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-screen-2xl mx-auto"
            >
              <BentoGrid items={mappedAchievements} />
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {techStack.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: 'spring', damping: 20 }}
                    className="bg-white/60 dark:bg-[#09090b]/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 dark:from-white/5 dark:to-transparent opacity-50 pointer-events-none"></div>
                    <OrbitingSkills skills={category.skills} categoryName={category.name} />
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


const ProjectCardContent = ({ project }) => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        {project.title}
      </p>
      <p className="font-normal text-base text-white/80">{project.role}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-[11px] uppercase font-semibold tracking-wider px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white transition-all duration-300 gap-2"
        >
          GitHub
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-sm font-semibold px-4 py-2 rounded-lg bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-200 dark:text-black text-white transition-all duration-300 gap-2"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Portfolio;