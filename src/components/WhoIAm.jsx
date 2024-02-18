import React from 'react';
 import VideoPlayer from './VideoPlayer';
import CardAboutMee from './CardAboutMee';
import WeatherTable from './WeatherTable';


const WhoIAm = () => {

  return (
    <section className="whoIAm" id="whoIAmSection">
      <div className="presentationContainer">
      <VideoPlayer />
      <CardAboutMee />
      <WeatherTable/>
      </div>
    </section>
  );
};

export default WhoIAm;
