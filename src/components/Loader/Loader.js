import React from "react";
import { ReactComponent as SvgLoader } from "../../assets/svg/loader.svg";
import "./loader.scss";


export default function Loader() {

  return (
    <div className="loader">
        <SvgLoader/>
    </div>
  );
}
