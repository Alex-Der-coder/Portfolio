import React, { useRef, useEffect } from 'react';
import Video from '../assets/computer.mp4';

const VideoPlayer = () => {
  // Utilisez useRef pour obtenir une référence à l'élément vidéo
  const videoRef = useRef(null);

  // Utilisez useEffect pour activer la lecture automatique et la boucle
  useEffect(() => {
    // Assurez-vous que la référence vidéo existe
    if (videoRef.current) {
      // Activez la lecture automatique
      videoRef.current.autoplay = true;

      // Activez la boucle
      videoRef.current.loop = true;

      // Désactivez la barre de contrôle
      videoRef.current.controls = false;
    }
  }, []); // Le tableau vide [] assure que cela ne se déclenche qu'une seule fois après le rendu initial

  return (
    <div className='Container_video'>
      {/* Utilisez la balise vidéo et attachez la référence */}
      <video ref={videoRef}>
        {/* Source de la vidéo */}
        <source  src={Video} type="video/mp4"/>
        {/* Fallback pour les navigateurs qui ne prennent pas en charge la balise vidéo */}
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
