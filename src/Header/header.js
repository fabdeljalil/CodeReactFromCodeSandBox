import clases from "./Header.module.css";
import React from "react";
import LeftIconeGroup from "../LeftIconeGroup/LeftIconeGroup";
import CentralLink from "../CentralLink/CentralLink";
import ReightGroup from "../ReightGroup/ReightGroup";
const Header = (props) => {
  console.log(props);

  return (
    <div className={clases.Header}>
      <LeftIconeGroup></LeftIconeGroup>
      <CentralLink></CentralLink>

      <ReightGroup
        message={props.message}
        pseudo={props.nomUtilisateur}
      ></ReightGroup>

      {/* {props.children[1]} */}
    </div>
  );
};
export default Header;
