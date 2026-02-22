import { motion } from 'framer-motion';
import profileImg from '../assets/cover.png';
import { Timeline } from './ui/timeline';
import { ZoomParallax } from './ui/zoom-parallax';

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
            <span className="px-3 py-1 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-white/10 shadow-sm">Data Structures</span>
            <span className="px-3 py-1 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-white/10 shadow-sm">Neural Networks</span>
            <span className="px-3 py-1 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-white/10 shadow-sm">Full Stack Dev</span>
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
            <span className="px-3 py-1 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-white/10 shadow-sm">C/C++</span>
            <span className="px-3 py-1 bg-white/50 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-white/10 shadow-sm">Database Management</span>
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
    <section id="about" className="min-h-screen py-20">
      {/* Hero Section with Accordion */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-20">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="text-center space-y-6 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
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
        </div>
      </div>

      {/* === MOBILE: Responsive Image Grid (hidden on md+) === */}
      <div className="block md:hidden px-4 mb-16">
        <div className="grid grid-cols-2 gap-3">
          {[
            { src: profileImg, alt: 'Raju Chowdavada' },
            { src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop', alt: 'AI & Machine Learning' },
            { src: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=800&auto=format&fit=crop', alt: 'Backend Engineering' },
            { src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop', alt: 'DSA & Algorithms' },
            { src: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=800&auto=format&fit=crop', alt: 'UI/UX Design' },
            { src: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=800&auto=format&fit=crop', alt: 'Server Infrastructure' },
          ].map(({ src, alt }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 shadow-lg ${i === 0 ? 'col-span-2 h-52' : 'h-36'}`}
            >
              <img src={src} alt={alt} className="w-full h-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute bottom-2 left-3 text-white text-xs font-semibold drop-shadow">{alt}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* === DESKTOP: Zoom Parallax (hidden on mobile) === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="hidden md:block w-screen -mx-4 md:-mx-8 lg:-mx-10 mb-20"
      >
        <ZoomParallax images={[
          { src: profileImg, alt: 'Raju Chowdavada' },
          { src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop', alt: 'AI & Machine Learning' },
          { src: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop', alt: 'Backend Engineering' },
          { src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop', alt: 'DSA & Algorithms' },
          { src: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop', alt: 'UI/UX Design' },
          { src: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop', alt: 'Programming Logic' },
          { src: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop', alt: 'Server Infrastructure' }
        ]} />
      </motion.div>

      {/* Timeline Section */}
      <div className="w-full">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10 text-gray-900 dark:text-white">My Journey</h3>
        <div className="h-1 w-20 mx-auto bg-blue-500 rounded-full mb-16"></div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default About;
