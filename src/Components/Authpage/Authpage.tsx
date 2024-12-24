import React, { useState } from "react";
import "./Authpage.css";

const AuthPage: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  const toggleAuthMode = (): void => {
    setIsSignIn(!isSignIn);
    setFormData({ name: "", username: "", password: "", email: "" });
    setErrors({ name: "", username: "", password: "", email: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: any = {};
    if (!isSignIn && !formData.name) newErrors.name = "Full Name is required.";
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (!isSignIn && !formData.email) newErrors.email = "Email is required.";
    else if (!isSignIn && !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({ name: "", username: "", password: "", email: "" });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-logo">Pulse</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isSignIn && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`auth-input ${errors.name ? "input-error" : ""}`}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </>
          )}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className={`auth-input ${errors.username ? "input-error" : ""}`}
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`auth-input ${errors.password ? "input-error" : ""}`}
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}

          {!isSignIn && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`auth-input ${errors.email ? "input-error" : ""}`}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </>
          )}
          <button type="submit" className="auth-button">
            {isSignIn ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="auth-toggle">
          {isSignIn ? (
            <p>
              Don't have an account?{" "}
              <span onClick={toggleAuthMode} className="auth-link">
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Have an account?{" "}
              <span onClick={toggleAuthMode} className="auth-link">
                Log In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
