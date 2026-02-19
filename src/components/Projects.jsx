// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import projectImage1 from '../assets/images/MonstagePro.png';
import projectImage2 from '../assets/images/PrepaTamus.png';
import projectImage4 from '../assets/images/portfolio.png';
import projectImage6 from '../assets/images/OptitCredit.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Système Gestion Stagiaires",
      category: "laravel",
      description: "Application web complète pour la gestion des stages avec Laravel et Vue.js",
      technologies: ["Laravel", "Vue.js", "MySQL", "REST API"],
      image: projectImage1,
      link: "https://monstagepro.com/",
      github: "https://github.com/Antardev/GESDECOFI"
    },
    {
      id: 2,
      title: "Plateforme de TEST",
      category: "laravel",
      description: "Plateforme de test en ligne avec intégration Stripe pour les paiements",
      technologies: ["Laravel", "Bootstrap", "Stripe", "MySQL"],
      image: projectImage2,
      link: "https://prepa-tamus.org/",
      github: "#"
    },
    {
      id: 3,
      title: "Dashboard Analytique",
      category: "vue",
      description: "Tableau de bord en temps réel avec graphiques interactifs",
      technologies: ["Vue.js", "Chart.js", "Firebase", "API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      link: "#",
      github: "#"
    },

     {
      id: 4,
      title: "Portfolio Personnel",
      category: "frontend",
      description: "Site portfolio moderne avec animations et design responsive",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Framer Motion", "React", "Vite"],
      image: projectImage4,
      link: "https://portfolio-antardev.vercel.app/",
      github: "https://github.com/Antardev/portfolio"
    },
   
    
    {
      id: 5,
      title: "Site Vitrine Moderne",
      category: "frontend",
      description: "Site vitrine responsive avec animations et SEO optimisé",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      image: projectImage6,
      link: "https://opticredit.site/",
      github: "#"
    },

    {
      id: 6,
      title: "Application Mobile React Native",
      category: "react",
      description: "Application mobile cross-platform pour gestion de tâches",
      technologies: ["React Native", "Redux", "Firebase", "Expo"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      link: "#",
      github: "#"
    }

    
  ];

  const filters = [
    { key: 'all', label: 'Tous les projets' },
    { key: 'laravel', label: 'Laravel' },
    { key: 'vue', label: 'Vue.js' },
    { key: 'react', label: 'React' },
    { key: 'api', label: 'API' },
    { key: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2 className="display-5 fw-bold mb-3">Mes Projets</h2>
          <p className="text-light">Réalisations récentes et projets personnels</p>
        </div>

        {/* Filtres */}
        <div className="mb-5">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                className={`btn ${activeFilter === filter.key ? 'btn-gradient' : 'btn-outline-light'} rounded-pill px-4`}
                onClick={() => setActiveFilter(filter.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="row g-4">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card card-hover h-100 border-0 overflow-hidden">
                <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-dark bg-opacity-75 px-3 py-2">
                      {project.category}
                    </span>
                  </div>
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg- bg-opacity-0 hover-bg-opacity-50 transition-all d-flex align-items-center justify-content-center"
                       style={{ transition: 'all 0.3s ease' }}>
                    <motion.div 
                      className="opacity-0 hover-opacity-100 transition-all"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                    >
                      <a href={project.link} className="btn btn-primary btn-sm me-2">
                        <i className="bi bi-eye me-1"></i> Voir
                      </a>
                      <a href={project.github} className="btn btn-dark btn-sm">
                        <i className="bi bi-github me-1"></i> Code
                      </a>
                    </motion.div>
                  </div>
                </div>
                
                <div className="card-body">
                  <h5 className="card-title fw-bold text-white">{project.title}</h5>
                  <p className="card-text text-light">{project.description}</p>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge bg-primary bg-opacity-10 text-primary me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-2">
                      <a href={project.link} className="text-decoration-none text-primary">
                        <i className="bi bi-link-45deg"></i> Live Demo
                      </a>
                      <a href={project.github} className="text-decoration-none text-light">
                        <i className="bi bi-github"></i> GitHub
                      </a>
                    </div>
                    <motion.button
                      className="btn btn-sm btn-outline-primary"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="bi bi-arrow-right"></i>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="card border-0 card-hover"
               style={{ 
                 background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                 backdropFilter: 'blur(10px)'
               }}>
            <div className="card-body py-5">
              <h3 className="h2 fw-bold mb-3 text-light">Vous avez un projet en tête ?</h3>
              <p className="lead mb-4 text-light">Travaillons ensemble pour le concrétiser !</p>
              <a href="#contact" className="btn btn-gradient px-5 py-3">
                <i className="bi bi-chat-dots me-2"></i>
                Discutons de votre projet
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;