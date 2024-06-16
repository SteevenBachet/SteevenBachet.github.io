import React, { useEffect, useState } from 'react';
import '../../styles/parts/portfolio/portfolio.css';
import Carrousel from '../../components/carrousel';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:3000/projects.json');
      const data = await response.json();
      // Ajoutez une logique pour dupliquer les projets
      setProjects([...data, ...data]);
    };
    fetchProjects();
  }, []);

  const projectList = projects.map((project, index) => (
    <div
      key={index}
      className="portfolio__container__item"
      onClick={() => openModal(project)}
    >
      <img
        src={project.images[0]}
        alt={project.title}
        className="portfolio__container__item__image"
      />
      <h3 className="portfolio__container__item__title">{project.title}</h3>
      <p className="portfolio__container__item__description">{project.description}</p>
      <div className="portfolio__container__item__more-info">En savoir plus</div>
    </div>
  ));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (projects.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length / 2 - 1 : prev - 1));
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio__title">PORTFOLIO</h2>
      <div className="portfolio__container">
        <div className="portfolio__container__slider">
          <button className="portfolio__container__slider__button portfolio__container__slider__button--prev" onClick={prevSlide}>
            &#8249;
          </button>
          <div className="portfolio__container__slider__track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {projectList}
          </div>
          <button className="portfolio__container__slider__button portfolio__container__slider__button--next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>

      {selectedProject && (
        <div className="portfolio__modal" onClick={closeModal}>
          <div className="portfolio__modal__content" onClick={(e) => e.stopPropagation()}>
            <span className="portfolio__modal__content__close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <Carrousel selectedProject={selectedProject} />
            <p>{selectedProject.information}</p>
            <ul className="portfolio__modal__content__technology">
              Technologies:
              {selectedProject.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
            {selectedProject.competences && (
              <ul className="portfolio__modal__content__skill">
                Compétences:
                {selectedProject.competences.map((competence, index) => (
                  <li key={index}>{competence}</li>
                ))}
              </ul>
            )}
            {selectedProject.problematique && selectedProject.resolution && (
              <ul className="portfolio__modal__content__problems-resolutions">
                Problématiques et Résolutions:
                {selectedProject.problematique.map((problem, index) => (
                  <li key={index}>
                    <strong>Problématique:</strong> {problem}
                    <br />
                    <strong>Résolution:</strong> {selectedProject.resolution[index]}
                  </li>
                ))}
              </ul>
            )}
            {selectedProject.github && <a href={selectedProject.github}>Lien Github du projet</a>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;