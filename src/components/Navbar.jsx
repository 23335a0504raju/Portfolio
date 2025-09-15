import { useEffect, useState } from 'react';
import { FaBars, FaRobot, FaTimes } from 'react-icons/fa';

const Navbar = ({ robotActive, toggleRobot }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#profile' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo">Portfolio</a>
        
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {/* Robot Toggle Button */}
          <button 
            className={`robot-toggle ${robotActive ? 'active' : ''}`}
            onClick={toggleRobot}
            aria-label="Toggle Robot"
          >
            <FaRobot />
            <span>{robotActive ? 'Hide Robot' : 'Show Robot'}</span>
          </button>
        </nav>
        
        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;