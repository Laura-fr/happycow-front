import { useState } from "react";

const LogicModale = () => {
  const [revele, setRevele] = useState(false);

  function toggle() {
    setRevele(!revele);
  }
  return { revele, toggle };
};

export default LogicModale;
