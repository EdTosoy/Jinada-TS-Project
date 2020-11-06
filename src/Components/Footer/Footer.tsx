import React, { ReactElement } from "react";

import Information from "./Information";
import Controls from "./Controls";
export default function Footer(): ReactElement {
  return (
    <footer>
      <div className="green"></div>
      <Information />
      <Controls />
    </footer>
  );
}
