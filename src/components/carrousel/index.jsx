import { useState } from 'react';
import WhiteArrow from '../../assets/WhiteArrow2.png';
import '../../styles/components/carrousel/carrousel.css';

function Carrousel({ selectedProject }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLeftButtonClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  const handleRightButtonClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel">
      <div className="carrousel__container">
        <div className="carrousel__container__images">
          {selectedProject.images.map((image, index) => (
            <img
              key={index}
              className={`carrousel__container__images__image ${
                index === activeIndex ? 'active' : ''
              }`}
              src={image}
              alt="une des images du carrousel"
            />
          ))}
        </div>
        {selectedProject.images.length > 1 && (
          <>
            <button
              className="carrousel__container__buttons button-left"
              onClick={handleLeftButtonClick}
            >
              <img
                className="carrousel__container__buttons__image"
                src={WhiteArrow}
                alt="Flèche de navigation carrousel vers la gauche"
              />
            </button>
            <button
              className="carrousel__container__buttons button-right"
              onClick={handleRightButtonClick}
            >
              <img
                className="carrousel__container__buttons__image"
                src={WhiteArrow}
                alt="Flèche de navigation carrousel vers la droite"
              />
            </button>
          </>
        )}
        <p className="carrousel__container__counter">
          {activeIndex + 1 + '/' + selectedProject.images.length}
        </p>
      </div>
    </div>
  );
}

export default Carrousel;
