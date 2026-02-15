import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Connect from './components/Connect';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import ResumeNew from './components/ResumeNew';
import RobotWrapper from './components/RobotWrapper';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import { DottedSurface } from './components/ui/DottedSurface';
import WelcomeCard from './components/WelcomeCard';
import { RobotProvider } from './context/RobotContext';
import { ThemeProvider } from './context/ThemeContext';
import './styles/App.css';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const [robotActive, setRobotActive] = useState(false);

  const toggleRobot = () => {
    setRobotActive(prev => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <div className="App transition-colors duration-300">
      <ThemeProvider>
        <Router>
          <SmoothScroll />
          <ScrollToTop />
          {/* <DottedSurface /> should be here, but imported above */}

          <RobotProvider>
            <DottedSurface />
            {isLoading ? (
              <div className="loader">
                <div className="loader-spinner"></div>
              </div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  {showWelcome && (
                    <WelcomeCard onClose={handleCloseWelcome} />
                  )}
                </AnimatePresence>

                <Navbar robotActive={robotActive} toggleRobot={toggleRobot} />
                <RobotWrapper robotActive={robotActive} />
                <main className={showWelcome ? 'blur-background' : ''}>

                  <Routes>
                    <Route path="/" element={
                      <main>
                        <Hero />

                        <About />

                        <Portfolio />
                        <Contact />
                        <Connect />
                      </main>
                    } />
                    <Route path="/resume" element={<ResumeNew />} />
                  </Routes>

                  <Footer />
                </main>
              </>
            )}
          </RobotProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;