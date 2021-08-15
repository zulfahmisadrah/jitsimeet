import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSignup = () => {
    history.push("/Dashboard");
  };

  return (
    <div className="form-register-container">
      <div className="form-container-register">
        <div className="form-content-left">
          <img className="form-img" src="images/regis.svg" alt="spaceship" />
        </div>

        <div className="form-content-right">
          <h3 class="title-signup">SIGN UP</h3>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input
              type="username"
              placeholder="Enter username"
              value={username}
              onChange={changeUsername}
            />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={changeEmail}
            />
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={changePassword}
            />
          </div>
          <button
            onClick={() => handleSignup()}
            type="submit"
            className="form-input-btn"
          >
            Sign Up
          </button>{" "}
          <span className="form-input-login">
            <h4>
              Already have an account?{" "}
              <Link to="/Signin" className="text-primary">
                {" "}
                <a href="#">Sign In</a>{" "}
              </Link>{" "}
            </h4>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Signup;
