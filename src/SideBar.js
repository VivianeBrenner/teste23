import React from "react";
import Usuario from "./Usuario";
import SuggestionsHead from "./SideBar-Components/SuggestionsHead";
import Sugestoes from "./Sugestoes";
import InstagramTermos from "./SideBar-Components/InstagramTermos";
import Copywriter from "./SideBar-Components/Copywriter";
const SideBar = () => (
  <div className="sideBar">
    <Usuario />
    <SuggestionsHead />
    <Sugestoes />
    <InstagramTermos />
    <Copywriter />
  </div>
);
export default SideBar;
