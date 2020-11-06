import React, { ReactElement } from "react";

import logoSVG from "./logo.svg";
import "./Logo.scss";
export default function Logo(): ReactElement {
  return (
    <div className="logo">
      <img src={logoSVG} alt="logo" />
    </div>
  );
}
