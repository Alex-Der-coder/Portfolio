import React from 'react';
 import VideoPlayer from './VideoPlayer';
import CardAboutMee from './CardAboutMee';
import WeatherTable from './WeatherTable';
import { SpeedInsights } from "@vercel/speed-insights/react"

const WhoIAm = () => {

  return (
    <section className="whoIAm" id="whoIAmSection">
      <div className="presentationContainer">
      <VideoPlayer />
      <SpeedInsights/>
      <CardAboutMee />
      <WeatherTable/>
      </div>
    </section>
  );
};

export default WhoIAm;
