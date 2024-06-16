import React, { useState, useEffect } from 'react';
import '../../styles/components/nav/nav.css';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = (e) => {
        if (menuOpen && !e.target.closest('.nav__container') && !e.target.closest('.menu-hamburger')) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener('click', closeMenu);
        } else {
            document.removeEventListener('click', closeMenu);
        }
        
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, [menuOpen]);

    return (
        <nav className='nav'>   
            <div className='nav__container'>
                <div className="nav__container__logo">
                    SB
                </div>
                
                <ul className={`nav__container__list ${menuOpen ? 'active' : ''}`}>
                    <li className="nav__container__list__item">
                        <a href="#header" onClick={() => setMenuOpen(false)}>ACCUEIL</a>
                    </li>
                    <li className="nav__container__list__item">
                        <a href="#profil" onClick={() => setMenuOpen(false)}>PROFIL</a>
                    </li>
                    <li className="nav__container__list__item">
                        <a href="#skills" onClick={() => setMenuOpen(false)}>COMPÉTENCES</a>
                    </li>
                    <li className="nav__container__list__item">
                        <a href="#portfolio" onClick={() => setMenuOpen(false)}>PORTFOLIO</a>
                    </li>
                    <li className="nav__container__list__item">
                        <a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a>
                    </li>
                </ul>

                <div className="nav__container__menu-hamburger" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </nav>
    );
}

export default Nav;