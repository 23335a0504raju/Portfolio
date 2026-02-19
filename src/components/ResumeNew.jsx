import { Mail, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import profile from '../assets/pro.jpeg';
import { useTheme } from '../context/ThemeContext';

const ResumeNew = () => {
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
    { company: 'Reaidy.io', role: 'Full Stack Developer', period: 'Present' },
    { company: 'Edu Skills', role: 'AIML Developer Intern', period: 'Jul 2025 – Sep 2025' },
    { company: 'Pit Solutions', role: 'Frontend Development Intern', period: 'Dec 2022 – May 2023' },
  ];

  const education = [
    { degree: 'B.Tech in Computer Science and Engineering', school: 'MVGR College of Engineering', period: '2023-2026' },
    { degree: 'Diploma in Computer Engineering', school: 'Government Polytechnic Anakapalli', period: '2020-2023' },
    { degree: 'Secondary School Education', school: 'Z.P. High School', period: '2019-2020' },
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
    { name: 'Java', logo: 'Ja' }, { name: 'Python', logo: 'Py' },
    { name: 'MERN', logo: 'Me' }, { name: 'React', logo: 'Re' },
    { name: 'Node', logo: 'No' }, { name: 'Django', logo: 'Dj' },
    { name: 'AWS', logo: 'Aw' }, { name: 'Docker', logo: 'Do' },
    { name: 'Git', logo: 'Gi' }, { name: 'SQL', logo: 'DB' },
    { name: 'Mongo', logo: 'Mg' }, { name: 'TS', logo: 'Ts' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-300">

      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-white dark:via-zinc-900/10 dark:to-black" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{ backgroundImage: `radial-gradient(${theme === 'dark' ? '#fff' : '#000'} 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* --- LEFT SIDEBAR (STICKY) --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-10 space-y-6">

            <div className="bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 shadow-xl animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-700">
              <div className="aspect-square rounded-3xl overflow-hidden mb-8 border border-gray-100 dark:border-white/5 shadow-inner">
                <img src={profile} alt="Profile" className="w-full h-full object-cover" />
              </div>

              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-3xl font-black tracking-tighter uppercase leading-none">
                  CHOWDAVADA <span className="text-blue-600 dark:text-emerald-400">RAJU</span>
                </h1>
                <p className="text-blue-500 dark:text-emerald-500/80 text-[10px] font-mono tracking-[0.4em] uppercase font-bold">
                  Full Stack Engineer
                </p>
              </div>

              <div className="mt-8 space-y-4 pt-8 border-t border-gray-100 dark:border-white/5">
                <div className="space-y-3">
                  <a href="mailto:smilyraju8464@gmail.com" className="flex items-center gap-3 text-sm text-gray-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">
                    <Mail size={16} /> smilyraju8464@gmail.com
                  </a>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-zinc-400">
                    <MapPin size={16} /> Visakhapatnam, AP
                  </div>
                </div>

                <div className="flex gap-3 justify-center lg:justify-start">
                  {[FaGithub, FaLinkedin, SiLeetcode, SiCodechef].map((Icon, i) => (
                    <button key={i} className="w-11 h-11 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-blue-600 dark:hover:text-emerald-400 border border-gray-200 dark:border-white/5 transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>

                <button className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-black text-xs rounded-2xl hover:bg-blue-600 dark:hover:bg-emerald-400 transition-all uppercase tracking-widest shadow-xl">
                  Download CV
                </button>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-8 animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-700 delay-100">
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">Core Stack</h3>
              <div className="grid grid-cols-4 gap-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="aspect-square bg-gray-50 dark:bg-black/40 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-white/5 hover:border-blue-500 dark:hover:border-emerald-500/50 transition-all group">
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-blue-600 dark:group-hover:text-emerald-400">{tech.logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT --- */}
          <div className="lg:col-span-8 space-y-8">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              {[
                { label: "DSA Mastery", value: "450+" },
                { label: "Full Stack", value: "12+" },
                { label: "Years Coding", value: "2+" },
                { label: "Professional", value: "8+" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/80 dark:bg-zinc-900/30 backdrop-blur-md border border-gray-200 dark:border-white/10 p-6 rounded-[2rem] text-center">
                  <div className="text-3xl font-black">{stat.value}</div>
                  <div className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <section className="bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-2xl font-black tracking-tighter uppercase">Experience</h2>
                <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
              </div>
              <div className="space-y-12">
                {workExperience.map((job, index) => (
                  <div key={index} className="relative pl-10 border-l border-gray-200 dark:border-white/10 group">
                    <div className="absolute w-2 h-2 bg-gray-300 dark:bg-zinc-700 rounded-full -left-[5px] top-2 group-hover:bg-emerald-500 transition-all" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">{job.role}</h3>
                      <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{job.period}</span>
                    </div>
                    <p className="text-blue-600 dark:text-emerald-600 font-bold text-xs uppercase tracking-wider mb-4">{job.company}</p>
                    <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed max-w-2xl">
                      Contributed to core development cycles, optimized frontend performance, and collaborated with cross-functional teams to deliver high-quality software solutions.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-2xl font-black tracking-tighter uppercase">Proficiency</h2>
                <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-xs font-mono text-emerald-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-black/60 rounded-full overflow-hidden border border-gray-200 dark:border-white/5">
                      <div className="h-full bg-blue-600 dark:bg-emerald-500 transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white dark:bg-zinc-900/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-2xl font-black tracking-tighter uppercase">Education</h2>
                <div className="h-px flex-1 bg-gray-200 dark:bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div key={index} className="p-6 rounded-3xl bg-gray-50 dark:bg-black/40 border border-gray-100 dark:border-white/5">
                    <h3 className="text-lg font-bold mb-2 leading-tight">{edu.degree}</h3>
                    <p className="text-sm text-gray-500 dark:text-zinc-400 mb-4">{edu.school}</p>
                    <span className="text-[10px] font-mono text-emerald-500">{edu.period}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>

      <style>{`
        .animate-visible { opacity: 1 !important; transform: translateY(0) translateX(0) !important; }
      `}</style>
    </div>
  );
};

export default ResumeNew;