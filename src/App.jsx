// src/App.jsx
import React from "react";
import Hero from "./components/hero";
import Demo from "./components/demo";
import SignUp from "./components/SignUp";
import VideoPlayer from "./components/VideoPlayer";
import sabeMovie from "./assets/sabeMovie.mp4";
import "./App.css";
import VoiceMemo from './components/VoiceMemo';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Hero />
        <VideoPlayer videoSrc={sabeMovie} fileType="mp4" /> 
        <VoiceMemo />
        <Demo />
        <SignUp />
      </div>

      <div className="main">
        <div className="gradient" />
      </div>
    </main>
  );
};

export default App;
