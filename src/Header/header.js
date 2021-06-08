import clases from "./Header.module.css";
import React from "react";

const Header = () => {
  return (
    <div className={clases.Header}>
      <p> Mon app React</p>
      <a href="#">Accueil</a>
      <a href="#">A propos</a>
      <a href="#">Contacte</a>
    </div>
  );
};
export default Header;
