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
    { title: "Profile", icon: User, href: "#profile" },
    { title: "Education", icon: GraduationCap, href: "#education" },
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
    <header className={`navbar ${scrolled || isMobileMenuOpen ? 'scrolled bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-white/10' : 'bg-transparent'} fixed w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="logo text-2xl font-bold text-gray-900 dark:text-white z-50 relative">Portfolio</a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <ExpandableTabs
            tabs={tabs}
            onChange={handleTabChange}
            activeColor="text-gray-900 dark:text-white"
            className="border-gray-200 dark:border-white/10 bg-white/60 dark:bg-[#09090b]/60 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          />

          <div className="flex items-center gap-2 ml-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            {/* Robot Toggle Button */}
            <button
              className={`robot-toggle flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white transition-all ${robotActive ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
              onClick={toggleRobot}
              aria-label="Toggle Robot"
            >
              <FaRobot className="text-gray-900 dark:text-white" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">{robotActive ? 'Hide' : 'Show'} Robot</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="md:hidden flex items-center gap-4 z-50 relative">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-900 dark:text-white focus:outline-none"
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
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 shadow-2xl md:hidden flex flex-col p-4 gap-2 max-h-[80vh] overflow-y-auto"
          >
            {tabs.filter(t => t.type !== 'separator').map((tab, index) => (
              <button
                key={index}
                onClick={() => handleLinkClick(tab.href)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
              >
                <tab.icon className="w-5 h-5 text-gray-900 dark:text-white" />
                <span className="text-gray-900 dark:text-white font-medium">{tab.title}</span>
              </button>
            ))}

            <div className="h-px bg-gray-200 dark:bg-gray-800 my-2" />

            <button
              className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left ${robotActive ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
              onClick={() => {
                toggleRobot();
                // Optionally close menu or keep it open to see toggle state
              }}
            >
              <FaRobot className="w-5 h-5 text-gray-900 dark:text-white" />
              <span className="text-gray-900 dark:text-white font-medium">{robotActive ? 'Hide 3D Robot' : 'Show 3D Robot'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;