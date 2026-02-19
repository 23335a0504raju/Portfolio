import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import profile from '../assets/pro.jpeg';

const ResumeNew = () => {
  const workExperience = [
    { company: 'Reaidy.io', role: 'Full Stack Developer', period: 'Present' },
    { company: 'Edu Skills', role: 'AIML Developer Intern', period: 'Jul 2025 – Sep 2025' },
    { company: 'Pit Solutions', role: 'Frontend Development Intern', period: 'Dec 2022 – May 2023' },
  ];

  const education = [
    { degree: 'B.Tech in Computer Science and Engineering', school: 'MVGR College of Engineering', period: '2023-2026' },
    { degree: 'Diploma in Computer Engineering', school: 'Government Polytechnic Anakapalli', period: '2020-2023' },
  ];

  const skills = [
    { name: 'Java', level: 90 }, { name: 'Python', level: 85 },
    { name: 'MERN Stack', level: 85 }, { name: 'React.js', level: 88 },
    { name: 'SQL/NoSQL', level: 85 }, { name: 'Machine Learning', level: 70 },
    { name: 'API Handling', level: 90 }, { name: 'AWS Cloud', level: 75 },
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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 selection:text-emerald-400">
      
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* --- LEFT SIDEBAR (Sticky Bento) --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 space-y-6">
            
            {/* Profile Card */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden relative group">
              <div className="relative z-10">
                <div className="aspect-square rounded-3xl overflow-hidden mb-8 border border-white/10 shadow-inner">
                  <img 
                    src={profile} 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110" 
                  />
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl font-black tracking-tighter uppercase leading-none">
                    CHOWDAVADA <span className="text-emerald-400">RAJU</span>
                  </h1>
                  <p className="text-emerald-500/80 text-[10px] font-mono tracking-[0.4em] uppercase font-bold">
                    Full Stack Engineer
                  </p>
                </div>

                <div className="mt-8 space-y-4 pt-8 border-t border-white/5">
                  <div className="space-y-3">
                    <a href="mailto:smilyraju8464@gmail.com" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-emerald-400 transition-colors">
                      <Mail size={16} className="text-emerald-500" /> smilyraju8464@gmail.com
                    </a>
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      <MapPin size={16} className="text-emerald-500" /> Visakhapatnam, AP
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {[FaGithub, FaLinkedin, SiLeetcode, SiCodechef].map((Icon, i) => (
                      <button key={i} className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-emerald-500/20 border border-white/5 transition-all">
                        <Icon size={20} />
                      </button>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-white text-black font-black text-xs rounded-2xl hover:bg-emerald-400 transition-all uppercase tracking-[0.2em] shadow-xl active:scale-95">
                    Download CV
                  </button>
                </div>
              </div>
            </div>

            {/* Core Stack Mini Grid */}
            <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-6">Core Stack</h3>
              <div className="grid grid-cols-4 gap-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="aspect-square bg-black/40 rounded-2xl flex items-center justify-center border border-white/5 hover:border-emerald-500/50 transition-all group">
                    <span className="text-[10px] font-black text-zinc-500 group-hover:text-emerald-400">{tech.logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT AREA --- */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Problems", value: "450+" },
                { label: "Projects", value: "12+" },
                { label: "Experience", value: "2y" },
                { label: "Certificates", value: "08" }
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-900/30 backdrop-blur-sm border border-white/10 p-6 rounded-[2rem] text-center group hover:bg-emerald-500/5 transition-all">
                  <div className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">{stat.value}</div>
                  <div className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <section className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-2xl font-black tracking-tighter uppercase">Experience</h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              
              <div className="space-y-12">
                {workExperience.map((job, index) => (
                  <div key={index} className="relative pl-10 border-l border-white/10 hover:border-emerald-500/50 transition-colors group">
                    <div className="absolute w-2 h-2 bg-zinc-700 rounded-full -left-[4.5px] top-2 group-hover:bg-emerald-500 group-hover:shadow-[0_0_10px_#10b981] transition-all" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">{job.role}</h3>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">{job.period}</span>
                    </div>
                    <p className="text-emerald-600 font-bold text-xs uppercase tracking-wider mb-4">{job.company}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                      Developed scalable applications, managed cloud infrastructure, and implemented efficient frontend architectures using the latest tech stack.
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Section */}
            <section className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10">
              <div className="flex items-center gap-6 mb-12">
                <h2 className="text-2xl font-black tracking-tighter uppercase">Proficiency</h2>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">{skill.name}</span>
                      <span className="text-xs font-mono text-emerald-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-emerald-500 transition-all duration-1000 group-hover:shadow-[0_0_15px_#10b981]" 
                        style={{ width: `${skill.level}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeNew;