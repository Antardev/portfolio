// src/components/Hero.jsx
import { motion } from 'framer-motion';
import Particles from './Particles';

const Hero = () => {
  const skills = ['Laravel', 'Vue.js', 'React', 'PHP', 'MySQL', 'Bootstrap', 'REST API', 'Docker'];

  return (
    <section id="home" className="position-relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '80px' }}>
      {/* Effets de fond */}
      <div className="position-absolute top-0 start-0 w-100 h-100"
           style={{
             background: 'radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.15) 0%, transparent 50%)',
           }}>
      </div>
      
      <Particles />
      
      <div className="container position-relative z-2 h-100 d-flex align-items-center">
        <div className="row align-items-center">
          {/* Texte */}
          <motion.div 
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="badge bg-primary bg-opacity-20 text-primary mb-3 px-3 py-2 rounded-pill d-inline-block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <i className="bi bi-stars me-2"></i>
              Développeur Full-Stack
            </motion.div>
            
            <h1 className="display-1 fw-bold mb-4">
              Bonjour, je suis <span className="gradient-text">Antar GALIBI</span>
            </h1>
            
            <p className="lead mb-4" style={{ color: '#94a3b8' }}>
              Ingénieur logiciel spécialisé en systèmes informatiques, alliant expertise 
              développement Laravel et connaissance terrain des infrastructures. Je crée 
              des solutions web performantes et scalables.
            </p>
            
            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <motion.a 
                href="#projects"
                className="btn btn-gradient px-4 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-grid-3x3-gap me-2"></i>
                Voir mes projets
              </motion.a>
              
              <motion.a 
                href="#contact"
                className="btn btn-outline-gradient px-4 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="bi bi-chat-dots me-2"></i>
                Me contacter
              </motion.a>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="d-flex gap-3">
              {[
                { icon: 'bi-github', href: '#', color: 'text-light' },
                { icon: 'bi-linkedin', href: '#', color: 'text-primary' },
                { icon: 'bi-twitter', href: '#', color: 'text-info' },
                { icon: 'bi-envelope', href: '#contact', color: 'text-warning' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`fs-4 ${social.color} bg-dark-light rounded-circle p-2`}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Carte profil animée */}
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card card-hover border-0 overflow-hidden pulse-glow"
                 style={{ borderRadius: '20px' }}>
              <div className="card-body p-0">
                {/* Header de la carte */}
                <div className="p-4" style={{ 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))' 
                }}>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-white p-2 me-3">
                      <i className="bi bi-person-fill text-primary fs-3"></i>
                    </div>
                    <div>
                      <h5 className="text-white mb-0">Antar GALIBI</h5>
                      <p className="text-white-50 mb-0">Ingénieur Logiciel</p>
                    </div>
                  </div>
                </div>
                
                {/* Contenu de la carte */}
                <div className="p-4">
                  <h6 className="mb-3 text-white">
                    <i className="bi bi-gear me-2 text-primary"></i>
                    Stack Technique
                  </h6>
                  
                  <div className="mb-4">
                    {skills.map((skill, index) => (
                      <motion.span 
                        key={skill}
                        className="badge bg-dark bg-opacity-50 border border-primary border-opacity-25 me-2 mb-2 px-3 py-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(102, 126, 234, 0.2)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="row text-center">
                    <div className="col-4">
                      <div className="p-3 rounded" style={{ background: 'rgba(102, 126, 234, 0.1)' }}>
                        <h3 className="mb-0 gradient-text fw-bold">10+</h3>
                        <small className='mb-0 gradient-text fw-bold'>Projets</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-3 rounded" style={{ background: 'rgba(118, 75, 162, 0.1)' }}>
                        <h3 className="mb-0 gradient-text fw-bold">100%</h3>
                        <small className='gradient-text fw-bold'>Satisfaction</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-3 rounded" style={{ background: 'rgba(251, 191, 36, 0.1)' }}>
                        <h3 className="mb-0 gradient-text fw-bold">24/7</h3>
                        <small className='gradient-text fw-bold'>Support</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="text-decoration-none">
          <div className="d-flex flex-column align-items-center">
            <span className="text-light mb-2">Scroll</span>
            <div className="border border-primary rounded-pill p-1">
              <i className="bi bi-chevron-down text-primary d-block"></i>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;