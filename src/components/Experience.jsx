// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      id: 1,
      title: "Développeur Full-Stack Junior",
      company: "Acces Universel",
      period: "Jan 2026 - Aujourd'hui",
      location: "Benin, Menontin",
      type: "CDD",
      description: "Développement d'applications web modernes et performantes",
      tasks: [
        "Développement d'applications web avec Laravel et Vue.js",
        "Maintenance et refonte de sites vitrines",
        "Collaboration avec l'équipe design et produit",
        "Optimisation des performances et SEO"
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "Docker", "Git"],
      icon: "bi-briefcase"
    },
    {
      id: 2,
      title: "Développeur Laravel Freelance",
      company: "Hdc-Service",
      period: "Mar 2025 - Oct 2025",
      location: "Remote",
      type: "Freelance",
      description: "Développement d'un système de gestion des stagiaires",
      tasks: [
        "Développement d'un système de gestion des stagiaires (Laravel, Vue.js)",
        "Analyse des besoins avec le client et rédaction du cahier des charges",
        "Intégration avec l'API de leur CRM existant",
        "Support technique et documentation utilisateur fournis"
      ],
      technologies: ["Laravel", "Vue.js", "REST API", "MySQL", "Bootstrap"],
      icon: "bi-person-workspace"
    },
    {
      id: 3,
      title: "Technicien Informatique",
      company: "COMTEL-TECHNOLOGIE",
      period: "Dec 2024 - Fev 2025",
      location: "Cadjehoun, Benin",
      type: "Stage",
      description: "Maintenance d'infrastructures réseau et serveurs",
      tasks: [
        "Sertissages de câbles à paire torsadée dans des panneaux de brassages",
        "Installation et paramétrage machines (Caméras, Ordinateurs, Imprimantes)",
        "Intervention physique sur serveurs et équipements réseau en data center",
        "Maintenance préventive et corrective des infrastructures"
      ],
      technologies: ["Réseaux", "Serveurs", "Sécurité", "Hardware", "Linux"],
      icon: "bi-tools"
    }
  ];

  const educations = [
    {
      id: 1,
      degree: "Licence en Génie Informatique et Télécommunication",
      school: "Université Protestante de l'Afrique de l'Ouest (UPAO)",
      period: "Sep 2022 - Juin 2025",
      description: "Spécialité système informatique et logiciel",
      courses: ["Architecture des systèmes", "Réseaux", "Développement Web", "Base de données"],
      icon: "bi-mortarboard"
    },
    {
      id: 2,
      degree: "BAC Scientifique série D",
      school: "CEG SEME-PODJI",
      period: "Juin 2021",
      description: "Mention Bien",
      courses: ["Mathématiques", "Physique", "Sciences de l'ingénieur"],
      icon: "bi-award"
    }
  ];

  return (
    <section id="experience" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2 className="display-5 fw-bold mb-3">Parcours Professionnel</h2>
          <p className="text-light">Mon expérience et ma formation</p>
        </div>

        {/* Tabs Navigation */}
        <div className="mb-5">
          <div className="d-flex justify-content-center">
            <div className="nav nav-pills bg-dark-light rounded-pill p-1" role="tablist">
              <button
                className={`nav-link rounded-pill px-4 py-2 ${activeTab === 'experience' ? 'active bg-gradient' : ''}`}
                onClick={() => setActiveTab('experience')}
                style={{ border: 'none' }}
              >
                <i className="bi bi-briefcase me-2"></i>
                Expérience
              </button>
              <button
                className={`nav-link rounded-pill px-4 py-2 ${activeTab === 'education' ? 'active bg-gradient' : ''}`}
                onClick={() => setActiveTab('education')}
                style={{ border: 'none' }}
              >
                <i className="bi bi-mortarboard me-2"></i>
                Formation
              </button>
              <button
                className={`nav-link rounded-pill px-4 py-2 ${activeTab === 'certifications' ? 'active bg-gradient' : ''}`}
                onClick={() => setActiveTab('certifications')}
                style={{ border: 'none' }}
              >
                <i className="bi bi-award me-2"></i>
                Certifications
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="tab-content">
          {/* Expérience Tab */}
          <div className={`tab-pane fade ${activeTab === 'experience' ? 'show active' : ''}`}>
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="position-relative">
                  {/* Timeline */}
                  <div className="position-absolute start-0 top-0 h-100 d-none d-lg-block"
                       style={{ width: '2px', background: 'linear-gradient(to bottom, var(--primary), var(--secondary))', left: '50px' }}>
                  </div>

                  {experiences.map((exp, index) => (
                    <motion.div 
                      key={exp.id}
                      className="position-relative mb-5 ps-lg-5"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline Dot */}
                      <div className="position-absolute start-0 translate-middle d-none d-lg-block"
                           style={{ 
                             left: '50px', 
                             width: '20px', 
                             height: '20px',
                             background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                             borderRadius: '50%',
                             border: '4px solid var(--dark)'
                           }}>
                      </div>

                      {/* Card */}
                      <div className="card card-hover border-0">
                        <div className="card-body p-4">
                          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start mb-3">
                            <div>
                              <div className="d-flex align-items-center mb-2">
                                <div className="rounded-circle bg-gradient p-2 me-3"
                                     style={{ 
                                       background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                       width: '50px',
                                       height: '50px'
                                     }}>
                                  <i className={`bi ${exp.icon} text-white fs-5`}></i>
                                </div>
                                <div>
                                  <h4 className="h5 fw-bold mb-0 text-white">{exp.title}</h4>
                                  <div className="d-flex flex-wrap align-items-center text-light">
                                    <span className="me-3">
                                      <i className="bi bi-building me-1"></i>
                                      {exp.company}
                                    </span>
                                    <span className="me-3">
                                      <i className="bi bi-geo-alt me-1"></i>
                                      {exp.location}
                                    </span>
                                    <span className="badge bg-primary bg-opacity-25 text-primary">
                                      {exp.type}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-2 mt-lg-0">
                              <span className="badge bg-dark bg-opacity-50 px-3 py-2">
                                <i className="bi bi-calendar me-1"></i>
                                {exp.period}
                              </span>
                            </div>
                          </div>

                          <p className="text-light mb-3">{exp.description}</p>

                          <div className="mb-3">
                            <h6 className="fw-bold mb-2 text-secondary">
                              <i className="bi bi-list-task me-2"></i>
                              Principales responsabilités :
                            </h6>
                            <ul className="list-unstyled">
                              {exp.tasks.map((task, taskIndex) => (
                                <motion.li 
                                  key={taskIndex}
                                  className="mb-2 d-flex align-items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: taskIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <i className="bi bi-check-circle-fill text-primary mt-1 me-2"></i>
                                  <span className="text-light">{task}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h6 className="fw-bold mb-2 text-primary">
                              <i className="bi bi-tools me-2"></i>
                              Technologies utilisées :
                            </h6>
                            <div className="d-flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  className="badge bg-dark bg-opacity-50 border border-primary border-opacity-25 px-3 py-2"
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: techIndex * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Tab */}
          <div className={`tab-pane fade ${activeTab === 'education' ? 'show active' : ''}`}>
            <div className="row">
              {educations.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className="col-md-6 mb-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="card card-hover h-100 border-0">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        <div className="rounded-circle bg-gradient p-3 me-3"
                             style={{ 
                               background: 'linear-gradient(135deg, var(--primary), var(--secondary))'
                             }}>
                          <i className={`bi ${edu.icon} text-white fs-4`}></i>
                        </div>
                        <div>
                          <h4 className="h5 fw-bold">{edu.degree}</h4>
                          <p className="text-primary mb-1">
                            <i className="bi bi-building me-1"></i>
                            {edu.school}
                          </p>
                          <p className="text-light mb-0">
                            <i className="bi bi-calendar me-1"></i>
                            {edu.period}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-light mb-3">{edu.description}</p>
                      
                      <div>
                        <h6 className="fw-bold mb-2">Cours principaux :</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span key={courseIndex} className="badge bg-primary bg-opacity-10 text-primary">
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Tab */}
          <div className={`tab-pane fade ${activeTab === 'certifications' ? 'show active' : ''}`}>
            <div className="text-center py-5">
              <div className="card border-0 card-hover mx-auto" style={{ maxWidth: '600px' }}>
                <div className="card-body p-5">
                  <div className="display-1 text-primary mb-4">
                    <i className="bi bi-award"></i>
                  </div>
                  <h3 className="h2 fw-bold mb-3">Certifications en cours</h3>
                  <p className="lead text-light mb-4">
                    Actuellement en préparation des certifications suivantes :
                  </p>
                  <div className="row g-3">
                    {[
                      { name: "AWS Certified Developer", status: "En cours" },
                      { name: "Laravel Certification", status: "Prévue 2024" },
                      { name: "Vue.js Developer", status: "Planifiée" }
                    ].map((cert, index) => (
                      <div key={index} className="col-md-4">
                        <div className="p-3 rounded bg-dark bg-opacity-25">
                          <h6 className="fw-bold mb-1">{cert.name}</h6>
                          <span className="badge bg-primary">{cert.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-light">
                    <i className="bi bi-info-circle me-1"></i>
                    Les certifications seront ajoutées au fur et à mesure de leur obtention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;