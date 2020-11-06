import React, { ReactElement } from "react";

import Logo from "./Logo";
import Brand from "./Brand";
import Navigation from "./Navigation";
import Mail from "./Mail";
export default function Header(): ReactElement {
  return (
    <header>
      <Logo />
      <div className="white"></div>
      <Brand />
      <Navigation />
      <Mail />
    </header>
  );
}
