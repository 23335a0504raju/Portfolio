import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, FileText, GraduationCap, Home, Mail, Menu, Network, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaMoon, FaRobot, FaSun } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ExpandableTabs } from './ui/expandable-tabs';

const Navbar = ({ robotActive, toggleRobot }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { title: "Home", icon: Home, href: "#home" },
    { title: "About", icon: User, href: "#about" },
    { title: "Journey", icon: GraduationCap, href: "#about" },
    { title: "Resume", icon: FileText, href: "/resume" },
    { type: "separator" },
    { title: "Projects", icon: Briefcase, href: "#portfolio" },
    { title: "Contact", icon: Mail, href: "#contact" },
    { title: "Connect", icon: Network, href: "#connect" },
  ];

  const handleTabChange = (index) => {
    if (index !== null) {
      const tab = tabs[index];
      handleLinkClick(tab.href);
    }
  };

  const handleLinkClick = (href) => {
    setIsMobileMenuOpen(false); // Close mobile menu on click
    if (href) {
      if (href.startsWith('/')) {
        navigate(href);
        return;
      }

      if (location.pathname !== '/') {
        navigate({ pathname: '/', hash: href });
        return;
      }

      // Smooth scroll to the section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled || isMobileMenuOpen ? 'scrolled bg-white/70 dark:bg-[#05070d]/80 backdrop-blur-2xl shadow-[0_10px_40px_rgba(15,23,42,0.12)] border-b border-slate-200/80 dark:border-cyan-400/10' : 'bg-transparent'} fixed w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="logo text-2xl font-black tracking-tight text-slate-900 dark:text-cyan-50 z-50 relative">RAJU.CH</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <ExpandableTabs
            tabs={tabs}
            onChange={handleTabChange}
            activeColor="text-slate-900 dark:text-cyan-50"
            className="border-slate-200 dark:border-cyan-500/20 bg-white/65 dark:bg-[#05070d]/70 backdrop-blur-xl shadow-sm hover:shadow-[0_8px_30px_rgba(2,132,199,0.15)] transition-shadow duration-300"
          />

          <div className="flex items-center gap-2 ml-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition-colors text-slate-900 dark:text-cyan-50"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Robot Toggle Button */}
            <button
              className={`robot-toggle flex items-center gap-2 px-4 py-2 rounded-full border border-slate-300 dark:border-cyan-400/30 hover:border-slate-900 dark:hover:border-cyan-300 transition-all ${robotActive ? 'bg-slate-100 dark:bg-cyan-500/10' : ''}`}
              onClick={toggleRobot}
              aria-label="Toggle Robot"
            >
              <FaRobot className="text-slate-900 dark:text-cyan-100" />
              <span className="text-sm font-medium text-slate-900 dark:text-cyan-100">{robotActive ? 'Hide' : 'Show'} Robot</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex items-center gap-4 z-50 relative">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-cyan-500/10 transition-colors text-slate-900 dark:text-cyan-50"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-900 dark:text-cyan-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} // smooth cubic bezier
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-[#05070d]/95 backdrop-blur-xl border-t border-slate-200 dark:border-cyan-500/20 shadow-2xl md:hidden flex flex-col p-4 gap-2 max-h-[80vh] overflow-y-auto"
          >
            {tabs.filter(t => t.type !== 'separator').map((tab, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(tab.href)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition-colors text-left"
              >
                <tab.icon className="w-5 h-5 text-slate-900 dark:text-cyan-50" />
                <span className="text-slate-900 dark:text-cyan-50 font-medium">{tab.title}</span>
              </button>
            ))}

            <div className="h-px bg-slate-200 dark:bg-cyan-500/20 my-2" />

            <button
              className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-cyan-500/10 transition-colors text-left ${robotActive ? 'bg-slate-100 dark:bg-cyan-500/10' : ''}`}
              onClick={() => {
                toggleRobot();
                // Optionally close menu or keep it open to see toggle state
              }}
            >
              <FaRobot className="w-5 h-5 text-slate-900 dark:text-cyan-50" />
              <span className="text-slate-900 dark:text-cyan-50 font-medium">{robotActive ? 'Hide 3D Robot' : 'Show 3D Robot'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;