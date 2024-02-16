import React from 'react';
import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from 'scrollreveal';

const Contact = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(sectionRef.current, {
      duration: 1400, // durée de l'animation en ms
      distance: '0px', // distance par rapport à l'élément d'origine
      easing: 'ease-in-out', // easing de l'animation
      interval: 200, // intervalle entre chaque élément animé
      reset: true
    });
  }, []);
  return (
    <section className="contactSection" id="contactSection" ref={sectionRef} >
      <div className="sectionTitle" >
        <h2>Contact</h2>
      </div>
      <div className="contactContainer"  > 
        <a href="https://www.linkedin.com/in/alexandre-de-roeck-%F0%9F%9A%80-660217135/" aria-label="lien linkedin" tabIndex={1}>
          <div className="contactIcons " tabIndex={1}>
            <FontAwesomeIcon icon={faLinkedin} className="icons" />
          </div>
        </a>
        <a href="https://github.com/Alex-Der-coder" aria-label="lien github" >
          <div className="contactIcons"  tabIndex={1}>
            <FontAwesomeIcon icon={faGithub} className="icons" />
          </div>
        </a>
        <a href="mailto: Mr.alexandre.deroeck@gmail.com" aria-label="M'envoyer un mail" >
          <div className="contactIcons" tabIndex={1}>
            <FontAwesomeIcon icon={faEnvelope} className="icons" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
