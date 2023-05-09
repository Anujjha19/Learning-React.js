//Create a copmponent to upload only images ,
//display the uploaded image in a square box and
//dispkay in a browser , you can use multiple images
//at a same time.
import React, { useState } from "react";

const ImageUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const { files } = event.target;

    const validFileTypes = ["image/jpeg", "image/png","image/jpg", "image/gif"];

    const selectedFiles = Array.from(files).filter((file) =>
      validFileTypes.includes(file.type)
    );

    setFiles(selectedFiles);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileInputChange}
      />

      {files.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 20
          }}
        >
          {files.map((file) => (
            <div
              key={file.name}
              style={{
                width: 150,
                height: 150,
                margin: 10,
                overflow: "hidden"
              }}
            >
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
