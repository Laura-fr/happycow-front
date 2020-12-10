import React from "react";
import modalepic from "../assets/login-social.jpg";

const Modale = ({ revele, cache }) =>
  revele ? (
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

              <input className="submit" type="button" value="Register" />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
{
}

export default Modale;
