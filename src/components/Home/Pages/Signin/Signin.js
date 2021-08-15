import React, { useState } from "react";
import "./Signin.css";
import { Link, useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const loginData = [
  {
    id: 1,
    username: "dosen",
    password: "dosen",
  },
  {
    id: 2,
    username: "ulfah",
    password: "dosen",
  },
];

const Signin = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSignIn = () => {
    let isCorrect = [];
    isCorrect = loginData.filter((data) => {
      return data.username === username && data.password === password;
    });
    if (isCorrect.length > 0) {
      localStorage.setItem("username", username);
      if (isCorrect[0].username === "dosen") {
        history.push("/DashboardDosen");
      } else {
        history.push("/DashboardMhs");
      }
    } else {
      alert("password / username salah");
    }
  };
  return (
    <div className="login-container">
      <div className="form-container-login">
        <div className="form-login-right">
          <img className="login-img" src="images/login.svg" alt="spaceship" />
        </div>
        <div className="form-login-left">
          <h3 className="title">SIGN IN</h3>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input
              type="username"
              placeholder="Enter Username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ marginLeft: "10%", marginTop: 15 }}
          >
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="Remember Me"
              // className="block"
              style={{ fontSize: 14 }}
            />

            <button
              className="mb-0 text-secondary"
              style={{ background: "transparent",fontSize: 14, marginLeft: 20 }}
            >
              Forgot Password
            </button>
          </div>
          <button
            onClick={() => handleSignIn()}
            type="submit"
            className="form-input-btn"
          >
            {" "}
            Sign In{" "}
          </button>{" "}
          <span className="form-input-signin" id="dont-have-account">
            <h4>
              Dont have an account?{" "}
              <Link to="/Signup" className="text-primary">
                {" "}
                <a href="#">Sign Up</a>{" "}
              </Link>{" "}
            </h4>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signin;
