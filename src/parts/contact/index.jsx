import '../../styles/parts/contact/contact.css';
import React, { useState } from 'react';
import screenCv from '../../assets/screenCv.PNG';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://formspree.io/f/xpzveenl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });
    if (response.ok) {
      setFormState({ name: '', email: '', phone: '', message: '' });
      setStatus('Message envoyé');
    } else {
      setStatus("Erreur d'envoie");
    }
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">CONTACT</h2>
      <div className="contact__container">
        <div className="contact__container__item">
          <form
            className="contact__container__item__form"
            onSubmit={handleSubmit}
          >
            <label>
              Nom:
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Téléphone:
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Envoyer</button>
          </form>
          {status && <p className='contact__container__item__form__message'>{status}</p>}
          <div className="contact__container__item__info">
                <div className="contact__container__item__info__details">
                    <div className="contact__container__item__info__details__detail">
                        <i class="fa-solid fa-envelope"></i>
                        <a href='mailto:steevy72500@gmail.com'>steevy72500@gmail.com</a>
                    </div>
                    <div className="contact__container__item__info__details__detail">
                        <i class="fa-solid fa-phone"></i>
                        <a href='tel:+33652329624'>06 52 32 96 24</a>
                    </div>
                    <div className="contact__container__item__info__details__detail">
                        <i class="fa-solid fa-house"></i>
                        <a href='https://www.google.fr/maps/place/Le+Mans/@47.9818751,0.1133006,12z/data=!3m1!4b1!4m6!3m5!1s0x47e288d214f3aa31:0x69025d4c6a7de07f!8m2!3d48.00611!4d0.199556!16zL20vMDRyNWM?entry=ttu'>LE MANS</a>
                    </div>
                </div>
                <div className="contact__container__item__info__icons">
                    <a className="contact__container__item__info__icons__icon" href="https://github.com/SteevenBachet" target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-github"></i>
                    </a>
                    <a className="contact__container__item__info__icons__icon" href="https://www.linkedin.com/in/steeven-bachet-58046a271/"
                    target="_blank" rel="noopener noreferrer">
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
          </div>
        </div>
        <div className="contact__container__item">
          <div className="contact__container__item__cv">
            <img
              className="contact__container__item__cv__image"
              src={screenCv}
              alt="CV"
            />
            <a class="contact__container__item__cv__button" href="/CV_STEEVEN_BACHET.pdf" download="CV-SteevenBACHET">Telecharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
