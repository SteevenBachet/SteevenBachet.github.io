import '../../styles/parts/profil/profil.css';
import photoIdentite from '../../assets/PhotoIdentite.png'


function Profil() {
    return (
      <div className="profil" id="profil">
        <div className="profil__container">
            <h2 className="profil__container__title">PROFIL</h2>
            <div className='profil__container__content'>
                <img className="profil__container__content__image" src={photoIdentite} alt="identité"/>
                <p className='profil__container__content__text'>
                  Bonjour, je m'appelle <span>Steeven Bachet</span> et je suis <span>développeur web junior</span>. Auparavant, j'ai travaillé plusieurs années en tant que <span>technicien de maintenance industrielle</span>, ce qui m'a permis d'acquérir des compétences telles que le diagnostic de pannes, le travail en équipe, l'écoute et l'organisation.   
                </p>
                <p className='profil__container__content__text'>
                  Après avoir créé mes <span>premiers jeux vidéo</span> sur Game Maker, je me suis intéressé au développement informatique en programmant en autodidacte pendant mon temps libre. J'ai ensuite décidé de me reconvertir professionnellement dans le développement web après avoir quitté mon emploi. J'ai suivi une formation de <span>développeur web sur OpenClassroom</span> pendant six mois pour être le mieux équipé possible avant d'entrer dans le monde professionnel.   
                </p>
            </div>
            
        </div>
      </div>
    );
}
  
export default Profil;
  