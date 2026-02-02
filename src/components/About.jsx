// src/components/About.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profileImage from '../assets/images/Profile.jpg';

const About = () => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  useEffect(() => {
    const animateCounter = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateCounter(setYearsExperience, 3);
    animateCounter(setProjectsCompleted, 15);
    animateCounter(setHappyClients, 12);
  }, []);

  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2 className="display-5 fw-bold mb-3">À Propos de Moi</h2>
          <p className="text-light">Ingénieur logiciel passionné par l'innovation</p>
        </div>

        <div className="row align-items-center">
          <motion.div 
            className="col-lg-6 mb-5 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="position-relative">
              <div className="card border-0 overflow-hidden"
                   style={{ borderRadius: '20px' }}>
                <div className="card-body p-0">
                  {/* Image de profil */}
                  <div className="position-relative overflow-hidden" 
                       style={{ minHeight: '400px' }}>
                    <img src={profileImage} alt="Antar GALIBI" className="w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
              
              {/* Badge flottant */}
              <motion.div 
                className="position-absolute bottom-0 start-0 translate-middle"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ zIndex: 2 }}
              >
                <div className="bg-gradient rounded-pill p-3 shadow-lg"
                     style={{ background: 'linear-gradient(135deg, var(--accent), #f59e0b)' }}>
                  <i className="bi bi-award-fill text-white fs-4"></i>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="h2 fw-bold mb-4 gradient-text">Transformer les idées en solutions numériques</h3>
            
            <div className="mb-4">
              <p className="lead text-light">
                Ingénieur logiciel spécialisé en systèmes informatiques, je combine expertise 
                en développement Laravel et connaissances terrain des infrastructures pour 
                créer des architectures scalables avec une approche orientée qualité et sécurité.
              </p>
              
              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-primary bg-opacity-10 p-2 me-3">
                      <i className="bi bi-check-circle-fill text-primary"></i>
                    </div>
                    <div>
                      <h6 className="mb-0">Développement Full-Stack</h6>
                      <small className="text-light">Laravel, Vue.js, React</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-secondary bg-opacity-10 p-2 me-3">
                      <i className="bi bi-check-circle-fill text-secondary"></i>
                    </div>
                    <div>
                      <h6 className="mb-0">Architecture Scalable</h6>
                      <small className="text-light">Microservices, APIs REST</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-accent bg-opacity-10 p-2 me-3">
                      <i className="bi bi-check-circle-fill text-accent"></i>
                    </div>
                    <div>
                      <h6 className="mb-0">DevOps & Infrastructure</h6>
                      <small className="text-light">Docker, AWS, Linux</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-success bg-opacity-10 p-2 me-3">
                      <i className="bi bi-check-circle-fill text-success"></i>
                    </div>
                    <div>
                      <h6 className="mb-0">Sécurité & Qualité</h6>
                      <small className="text-light">Tests, CI/CD, Monitoring</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="row g-4 mt-4">
              {[
                { value: yearsExperience, label: 'Années Expérience', icon: 'bi-briefcase', suffix: '+' },
                { value: projectsCompleted, label: 'Projets Réalisés', icon: 'bi-folder-check', suffix: '+' },
                { value: happyClients, label: 'Clients Satisfaits', icon: 'bi-emoji-smile', suffix: '+' },
                { value: 100, label: 'Disponibilité', icon: 'bi-clock', suffix: '%' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="col-6 col-md-3"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center p-3 rounded card-hover">
                    <div className="rounded-circle bg-gradient p-3 mb-3 mx-auto"
                         style={{ 
                           width: '70px', 
                           height: '70px',
                           background: 'linear-gradient(135deg, var(--primary), var(--secondary))'
                         }}>
                      <i className={`bi ${stat.icon} text-white fs-4`}></i>
                    </div>
                    <h3 className="fw-bold gradient-text">{stat.value}{stat.suffix}</h3>
                    <p className="mb-0 text-light">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;