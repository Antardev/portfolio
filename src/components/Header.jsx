// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cvFile from '../assets/CV GALIBI Antar.pdf';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detection de section active
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const logoA= "{ Antardev}";

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-dark bg-dark' : 'navbar-dark'} transition-all`}
         style={{
           backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
           backdropFilter: scrolled ? 'blur(10px)' : 'none',
           transition: 'all 0.3s ease'
         }}>
      <div className="container">
        {/* Logo */}
        <motion.a 
          className="navbar-brand d-flex align-items-center"
          href="#home"
          whileHover={{ scale: 1.05 }}
        >
          <div className="rounded-circle bg-gradient p-2 me-2"
               style={{
                 background: 'linear-gradient(135deg, var(--primary), var(--secondary))'
               }}>
            <i className="bi bi-code-slash text-white"></i>
          </div>
          <span className="fs-4 fw-bold gradient-text">{logoA}</span>
        </motion.a>

        {/* Burger Button */}
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                className="nav-item mx-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a 
                  className={`nav-link position-relative px-3 ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  href={item.href}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.span 
                      className="position-absolute bottom-0 start-0 w-100 h-2 bg-gradient rounded"
                      layoutId="underline"
                      style={{
                        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
            
            {/* Bouton CV */}
            <motion.li className="nav-item ms-3"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}>
              <a href={cvFile} download="CV GALIBI Antar.pdf"
                 className="btn btn-gradient d-flex align-items-center">
                <i className="bi bi-download me-2"></i>
                Télécharger CV
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;