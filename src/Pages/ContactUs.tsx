import React, { ReactElement, MouseEvent } from "react";

import "./ContactUs.scss";
export default function ContactUs(): ReactElement {
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className="contact-us">
      <h2 className="heading">CONTACT US</h2>
      <form>
        <div className="row">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="row">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="row">
          <label htmlFor="news-letter">News letter ?</label>
          <input type="checkbox" name="news-letter" id="news-letter" />
          <span>Yes! Please</span>
        </div>
        <div className="row">
          <label htmlFor="message">Drop us a message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            rows={3}
          ></textarea>
        </div>
        <div className="row">
          <label htmlFor="submit">&nbsp;</label>
          <button className="btn-primary" type="submit" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
