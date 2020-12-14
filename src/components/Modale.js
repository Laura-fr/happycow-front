import React from "react";
import modalepic from "../assets/login-social.jpg";
import { Link } from "react-router-dom";

const Modale = ({ revele, cache }) => {
  return revele ? (
    <div>
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="modale">
          <div>
            <img src={modalepic} alt="modalepic" />
          </div>
          <div className="alllogin">
            <button className="close" onClick={cache}>
              <span>&times;</span>
            </button>
            <div className="login">
              <h2>Login to Your Account</h2>
              <p>Username or Email</p>
              <input />
              <p>Password</p>
              <input type="password" />
              <input className="submit" type="button" value="Login" />

              <Link to="/register">
                <input
                  className="submit"
                  type="button"
                  value="Register"
                  onClick={cache}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};
export default Modale;
