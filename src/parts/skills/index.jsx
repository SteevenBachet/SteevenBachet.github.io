import '../../styles/parts/skills/skills.css';

function Skills() {
    return (
        <div className="skills" id="skills">
            <h2 className='skills__title'>COMPETENCES</h2>
            <div className='skills__container'>
                <div className='skills__container__item'>
                    <i className="fa-brands fa-html5"></i>
                    <p className='skills__container__item__title'>Front-end</p>
                    <ul className='skills__container__item__list'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='skills__container__item'>
                    <i className="fa-solid fa-database"></i>
                    <p className='skills__container__item__title'>Back-end</p>
                    <ul className='skills__container__item__list'> 
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>Création et utilisation API</li>    
                    </ul>
                </div>
                <div className='skills__container__item'>
                    <i className="fa-solid fa-wrench"></i>
                    <p className='skills__container__item__title'>Outils</p>
                    <ul className='skills__container__item__list'>
                        <li>ChatGPT</li>
                        <li>npm</li>
                        <li>Github</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
  
export default Skills;
  