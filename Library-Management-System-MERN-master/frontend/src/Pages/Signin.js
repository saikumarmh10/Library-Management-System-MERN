import React, { useContext, useState } from "react";
import "./Signin.css";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { dispatch } = useContext(AuthContext);

  const API_URL = "http://localhost:5000/";
  console.log("API URL:", API_URL);

  const loginCall = async () => {
    dispatch({ type: "LOGIN_START" });

    console.log("API URL:", API_URL);
    console.log("Sending request...");

    try {
      const res = await axios.post(API_URL + "api/auth/signin", {
        email,
        password,
      });

      console.log("Response:", res.data);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data.user,
      });
    } catch (err) {
      console.log("LOGIN ERROR:", err);
      console.log("Response:", err.response);

      dispatch({
        type: "LOGIN_FAILURE",
        payload: err,
      });

      setError("Invalid Email or Password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall();
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <form onSubmit={handleSubmit}>
          <h2 className="signin-title">Login</h2>

          <p className="line"></p>

          <div className="error-message">
            <p>{error}</p>
          </div>

          <div className="signin-fields">
            <label>
              <b>Email</b>
            </label>

            <input
              className="signin-textbox"
              type="email"
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>
              <b>Password</b>
            </label>

            <input
              className="signin-textbox"
              type="password"
              placeholder="Enter Password"
              required
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="signin-button">
            Login
          </button>

          <a className="forget-pass" href="#home">
            Forgot Password?
          </a>
        </form>

        <div className="signup-option">
          <p className="signup-question">
            Don't have an account? Contact Librarian
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;