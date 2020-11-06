import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";
import SocialContact from "./Components/SocialContact/SocialContact";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import Track from "./Pages/Track";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Loader />
        <div className="middle">
          <SocialContact />
          <div className="white"></div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/track" component={Track} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/about" component={About} />
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
