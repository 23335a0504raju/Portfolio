import { motion } from 'framer-motion';
import LandingAccordionItem from './ui/interactive-image-accordion';
import { Timeline } from './ui/timeline';

const About = () => {
  const timelineData = [
    {
      title: "2023 - Present",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">B.Tech including AI & ML</h4>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">MVGR College of Engineering</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Pursuing Bachelor of Technology with a specialization in Artificial Intelligence and Machine Learning.
            Maintaining a strong academic record with 8.36 CGPA.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">Data Structures</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">Neural Networks</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">Full Stack Dev</span>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2023",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Diploma in Computer Engineering</h4>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">Govt Polytechnic Anakapalli</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Built a solid foundation in computer science principles, hardware, and software development.
            Graduated with 83% distinction.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">C/C++</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">Database Management</span>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2020",
      content: (
        <div>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Secondary Education</h4>
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">Jubilee English Medium School</p>
          <p className="text-gray-600 dark:text-gray-400">
            Completed secondary education with excellent academic performance (98%).
            Developed early interest in mathematics and logic.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 overflow-hidden">
      {/* Hero Section with Accordion */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-20">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="text-center space-y-6 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            >
              Transforming Ideas into <br />
              <span className="text-gray-900 dark:text-white">Digital Reality</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              I am <span className="font-semibold text-gray-900 dark:text-white">Raju Chowdavada</span>, a passionate Full-Stack Developer and Machine Learning Enthusiast.
              Explore my key skills and areas of expertise below.
            </motion.p>
          </div>

          {/* Interactive Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <LandingAccordionItem />
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="w-full">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">My Journey</h3>
        <div className="h-1 w-20 mx-auto bg-blue-500 rounded-full mb-16"></div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default About;
