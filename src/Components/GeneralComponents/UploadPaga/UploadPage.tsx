import React, { useState } from "react";
import "./UploadPage.css";

const MAX_FILE_SIZE_MB = 30; // Maximum file size in MB

const UploadPage: React.FC = () => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.size / (1024 * 1024) > MAX_FILE_SIZE_MB) {
        setError(`File size exceeds ${MAX_FILE_SIZE_MB} MB.`);
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size / (1024 * 1024) > MAX_FILE_SIZE_MB) {
        setError(`File size exceeds ${MAX_FILE_SIZE_MB} MB.`);
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }
      setCoverPreviewUrl(URL.createObjectURL(file));
    }
  };
  const triggerFileInput = () => {
    const fileInput = document.getElementById(
      "cover-image"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };
  return (
    <div className="uploadpage-main-container">
      <div
        className={`uploadpage-container ${
          selectedFile ? "margin-top-100" : ""
        }`}
      >
        <div className="uploadpage-header">
          <h3>Upload Post</h3>
          <p>Post an image or video to your account</p>
        </div>
        <div className="uploadpage-details-container">
          <div className="upload-content">
            {selectedFile && previewUrl ? (
              <div className="preview-container">
                <div className="content-container">
                  {selectedFile.type.startsWith("image/") ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="preview-image"
                    />
                  ) : (
                    <video
                      src={previewUrl}
                      controls
                      className="preview-video"
                    ></video>
                  )}
                </div>
                <button className="clear-button" onClick={clearSelection}>
                  Clear Selection
                </button>
              </div>
            ) : (
              <div
                className={`uploadhere-container ${
                  isDragActive ? "drag-active" : ""
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
              >
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/159/159626.png"
                  alt="Upload"
                />
                <h4>Select Video or Image</h4>
                <p>Or drag and drop a file</p>
                <p>Max size: 30MB</p>
              </div>
            )}
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="uploadpage-details">
            <div className="uploadpage-caption-container">
              <label className="uploadpage-label" htmlFor="caption">
                Caption
              </label>
              <div>
                <input type="text" name="caption" /> <h4>@ #</h4>
              </div>
            </div>
            {selectedFile && previewUrl ? (
              selectedFile.type.startsWith("image/") ? null : (
                <div className="uploadpage-cover-image-container">
                  <label htmlFor="cover-image" className="uploadpage-label">
                    Cover Image
                  </label>
                  <div className="coverimage-container">
                    <div
                      className="coverimage-select-empty"
                      onClick={triggerFileInput}
                    >
                      <input
                        type="file"
                        id="cover-image"
                        name="cover-image"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleCoverImageChange}
                      />
                      {coverPreviewUrl && (
                        <img
                          src={coverPreviewUrl}
                          alt="Cover Preview"
                          className="cover-preview"
                        />
                      )}
                    </div>
                  </div>
                </div>
              )
            ) : null}

            <div className="visibility-container">
              <label className="uploadpage-label" htmlFor="visibility">
                Who can see this?
              </label>
              <select
                id="visibility"
                name="visibility"
                className="visibility-select"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="friends">Friends</option>
              </select>
              <span className="custom-arrow">&#9660;</span>
            </div>
            <div className="upload-buttons-container">
              <button
                className="uploadpage-cancel-button"
                onClick={() => {
                  window.history.back();
                }}
              >
                Cancel
              </button>
              <button className="uploadpage-post-button">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
