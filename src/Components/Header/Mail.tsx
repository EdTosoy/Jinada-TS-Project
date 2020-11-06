import React, { ReactElement } from "react";

import mailSVG from "./mail.svg";
import "./Mail.scss";
export default function Mail(): ReactElement {
  return (
    <div className="mail">
      <a
        href="https://mail.google.com/mail/u/0/#inbox"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mailSVG} alt="mail" />
      </a>
    </div>
  );
}
