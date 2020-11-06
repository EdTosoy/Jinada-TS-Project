import React, { useState, useRef, ReactElement } from "react";

import "./Pricing.scss";

export default function Pricing(): ReactElement {
  let [value, setValue] = useState<number>(1);
  const weight = useRef<HTMLInputElement | any>(1);
  const handleChange = () => {
    setValue(weight.current.value);
  };
  const HandleIncrement = () => {
    setValue(value++);
  };
  const HandleDecrement = () => {
    if (value === 0) return;
    setValue(value--);
  };
  const prevDefault = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };
  return (
    <div className="pricing">
      <h2 className="heading"> SHIPPING RATES </h2>
      <form>
        <div>
          <label>From:</label>
          <div className="row">
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
          </div>
        </div>
        <div>
          <label>To:</label>
          <div className="row">
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
          </div>
        </div>
        <div>
          <div className="row">
            <input
              type="number"
              value={value}
              onChange={handleChange}
              ref={weight}
            />
            <span>KG</span>
            <div className="minus weight-control" onClick={HandleDecrement}>
              -
            </div>
            <div className="add weight-control" onClick={HandleIncrement}>
              +
            </div>
          </div>
        </div>
        <button type="submit" onClick={prevDefault}>
          CALCULATE
        </button>
      </form>
    </div>
  );
}
