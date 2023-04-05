import React from 'react';
import { useRef, useEffect } from 'react';
import { projectsList } from "../datas/projectsList";
import ScrollReveal from 'scrollreveal';


const Projects = () => {
  //State
  //Comportement
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
  //Render
  return (
    <section className="projectsSection" id="projects" ref={sectionRef} >
      <div className="sectionTitle">
        <h2>Mes Projets</h2>
      </div>
      <div className="projectList">
        {projectsList.map((proj) => (
          <a href={proj.link} className="projectGitLink" key={proj.id}>  
            <div className="project" > 
              <div className="projectInfo">
                <h2 className="projectTitle">{proj.name}</h2>
                <img className="projectImg" src={proj.cover} alt=""></img>
                <p className="projectDescription">{proj.description}</p>
              </div>
              <div className="projectTechno">
                {proj.techno.map((tech, index) => (
                  <img
                    className="technos"
                    key={index}
                    src={tech}
                    alt="languages used"
                  ></img>
                  
                ))}
                
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
