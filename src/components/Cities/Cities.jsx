import React from "react";
import "./Cities.css";
import Icon from "./Icon.jsx";

export default function Cities() {
  return (
    <div className="cities">
      <h1>Popular localities in and around Delhi NCR</h1>
      <div className="cityContainer">
        <div className="city">
          <div className="cityLeft">
            <h3>Connaught Place</h3>
            <span>269 Places</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Sector 29</h3>
            <span>140 Places</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Sector 18 Noida</h3>
            <span>223 Places</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Rajouri Garden</h3>
            <span>360 Places</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Saket</h3>
            <span>177 Places</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>DLF Cyber City</h3>
            <span>156 Places</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>Golf Cource Road</h3>
            <span>223 Places</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="city">
          <div className="cityLeft">
            <h3>DLF Phase 4</h3>
            <span>336 Places</span>
          </div>
          <div className="icon">
            <Icon />
          </div>
        </div>
        <div className="city" id="seeMore">
          <div> see more</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
              stroke="#9b9b9b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
