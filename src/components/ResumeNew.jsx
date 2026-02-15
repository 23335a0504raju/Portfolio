import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import profile from '../assets/profile.jpg';
import { useTheme } from '../context/ThemeContext';

const ResumeNew = () => {
  const navigate = useNavigate();
  const observerRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const workExperience = [
    { company: 'Edu Skills', role: 'AIML Developer Intern', period: 'Jul 2025 – Sep 2025' },
    { company: 'Pit Solutions', role: 'Frontend Development Intern', period: 'Dec 2022 – May 2023' },
  ];

  const education = [
    { degree: 'B.Tech in Computer Science and Engineering', school: 'MVGR College of Engineering', period: '2023-2026' },
    { degree: 'Diploma in Computer Engineering', school: 'Government Polytechnic Anakapalli', period: '2020-2023' },
  ];

  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'MERN Stack', level: 85 },
    { name: 'React.js', level: 88 },
    { name: 'TypeScript', level: 80 },
    { name: 'Django REST', level: 80 },
    { name: 'SQL/NoSQL', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'Supabase', level: 75 },
    { name: 'AWS Cloud', level: 75 },
    { name: 'Data Structures', level: 90 },
    { name: 'Machine Learning', level: 70 },
    { name: 'Project Management', level: 80 },
    { name: 'Web Applications', level: 85 },
    { name: 'API Handling', level: 90 },
  ];

  const techStack = [
    { name: 'Java', logo: 'Ja' },
    { name: 'Python', logo: 'Py' },
    { name: 'MERN', logo: 'Me' },
    { name: 'React', logo: 'Re' },
    { name: 'Node', logo: 'No' },
    { name: 'Django', logo: 'Dj' },
    { name: 'AWS', logo: 'Aw' },
    { name: 'Docker', logo: 'Do' },
    { name: 'Git', logo: 'Gi' },
    { name: 'SQL', logo: 'DB' },
    { name: 'Mongo', logo: 'Mg' },
    { name: 'TS', logo: 'Ts' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white selection:bg-gray-400 dark:selection:bg-gray-600 selection:text-black dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      {/* Main Container */}
      <div className="relative min-h-screen flex flex-col">

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-black dark:via-[#0a0a0a] dark:to-black transition-colors duration-300" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
                           linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        {/* Hero Header */}
        <header className="relative z-10 pt-20 pb-8 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 dark:text-white uppercase tracking-tight leading-[0.9] sm:leading-[0.85]">
                Chowdavada
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-200 dark:text-white/40 uppercase tracking-tight leading-[0.9] sm:leading-[0.85] mt-2 transition-colors duration-300">
                Raju
              </h2>
              <p className="text-blue-600 dark:text-[#00ff88] text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mt-6 font-medium font-sans">
                Software Engineer & Developer
              </p>
            </div>
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="relative z-10 flex-1 px-4 sm:px-6 lg:px-12 pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column - Experience */}
              <div className="lg:col-span-3 space-y-6 animate-on-scroll opacity-0 -translate-x-8 transition-all duration-700 delay-200">
                {/* Creative Journey / Experience */}
                <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-blue-600 dark:text-[#00ff88] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                    Creative Journey
                  </h3>
                  <div className="space-y-5">
                    {workExperience.map((job, index) => (
                      <div
                        key={index}
                        className="group border-l-2 border-gray-200 dark:border-white/10 hover:border-blue-500 dark:hover:border-[#00ff88] pl-4 transition-all duration-300"
                      >
                        <p className="text-gray-900 dark:text-white font-semibold text-sm leading-tight">{job.role}</p>
                        <p className="text-gray-500 dark:text-white/60 text-xs mt-1">{job.company}</p>
                        <p className="text-gray-400 dark:text-white/40 text-[10px] uppercase tracking-wider mt-1">{job.period}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Card */}
                <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 transition-colors shadow-sm dark:shadow-none">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-500 dark:bg-[#00ff88] rounded-lg flex items-center justify-center">
                      <span className="text-white dark:text-black font-black text-lg">Be</span>
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-semibold text-sm">Portfolio</p>
                      <p className="text-blue-600 dark:text-[#00ff88] text-[10px] uppercase tracking-wider">View Projects</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/#portfolio')}
                    className="text-gray-500 dark:text-white/40 text-xs hover:text-blue-600 dark:hover:text-[#00ff88] transition-colors flex items-center gap-1 mt-3"
                  >
                    View My Work <ExternalLink className="w-3 h-3" />
                  </button>
                </div>

                {/* Tech Stack Grid */}
                <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-blue-600 dark:text-[#00ff88] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    Tech Arsenal
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="aspect-square bg-gray-100 dark:bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-100 dark:hover:bg-[#00ff88]/20 transition-all cursor-pointer group border border-gray-200 dark:border-white/5 hover:border-blue-500/50 dark:hover:border-[#00ff88]/50"
                        title={tech.name}
                      >
                        <span className="text-gray-400 dark:text-white/50 font-bold text-xs group-hover:text-blue-600 dark:group-hover:text-[#00ff88] transition-colors">
                          {tech.logo}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center Column - Portrait */}
              <div className="lg:col-span-6 flex flex-col items-center gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
                <div className="relative w-full max-w-sm sm:max-w-md">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-blue-500/10 dark:bg-[#00ff88]/5 rounded-3xl blur-3xl transform scale-90" />

                  {/* Image Container */}
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-200 dark:bg-gray-900 border border-gray-300 dark:border-white/10 shadow-2xl">
                    <img
                      src={profile}
                      alt="Chowdavada Raju"
                      className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-40 dark:opacity-60" />

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex justify-center gap-4">
                        <a
                          href="mailto:smilyraju8464@gmail.com"
                          className="w-12 h-12 bg-blue-500 dark:bg-[#00ff88] rounded-full flex items-center justify-center text-white dark:text-black hover:scale-110 transition-transform shadow-lg shadow-blue-500/20 dark:shadow-[#00ff88]/20"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href="tel:+916281924785"
                          className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
                        >
                          <Phone className="w-5 h-5" />
                        </a>
                        <div
                          className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white"
                          title="Visakhapatnam, AP"
                        >
                          <MapPin className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Education & Skills */}
              <div className="lg:col-span-3 space-y-6 animate-on-scroll opacity-0 translate-x-8 transition-all duration-700 delay-400">

                {/* Education */}
                <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-gray-900 dark:text-white text-sm font-bold tracking-wider uppercase mb-6">
                    Education
                  </h3>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="group">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-500 dark:text-[#00ff88] mt-1 text-xs">▪</span>
                          <div>
                            <p className="text-gray-800 dark:text-white/90 text-xs font-medium leading-tight">{edu.degree}</p>
                            <p className="text-gray-500 dark:text-white/50 text-[10px] mt-1">{edu.school}</p>
                            <p className="text-blue-600/80 dark:text-[#00ff88]/60 text-[10px] mt-0.5">{edu.period}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-blue-600 dark:text-[#00ff88] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                    Skill Level
                  </h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index} className="group">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-gray-700 dark:text-white/70 text-xs font-medium">{skill.name}</span>
                          <span className="text-blue-600 dark:text-[#00ff88] text-[10px]">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 dark:from-[#00ff88] dark:to-[#00cc6a] rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:group-hover:shadow-[0_0_10px_rgba(0,255,136,0.5)]"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info Mini */}
                <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-blue-600 dark:text-[#00ff88] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                    Connect
                  </h3>
                  <div className="space-y-2 text-xs">
                    <p className="text-gray-600 dark:text-white/60 hover:text-blue-600 dark:hover:text-[#00ff88] transition-colors cursor-pointer">
                      smilyraju8464@gmail.com
                    </p>
                    <p className="text-gray-600 dark:text-white/60">+91 6281924785</p>
                    <p className="text-gray-600 dark:text-white/60">Visakhapatnam, AP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Stats & About */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-500">

              {/* Stats / Creative DNA */}
              <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 transition-colors shadow-sm dark:shadow-none">
                <h3 className="text-blue-600 dark:text-[#00ff88] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                  Creative DNA
                </h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-5xl font-black text-gray-900 dark:text-white mb-2">450+</p>
                    <p className="text-gray-500 dark:text-white/40 text-xs uppercase tracking-wider">Problems Solved</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black text-gray-900 dark:text-white mb-2">6+</p>
                    <p className="text-gray-500 dark:text-white/40 text-xs uppercase tracking-wider">Full Stack Apps</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                  <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">
                    Intern At Reaidy.io skilled in Java, Python, React.js, Django REST, SQL/NoSQL, and Cloud (AWS, Vercel, Render).
                    Strong foundation in data structures, algorithms, and computer science fundamentals.
                  </p>
                </div>
              </div>

              {/* Mega Clients / Tech Partners */}
              <div className="bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 transition-colors shadow-sm dark:shadow-none">
                <h3 className="text-blue-600 dark:text-[#00ff88] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                  Mega Clients
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {['GitHub', 'LinkedIn', 'LeetCode', 'CodeChef'].map((client, index) => (
                    <div key={index} className="aspect-square bg-gray-100 dark:bg-white/5 rounded-xl flex items-center justify-center border border-gray-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-[#00ff88]/30 hover:bg-blue-50 dark:hover:bg-white/10 transition-all group cursor-pointer">
                      <span className="text-gray-400 dark:text-white/30 text-[10px] font-bold uppercase text-center group-hover:text-blue-600 dark:group-hover:text-[#00ff88] transition-colors">
                        {client}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Full Stack', 'Machine Learning', 'Cloud', 'DSA', 'API Design'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-500 dark:text-white/50 text-[10px] uppercase tracking-wider hover:border-blue-500 dark:hover:border-[#00ff88] hover:text-blue-600 dark:hover:text-[#00ff88] transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-gray-200 dark:border-white/5 mt-12 bg-white/50 dark:bg-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">Chowdavada Raju</h3>
                <p className="text-blue-600 dark:text-[#00ff88] text-xs uppercase tracking-[0.2em] mt-1">Software Engineer</p>
              </div>

              <p className="text-gray-500 dark:text-white/30 text-xs text-center md:text-left">
                © 2025 Chowdavada Raju. All rights reserved.
              </p>

              <div className="flex items-center gap-3">
                <a href="https://github.com/23335a0504raju" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/40 hover:bg-black dark:hover:bg-[#00ff88] hover:text-white dark:hover:text-black hover:border-black dark:hover:border-[#00ff88] transition-all">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/in/raju-chowdavada-06b734347" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/40 hover:bg-[#0077b5] dark:hover:bg-[#00ff88] hover:text-white dark:hover:text-black hover:border-[#0077b5] dark:hover:border-[#00ff88] transition-all">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href="https://leetcode.com/u/Raju_Ch8464/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/40 hover:bg-[#ffa116] dark:hover:bg-[#00ff88] hover:text-white dark:hover:text-black hover:border-[#ffa116] dark:hover:border-[#00ff88] transition-all">
                  <SiLeetcode className="w-4 h-4" />
                </a>
                <a href="https://www.codechef.com/users/raju_ch8464" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-white/40 hover:bg-[#5b4638] dark:hover:bg-[#00ff88] hover:text-white dark:hover:text-black hover:border-[#5b4638] dark:hover:border-[#00ff88] transition-all">
                  <SiCodechef className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        .animate-visible {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0, 255, 136, 0.3); border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0, 255, 136, 0.5); }
      `}</style>
    </div>
  );
};

export default ResumeNew;