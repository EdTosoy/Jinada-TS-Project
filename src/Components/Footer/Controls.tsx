import React from "react";
// import "./Controls.scss";
import { useLocation, useHistory } from 'react-router-dom';
export default function Controls() {
  let history = useHistory();
  let location = useLocation();

  let nextPage:any;
  switch (location.pathname) {
    case "/home":
      nextPage = "/track";
      break;
    case "/track":
      nextPage = "/pricing";
      break;
    case "/pricing":
      nextPage = "/contact";
      break;
    case "/contact":
      nextPage = "/about";
      break;
    case "/about":
      nextPage = "/home";
      break;
    default:
      break;
  }
  const forwardHandler = () => {
    history.push(`${nextPage}`);
  };
  const backHandler = () => {
    history.goBack();
  };
  return (
    <div className="controls">
      <div className="next" onClick={forwardHandler}>
        <ion-icon name="chevron-forward-sharp" />
      </div>
      <div className="prev" onClick={backHandler}>
        <ion-icon name="chevron-back-sharp" />
      </div>
    </div>
  );
}
