import { motion } from 'framer-motion';
import { FaCode, FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailBg from '../assets/email.svg';
import banner from "../assets/foot.png";
import githubBg from '../assets/github.svg';
import leetcodeBg from '../assets/leetcode.svg';
import linkedinBg from '../assets/linkedin.svg';
import resumeBg from '../assets/resume.svg';
import { PinContainer } from './ui/3d-pin';

const Contact = () => {
  const contacts = [
    {
      label: 'Email Me',
      icon: <FaEnvelope size={28} />,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=smilyraju8464@gmail.com',
      description: 'Lets talk about your ideas.',
      image: emailBg
    },
    {
      label: 'LinkedIn',
      icon: <FaLinkedin size={28} />,
      link: 'https://linkedin.com/in/raju-chowdavada-06b734347',
      description: 'Lets connect professionally.',
      image: linkedinBg
    },
    {
      label: 'GitHub',
      icon: <FaGithub size={28} />,
      link: 'https://github.com/23335a0504raju',
      description: 'Browse my open source work.',
      image: githubBg
    },
    {
      label: 'LeetCode',
      icon: <FaCode size={28} />,
      link: 'https://leetcode.com/u/Raju_Ch8464/',
      description: 'Check out my coding skills.',
      image: leetcodeBg
    },
    {
      label: 'Download CV',
      icon: <FaFileDownload size={28} />,
      link: 'https://drive.google.com/file/d/12-iWWjxQ1jO14D3cwAnLJALMgThYX1l_/view?usp=drive_link',
      description: 'Grab my latest resume.',
      image: resumeBg
    }
  ];

  return (
    <section
      id="contact"
      className="py-16 px-4 md:px-8 lg:px-16 text-gray-900 dark:text-white relative overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-lg">
            Open for freelance projects, collaborations or just a friendly chat.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex flex-wrap items-center justify-center gap-10 max-w-7xl mx-auto">
          {contacts.map((contact, index) => (
            <div key={index} className="h-[20rem] flex items-center justify-center w-full sm:w-64 px-2">
              <div className="hidden md:block w-full h-full">
                <PinContainer title={contact.label} href={contact.link}>
                  <ContactCardContent contact={contact} />
                </PinContainer>
              </div>
              <div className="md:hidden w-full h-full flex items-center justify-center">
                <a href={contact.link} target="_blank" rel="noopener noreferrer" className="block w-full h-[16rem] rounded-xl overflow-hidden relative shadow-lg bg-gray-900 border border-white/10">
                  <ContactCardContent contact={contact} isMobile={true} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 relative group"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gray-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Border Animation */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-500/30 rounded-xl transition-all duration-500 pointer-events-none"></div>

          {/* Banner Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <motion.img
              src={banner}
              alt="Personal Banner"
              className="w-full h-auto object-cover transform transition-all group-hover:scale-[1.01]"
              whileHover={{
                scale: 1.005,
                transition: { duration: 0.3 }
              }}
            />
          </div>

          {/* Overlay Text */}
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/70 backdrop-blur-sm p-4 rounded-lg max-w-md">
              <p className="text-sm font-medium">Ready to collaborate?</p>
              <p className="text-xs text-gray-300 mt-1">Let's build something amazing together</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gray-500/10 dark:bg-gray-400/10"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

const ContactCardContent = ({ contact, isMobile }) => {
  return (
    <div className={`flex flex-col p-4 tracking-tight sm:basis-1/2 w-[16rem] h-[16rem] ${isMobile ? 'text-white' : 'text-slate-100/50'}`}>
      <h3 className={`max-w-xs !pb-2 !m-0 font-bold text-base ${isMobile ? 'text-white' : 'text-slate-100'}`}>
        {contact.label}
      </h3>
      <div className="text-base !m-0 !p-0 font-normal">
        <span className={`${isMobile ? 'text-gray-300' : 'text-slate-500'}`}>
          {contact.description}
        </span>
      </div>
      <div className="relative flex flex-1 w-full rounded-lg mt-4 overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <img
          src={contact.image}
          alt={contact.label}
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors duration-500"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="text-white transform scale-150 drop-shadow-lg filter">
            {contact.icon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;