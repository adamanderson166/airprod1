import React, { useState } from 'react';

const VoiceMemo = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState('');

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const newMediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(newMediaRecorder);

      newMediaRecorder.onstart = () => {
        setRecording(true);
      };

      newMediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioURL(URL.createObjectURL(event.data));
        }
      };

      newMediaRecorder.start();
    });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const saveRecording = () => {
    // Logic to save the recording to your local server
    console.log('Saving recording:', audioURL);
  };

  return (
    <div>
      <h2>What do you need?</h2>
      {recording ? (
        <button onClick={stopRecording}>Stop</button>
      ) : (
        <button onClick={startRecording}>Start</button>
      )}
      <audio src={audioURL} controls />
      <button onClick={saveRecording} disabled={!audioURL}>
        Save Recording
      </button>
    </div>
  );
};

export default VoiceMemo;
