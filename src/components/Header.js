import React from "react";
import { Link } from "react-router-dom";

import LogicModale from "./LogicModale";
import Modale from "./Modale";

const Header = () => {
  const { revele, toggle } = LogicModale();
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img alt="logo" src="/logo.svg" />
        </Link>
      </div>
      <div>
        <button onClick={toggle}>LOGIN / JOIN</button>
        <Modale revele={revele} cache={toggle} />
      </div>
    </div>
  );
};

export default Header;
