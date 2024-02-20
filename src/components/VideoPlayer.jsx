import React from 'react';
import newVideoURL from '../assets/computer.webm'

const VideoPlayer = () => {

  return (
    <div className='Container_video'>
      <video controls={false} loop={true} autoPlay={true}>
        <source src={newVideoURL} type="video/mp4" fetchpriority="high" />
        Votre navigateur ne prend pas en charge la balise vidéo.
      </video>
    </div>
  );
};

export default VideoPlayer;
