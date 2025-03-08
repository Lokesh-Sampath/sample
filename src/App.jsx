import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import VideoSection from "./components/VideoSection";
 import Countdown from "./components/Countdown";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Letter />
      <VideoSection />
      <Countdown/>
    </>
  );
};

export default App;
