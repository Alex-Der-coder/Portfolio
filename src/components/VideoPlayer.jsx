import React from 'react';

const VideoPlayer = () => {
  const newVideoURL ="https://res.cloudinary.com/df1z0o9nt/video/upload/s--bcvfgE3P--/t_Portefolio_video/v1/Video/computer";

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
