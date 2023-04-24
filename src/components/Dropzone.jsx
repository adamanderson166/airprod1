import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop a file here, or click to select a file</p>
          </div>
        )}
      </Dropzone>
      {file && <p>File name: {file.name}</p>}
    </div>
  );
};

export default FileUploader;
