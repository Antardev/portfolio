// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Développement Web',
    'Applications Laravel',
    'APIs REST',
    'Sites Vue.js/React',
    'Consultation DevOps',
    'Maintenance & Support'
  ];

  return (
    <footer className="bg-dark-light pt-5">
      <div className="container">
        <div className="row g-5">
          {/* Colonne Logo & Description */}
          <div className="col-lg-4">
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle bg-gradient p-2 me-3"
                     style={{ 
                       background: 'linear-gradient(135deg, var(--primary), var(--secondary))'
                     }}>
                  <i className="bi bi-code-slash text-white fs-4"></i>
                </div>
                <h3 className="h4 fw-bold mb-0 gradient-text">Antar GALIBI</h3>
              </div>
              <p className="text-light mb-4">
                Ingénieur logiciel passionné par la création de solutions web innovantes 
                et performantes. Spécialisé en développement Laravel et architecture scalable.
              </p>
              <div className="d-flex gap-3">
                {['bi-github', 'bi-linkedin', 'bi-twitter', 'bi-instagram'].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-light bg-dark rounded-circle p-2"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <i className={`bi ${icon}`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Colonne Liens rapides */}
          <div className="col-lg-2 col-md-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h5 className="text-white fw-bold mb-4">Navigation</h5>
              <ul className="list-unstyled">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.href}
                      className="text-light text-decoration-none hover-text-primary"
                      style={{ transition: 'color 0.3s' }}
                    >
                      <i className="bi bi-chevron-right me-2 text-primary"></i>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Colonne Services */}
          <div className="col-lg-3 col-md-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h5 className="text-white fw-bold mb-4">Services</h5>
              <ul className="list-unstyled">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    className="mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-light">
                      <i className="bi bi-check-circle me-2 text-primary"></i>
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Colonne Newsletter */}
          <div className="col-lg-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h5 className="text-white fw-bold mb-4">Restons connectés</h5>
              <p className="text-light mb-4">
                Recevez mes dernières actualités et conseils en développement.
              </p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control bg-dark border-primary border-end-0 text-light" 
                  placeholder="Votre email"
                  aria-label="Email"
                />
                <motion.button 
                  className="btn btn-primary border-start-0"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-send"></i>
                </motion.button>
              </div>
              <p className="small text-light opacity-75">
                <i className="bi bi-shield-check me-1"></i>
                Pas de spam. Désabonnez-vous à tout moment.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-5 border-light opacity-10" />

        {/* Copyright & Back to top */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <p className="text-light mb-0">
              © {currentYear} Antar GALIBI. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <motion.a 
              href="#home"
              className="btn btn-outline-primary btn-sm"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-arrow-up me-1"></i>
              Retour en haut
            </motion.a>
          </div>
        </div>

        {/* Technologies badges */}
        <div className="mt-4 text-center">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {['Laravel', 'Vue.js', 'React', 'PHP', 'MySQL', 'Bootstrap', 'Git', 'Docker'].map((tech, index) => (
              <motion.span
                key={tech}
                className="badge bg-dark bg-opacity-50 px-3 py-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;