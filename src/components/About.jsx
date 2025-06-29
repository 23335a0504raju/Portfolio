import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
const About = () => {
  const stats = [
    { label: 'Total Projects', value: 6 },
    { label: 'Certificates', value: 6 },
    { label: 'Internships', value: 2 }
  ];

  return (
    <section
      id="profile"
      className="min-h-screen py-20  text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] top-0 right-0 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute w-[500px] h-[500px] bottom-0 left-0 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                About Me
              </span>
            </motion.h2>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-4xl font-bold leading-tight">
                <span className="text-gray-300">Hello, I'm</span><br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Raju Chowdavada
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
               Web Developer | Machine Learning Enthusiast | AI Model Builder<br/>
               I don't just learn technology—I apply it to build meaningful solutions that matter. 
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                onClick={() => window.open("https://drive.google.com/file/d/1Y6dwYwGcxYTltNbfhHKSjHmn6OTlqsG8/view?usp=drive_link", "_blank")}
              >
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            {/* Profile Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
             
           <div className="aspect-square rounded-full relative w-96 h-96">
                
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full animate-spin-slow blur-xl opacity-50"></div>

                {/* Main circle */}
                <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded-full p-4">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                    </div>
                </div>
                </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
