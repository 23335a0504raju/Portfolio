import { motion } from 'framer-motion';
import { FaCode, FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import banner from "../assets/foot.png";

const Contact = () => {
  const contacts = [
     {
      label: 'Email Me',
      icon: <FaEnvelope size={28} />,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=smilyraju8464@gmail.com',
      description: 'Lets talk about your ideas.',
    },
    {
      label: 'LinkedIn',
      icon: <FaLinkedin size={28} />,
      link: 'https://linkedin.com/in/raju-chowdavada-06b734347',
      description: 'Lets connect professionally.',
    },
    {
      label: 'GitHub',
      icon: <FaGithub size={28} />,
      link: 'https://github.com/23335a0504raju',
      description: 'Browse my open source work.',
    },
    {
      label: 'LeetCode',
      icon: <FaCode size={28} />,
      link: 'https://leetcode.com/u/Raju_Ch8464/', 
      description: 'Check out my coding skills.',
    },
    {
      label: 'Download CV',
      icon: <FaFileDownload size={28} />,
      link: 'https://drive.google.com/file/d/1jlWoA1ELx0KIQFRUt5AHsjI6Hf1kSi5d/view?usp=drive_link',
      description: 'Grab my latest resume.',
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 text-white relative overflow-hidden"
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
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Open for freelance projects, collaborations or just a friendly chat.
          </p>
        </motion.div>

        {/* Cards Grid - Updated for 5 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-4 md:p-5 rounded-2xl border border-gray-700 bg-[#1b1b1b]/80 backdrop-blur-xl shadow-lg transition-all hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl blur-sm"></div>
              <div className="relative flex flex-col items-center text-center space-y-3 z-10">
                <div className="p-2 md:p-3 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-500/10 text-purple-400 group-hover:text-white transition duration-300 animate-pulse">
                  {contact.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-purple-300">
                  {contact.label}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 leading-tight">
                  {contact.description}
                </p>
                <span className="w-8 md:w-10 h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 group-hover:scale-110 transition-transform mt-2"></span>
              </div>
            </motion.a>
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
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Border Animation */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-xl transition-all duration-500 pointer-events-none"></div>
          
          {/* Banner Image */}
          <motion.img
            src={banner}
            alt="Personal Banner"
            className="w-full h-auto rounded-xl shadow-2xl object-cover transform transition-all group-hover:scale-[1.01] group-hover:shadow-purple-500/20"
            whileHover={{ 
              scale: 1.005,
              transition: { duration: 0.3 }
            }}
          />
          
          {/* Overlay Text (if your banner has space) */}
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gradient-to-r from-black/80 to-transparent p-4 rounded-lg max-w-md">
              <p className="text-sm font-medium">Ready to collaborate?</p>
              <p className="text-xs text-gray-300 mt-1">Let's build something amazing together</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/10"
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

export default Contact;