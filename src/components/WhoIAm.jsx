import React from 'react';
import profilepic from "./../assets/profilePic.png";
import cv from "./../assets/cv.pdf";

//State

//Comportement
const WhoIAm = () => {
  //Render
  return (
    <section className="whoIAm" id="whoIAmSection">
      <div className="sectionTitle">
        <h2>Qui suis-je?</h2>
      </div>
      <div className="presentationContainer">
        <div className="picSection">
          <img src={profilepic} alt="" className="profilePic" />
        </div>
        <div className="presentation">
          <div className="presentationP">
            <p>
              Hello! Vous êtes au bon endroit pour connaître mon parcours, mes
              projets, mes hard skills, et en savoir plus sur moi-même! <br />
              Je m'appelle Alexandre, j'ai 30 ans et je vis dans le Nord-Pas-Calais en
              France. <br /> En 2023, j'ai décidé d'exércer un métier
              passionnant, porteur et innovant : celui de développeuse web!
              <br /> Après ma formation chez Openclassrooms pour
              confirmer mon projet professionnel, j'ai effectué la formation de
              développeur web chez OpenClassrooms. Je viens tout juste d'être
              diplômée! <br />
              <br /> Je suis actuellement à la recherche d'offres dans la région
              Lilloise ainsi que à Lens. (Longwy, Metz, Nancy et le Sud du
              Luxembourg.) Je suis passionnée par les nouvelles technologies,
              l'astronomie, les jeux vidéos, les plantes et la
              pâtisserie (lorsque cela se termine bien...)
              <br />
              <br />
              Je suis de nature curieuse, j’aime apprendre et voir des projets
              arriver à terme. <br /> <br />Bonne visite!
            </p>
          </div>
          <div className="downloadCVButton">
            <a href={cv} download className="downloadCVLink">
              Téléchargez mon CV!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIAm;
