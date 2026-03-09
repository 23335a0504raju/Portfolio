import { motion } from 'framer-motion';
import profileImg from '../assets/cover.png';
import { Timeline } from './ui/timeline';
import { ZoomParallax } from './ui/zoom-parallax';

const About = () => {
  const aboutImages = [
    { src: profileImg, alt: 'Raju Chowdavada' },
    { src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2032&auto=format&fit=crop', alt: 'AI & Machine Learning' },
    { src: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop', alt: 'Backend Engineering' },
    { src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop', alt: 'DSA & Algorithms' },
    { src: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop', alt: 'UI/UX Design' },
    { src: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2089&auto=format&fit=crop', alt: 'Programming Logic' },
    { src: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop', alt: 'Server Infrastructure' }
  ];

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
    <section id="about" className="min-h-screen py-16 md:py-20 relative overflow-x-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.12),transparent_38%)]" />
      {/* Hero Section with Accordion */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-14 md:mb-20 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="text-center space-y-6 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.24em] font-semibold text-sky-700 dark:text-cyan-300">About Me</p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-cyan-50 leading-tight"
            >
              Turning ambitious ideas into<br />
              <span className="text-sky-700 dark:text-cyan-300">production-ready digital products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
            >
              I am <span className="font-semibold text-gray-900 dark:text-white">Raju Chowdavada</span>, a passionate Full-Stack Developer and Machine Learning Enthusiast.
              Explore my key skills and areas of expertise below.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Mobile: stable scroll-animated cards. */}
      <div className="md:hidden px-4 mb-14 space-y-4 relative z-10">
        {aboutImages.slice(0, 5).map((image, index) => (
          <motion.div
            key={image.alt}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl"
          >
            <img src={image.src} alt={image.alt} className="w-full h-52 object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold drop-shadow">
              {image.alt}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Desktop: keep advanced parallax animation. */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="hidden md:block w-screen -mx-8 lg:-mx-10 mb-14 md:mb-20"
      >
        <ZoomParallax images={aboutImages} />
      </motion.div>

      {/* Timeline Section */}
      <div className="w-full relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-10 text-slate-900 dark:text-cyan-50">My Journey</h3>
        <div className="h-1 w-20 mx-auto bg-sky-600 dark:bg-cyan-300 rounded-full mb-16"></div>
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default About;
