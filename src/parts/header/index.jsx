import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../../styles/parts/header/header.css';

const TEXTS = [
  'Hello world',
  'Développeur web',
  'Passionné par le code'
];

function Header() {
  return (
    <header className="header" id="header">
      <div className="header__overlay">
        <h1 className="header__overlay__title">Steeven Bachet</h1>
        <div className="header__overlay__text">
          <span>&gt; </span>
          <Typewriter
            words={TEXTS}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;