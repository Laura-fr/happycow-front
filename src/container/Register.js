import React from "react";

import community from "../assets/community.jpg";

const Register = () => {
  return (
    <div className="register">
      <div className="imgreg">
        <img src={community} alt="community" />
      </div>
      <div className="formreg">
        <form>
          <h2>
            Join the largest vegan and vegetarian community in the world !
          </h2>
          <div>
            <input placeholder="Username" />
            <input placeholder="Password" type="password" />
          </div>
          <div>
            <input placeholder="Email" type="email" />
          </div>
          <div>
            <select name="Veg Status">
              <option value="">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            <input placeholder="Birth Year" type="select" />
          </div>
          <div>
            <input placeholder="City" />
          </div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
