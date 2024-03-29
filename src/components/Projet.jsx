import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import QRCode from 'qrcode.react';

const Project = ({ proj  }) => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);


  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(proj );

  return (

    <div className={`project ${isFlipped ? 'project-active' : ''}`} key={proj.id}>
      <div className="card-inner">
        <div className="card-front">
        <h2 data-testid="Titleprojet" className="projectTitle"> {proj.name} <FontAwesomeIcon  onClick={toggleQRCode} icon={faQrcode} className="fa-fade" />
          </h2>
          <a href={proj.link} className="projectGitLink">
            <div className="container_img">
              {showQRCode ? (
                <QRCode
                  style={{ width: '68%', height: 'unset' }}
                  value={proj.link}
                />
              ) : (
                <img
                  src={`${proj.cover}`}
                  alt={`${proj.name} - ${proj.description}`}
                  className="kasa"
                  loading="lazy"
                  fetchpriority="low"
                />
              )}
            </div>
          </a>
          <p className="projectDescription">{proj.description}</p>
          <div className="projectTechno" style={{ display: showQRCode  ? 'none' : 'flex' }}>
          {proj.techno.map((tech, index) => (
            <img
              key={index}
              src={tech}
              className="technos"
              loading="lazy"
              fetchpriority="low"
              alt={`Technologie used in this project: ${tech
                .split('/')
                .pop()
                .split('.')[0]}`}
            />
          ))}
           <button data-testid="readmore" className="button_flip" onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
        </div>
        </div>
        <div className="card-back">
          <h2>Contexte :</h2>
          <p>{proj.contexte}</p>
          <p>Voir le repos Git <a href={proj.repos} aria-label="Lien du projet présenter"><FontAwesomeIcon icon={faCodeFork} fade style={{color: "#1e3050",}} /></a></p>
          <button className="button_flip" onClick={handleButtonClick}>
           <p>Read More</p><span aria-hidden="true">
        →
      </span></button>
        </div>
        </div>
    </div>
  );
};

export default Project;