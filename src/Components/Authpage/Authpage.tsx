import React, { useEffect, useState } from "react";
import "./Authpage.css";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import AlertMessage from "../GeneralComponents/AlertComponent/AlertMessage";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     navigate("/");
  //     return;
  //   }

  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/userAuth/user`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (response.data != null) {
  //       navigate("/home");
  //     }
  //     if (response.data == null) {
  //       navigate("/");
  //     }
  //   };

  //   fetchData();
  // }, [navigate]);

  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  const [alertData, setAlertData] = useState({
    title: "",
    content: "",
    onCancel: () => {},
    onAction: () => {},
    actionText: "",
    isLeftButton: false,
  });
  const [isAlert, setIsAlert] = useState(false);
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

  const [usernameTimeout, setUsernameTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (!isSignIn && name === "username") {
      if (usernameTimeout) clearTimeout(usernameTimeout);

      const timeout = setTimeout(() => {
        checkUsername(value);
      }, 500); // Debounce time (500ms)
      setUsernameTimeout(timeout);
    }
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

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!usernameAvailable) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        username: "Username already exists", // Make sure error is shown
      }));
      return; // Prevent form submission
    }
    const validationErrors = validateForm();
    console.log(Object.keys(validationErrors).length);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({ name: "", username: "", password: "", email: "" });

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/userAuth/${
          isSignIn ? "signin" : "register"
        }`,
        {
          name: formData.name,
          username: formData.username,
          password: formData.password,
          email: formData.email,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data);

        setAlertData({
          title: "Successful",
          content: isSignIn ? "Login Successfully" : "Registered Successfully",
          onCancel: () => setIsAlert(false),
          onAction: () => {
            setIsAlert(false);
            navigate("/home");
          },
          actionText: "OK",
          isLeftButton: true,
        });
        setIsAlert(true);
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        setAlertData({
          title: "Error",
          content: error.response.data,
          onCancel: () => setIsAlert(false),
          onAction: () => {},
          actionText: "OK",
          isLeftButton: false,
        });
        setIsAlert(true);
      } else if (error.response?.status === 404) {
        setAlertData({
          title: "Error",
          content: error.response.data,
          onCancel: () => setIsAlert(false),

          onAction: () => {},
          actionText: "OK",
          isLeftButton: false,
        });
      } else {
        setAlertData({
          title: "Error",
          content: "An unexpected error occurred",
          onCancel: () => setIsAlert(false),
          onAction: () => {},
          actionText: "OK",
          isLeftButton: false,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  const checkUsername = async (username: string) => {
    if (!username) {
      setErrors({ ...errors, username: "" });
      setUsernameAvailable(true);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/userAuth/checkUsername`,
        username
      );
      setUsernameAvailable(response.data);

      if (!response.data) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          username: "Username already exists",
        }));
      } else {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          username: "", // Clear the error if the username is available
        }));
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        setErrors((prevErrors: any) => ({
          ...prevErrors,
          username: error.response.data,
        }));
      }
    }
  };
  return (
    <>
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
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`imput-password auth-input  ${
                  errors.password ? "input-error" : ""
                }`}
              />
              <button
                type="button"
                className="show-hide-button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

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
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
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
      {isAlert && (
        <AlertMessage
          title={alertData.title}
          content={alertData.content}
          onCancel={alertData.onCancel}
          onAction={alertData.onAction}
          actionText={alertData.actionText}
          isLeftButton={alertData.isLeftButton}
        />
      )}
      {isLoading && (
        <div className="overlay">
          <div className="spinner">
            <CircularProgress size={24} color="inherit" />
          </div>
        </div>
      )}
    </>
  );
};

export default AuthPage;
