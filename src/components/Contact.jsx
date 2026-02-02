// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuration EmailJS (à remplacer avec vos IDs)
      await emailjs.sendForm(
        'service_id', // Remplacez par votre Service ID
        'template_id', // Remplacez par votre Template ID
        formRef.current,
        'user_id' // Remplacez par votre User ID
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Localisation',
      content: 'Benin, Menontin',
      link: 'https://maps.google.com'
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      content: 'antargalibi4@gmail.com',
      link: 'mailto:contact@antarge.dev'
    },
    {
      icon: 'bi-phone',
      title: 'Téléphone',
      content: '+229 01 54 88 07 23',
      link: 'tel:+2290154880723'
    },
    {
      icon: 'bi-clock',
      title: 'Disponibilité',
      content: 'Lun - Ven, 9h - 18h',
      subcontent: 'Réponse sous 24h'
    }
  ];

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2 className="display-5 fw-bold mb-3">Contactez-moi</h2>
          <p className="text-light">Travaillons ensemble sur votre prochain projet</p>
        </div>

        <div className="row g-5">
          {/* Informations de contact */}
          <motion.div 
            className="col-lg-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-5">
              <h3 className="h2 fw-bold mb-4 gradient-text">Parlons de votre projet</h3>
              <p className="lead text-light">
                Vous avez une idée de projet ? Une question sur mes services ?
                N'hésitez pas à me contacter. Je réponds rapidement et serais ravi
                de collaborer avec vous.
              </p>
            </div>

            <div className="row g-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="col-md-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card card-hover h-100 border-0">
                    <div className="card-body p-4 text-center">
                      <div className="rounded-circle bg-gradient p-3 mb-3 mx-auto"
                           style={{ 
                             width: '70px', 
                             height: '70px',
                             background: 'linear-gradient(135deg, var(--primary), var(--secondary))'
                           }}>
                        <i className={`bi ${info.icon} text-white fs-3`}></i>
                      </div>
                      <h5 className="fw-bold mb-2 text-light">{info.title}</h5>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-decoration-none text-light d-block mb-1"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-light mb-1">{info.content}</p>
                      )}
                      {info.subcontent && (
                        <small className="text-light opacity-75">{info.subcontent}</small>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-5">
              <h5 className="fw-bold mb-3">Suivez-moi</h5>
              <div className="d-flex gap-3">
                {[
                  { icon: 'bi-github', label: 'GitHub', color: 'text-light', link: '#' },
                  { icon: 'bi-linkedin', label: 'LinkedIn', color: 'text-primary', link: '#' },
                  { icon: 'bi-twitter', label: 'Twitter', color: 'text-info', link: '#' },
                  { icon: 'bi-instagram', label: 'Instagram', color: 'text-danger', link: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className={`${social.color} bg-dark-light rounded-circle p-3 text-decoration-none`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: '55px', height: '55px' }}
                    title={social.label}
                  >
                    <i className={`bi ${social.icon} fs-5`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div 
            className="col-lg-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card border-0 card-hover">
              <div className="card-body p-4 p-lg-5">
                {submitStatus === 'success' ? (
                  <motion.div 
                    className="text-center py-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="display-1 text-success mb-4">
                      <i className="bi bi-check-circle"></i>
                    </div>
                    <h3 className="h2 fw-bold mb-3">Message envoyé !</h3>
                    <p className="lead text-light mb-4">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus(null)}
                      className="btn btn-gradient"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div 
                    className="text-center py-5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="display-1 text-danger mb-4">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                    <h3 className="h2 fw-bold mb-3">Erreur d'envoi</h3>
                    <p className="lead text-light mb-4">
                      Une erreur est survenue. Veuillez réessayer ou me contacter directement par email.
                    </p>
                    <button 
                      onClick={() => setSubmitStatus(null)}
                      className="btn btn-gradient"
                    >
                      Réessayer
                    </button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-dark-light border-0 text-light"
                            id="name"
                            name="name"
                            placeholder="Votre nom"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ height: '60px' }}
                          />
                          <label htmlFor="name" className="text-primary">
                            <i className="bi bi-person me-2"></i>
                            Votre nom
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control bg-dark-light border-0 text-light"
                            id="email"
                            name="email"
                            placeholder="Votre email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ height: '60px' }}
                          />
                          <label htmlFor="email" className="text-primary">
                            <i className="bi bi-envelope me-2"></i>
                            Votre email
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-dark-light border-0 text-light"
                            id="subject"
                            name="subject"
                            placeholder="Sujet du message"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={{ height: '60px' }}
                          />
                          <label htmlFor="subject" className="text-primary">
                            <i className="bi bi-chat-dots me-2"></i>
                            Sujet du message
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control bg-dark-light border-0 text-light"
                            id="message"
                            name="message"
                            placeholder="Votre message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            style={{ height: '150px', resize: 'none' }}
                          />
                          <label htmlFor="message" className="text-primary">
                            <i className="bi bi-pencil me-2"></i>
                            Votre message
                          </label>
                        </div>
                      </div>
                      
                      <div className="col-12">
                        <motion.button
                          type="submit"
                          className="btn btn-gradient w-100 py-3"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-send me-2"></i>
                              Envoyer le message
                            </>
                          )}
                        </motion.button>
                      </div>
                      
                      <div className="col-12">
                        <p className="text-light opacity-75 small mb-0 text-center">
                          <i className="bi bi-shield-check me-1"></i>
                          Vos informations sont sécurisées. Je ne les partagerai jamais.
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-4 text-center">
              <p className="text-light">
                Vous préférez discuter en direct ? 
                <a href="https://calendly.com/antarge" className="text-primary ms-1">
                  Prenez rendez-vous sur Calendly
                  <i className="bi bi-arrow-right ms-1"></i>
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;