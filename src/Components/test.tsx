import React, { useState } from "react";
import axios from "axios";

const TestDemo = () => {
  const [image, setImage] = useState<File | null>(null);
  const [username, setUsername] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  // Event handler for handling file selection
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if a file is selected
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]); // Set the first selected file
    }
  };

  // Event handler for handling username change
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value); // Update the username state
  };

  // Event handler for form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/appv1/test/upload", // The backend URL
        formData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjaGFybGllemVuIiwiaWF0IjoxNzM1MDMwODQzLCJleHAiOjE3MzUyOTAwNDN9.k613nj2qy4jjTQ7njvGEB5Pld86bw4jpJ5XswEGRDIO1_l233Mel8kl_SS1tYLEd",
            "Content-Type": "multipart/form-data", // Ensure correct content type
          },
        }
      );
      setImageUrl(response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Image upload failed");
    }
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Choose an image:</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
      <div>
        <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100px" }} />
      </div>
    </div>
  );
};

export default TestDemo;
