import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function ProfileImage({ Image, setImage, cta }) {
  console.log(Image);
  return (
    <div className="form">
      <h1>You're Almost Done</h1>
      <div className="file_upload">
        <input
          className="file-upload-input"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        {Image && (
          <img
            src={`${Image}`}
            alt="Uploaded Profile"
            className="file_upload__image"
          />
        )}
        <div class="drag-text center">
          <CloudUploadIcon className="upIco" />
          <h3>Upload A Photo</h3>
        </div>
      </div>

      <button
        className="c_width"
        onClick={() => cta()}
        disabled={!Image ? true : false}
      >
        Start Journey
      </button>
    </div>
  );
}
