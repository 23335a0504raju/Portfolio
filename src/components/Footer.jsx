import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: '#' },
    { icon: <FaTwitter size={20} />, url: '#' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/raju-chowdavada-06b734347/' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/_lovely__raju_/' },
  ];

  return (
    <footer className="w-full py-8 bg-white/70 dark:bg-[#05070d]/80 text-slate-900 dark:text-cyan-50 mt-auto border-t border-slate-200 dark:border-cyan-500/20 backdrop-blur relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Heading */}
          <div className="relative mb-6 pb-4">
            <h5 className="text-xl font-bold relative z-10">
              Passion for Technology
            </h5>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-sky-600 dark:bg-cyan-300 rounded-full"></div>
          </div>

          <div className="w-full h-px bg-slate-200 dark:bg-cyan-500/20 mb-6"></div>

          <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-lg mx-auto">
            Innovation distinguishes between a leader and a follower. We build solutions that matter and create digital experiences that users love.
          </p>

          <div className="flex space-x-4 mt-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-cyan-500/10 text-slate-600 dark:text-cyan-200 hover:bg-sky-600 hover:text-white dark:hover:bg-cyan-300 dark:hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="mt-8 text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Raju Chowdavada. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;