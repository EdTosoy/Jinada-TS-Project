import React, { ReactElement, useState } from "react";

import "./Loader.scss";

export default function Loader(): ReactElement {
  const [loaderDisplay, setLoaderDisplay] = useState(true);

  // const showLoader = () => {
  // setLoaderDisplay(true);

  setTimeout(() => {
    setLoaderDisplay(false);
  }, 2000);
  // };
  const loaderStyle = loaderDisplay ? { display: "grid" } : { display: "none" };
  return (
    <div className="loader" style={loaderStyle} /*onClick={showLoader}*/>
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
    </div>
  );
}
