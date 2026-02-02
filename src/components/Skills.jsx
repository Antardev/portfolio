// src/components/Skills.jsx
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = {
    backend: [
      { name: 'Laravel/PHP', level: 90, icon: 'bi-server' },
      { name: 'REST API', level: 85, icon: 'bi-plug' },
      { name: 'MySQL', level: 80, icon: 'bi-database' },
    ],
    frontend: [
      { name: 'Vue.js', level: 85, icon: 'bi-braces' },
      { name: 'React', level: 75, icon: 'bi-code-slash' },
      { name: 'Bootstrap', level: 90, icon: 'bi-layout-wtf' },
    ],
    outils: [
      { name: 'Git', level: 85, icon: 'bi-git' },
      { name: 'Docker', level: 70, icon: 'bi-box' },
      { name: 'Linux', level: 80, icon: 'bi-terminal' },
    ]
  };

  return (
    <section id="skills" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2 className="display-5 fw-bold mb-3">Compétences Techniques</h2>
          <p className="text-light">Mon expertise technique à votre service</p>
        </div>

        <div className="row g-4">
          {Object.entries(skillsData).map(([category, skills], catIndex) => (
            <motion.div 
              key={category}
              className="col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card card-hover h-100 border-0">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <div className="rounded-circle bg-gradient p-3 me-3"
                         style={{ 
                           background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                           width: '60px',
                           height: '60px'
                         }}>
                      <i className={`bi ${skills[0].icon} text-white fs-4`}></i>
                    </div>
                    <h3 className="h4 mb-0 text-capitalize text-white">{category}</h3>
                  </div>

                  <div className="skill-list">
                    {skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name}
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="d-flex justify-content-between mb-2">
                          <span className="text-light">
                            <i className={`bi ${skill.icon} me-2`}></i>
                            {skill.name}
                          </span>
                          <span className="text-primary fw-bold">{skill.level}%</span>
                        </div>
                        <div className="progress" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                          <motion.div 
                            className="progress-bar rounded"
                            style={{ 
                              background: 'linear-gradient(90deg, var(--primary), var(--secondary))'
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;