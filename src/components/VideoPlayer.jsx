// src/components/VideoPlayer.jsx
import React from "react";

const VideoPlayer = ({ videoSrc, fileType }) => {
  const videoType = fileType === "mov" ? "video/quicktime" : "video/mp4";

  return (
    <div className="video-player">
      <video width="320" height="240" controls>
        <source src={videoSrc} type={videoType} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
