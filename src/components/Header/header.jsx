import React from "react";
import "./header.css";
const header = () => {
  return (
    <header>
      <nav>
        <div className="getapp">Get the App</div>
        <div className="list">
          <ul>
            <li>
              <a href="/">Investor Relations</a>
            </li>
            <li>
              <a href="/">Add restaurant</a>
            </li>
            <li>
              <a href="/">Log in</a>
            </li>
            <li>
              <a href="/">Sign up</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <div><img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"></img></div>
        <h3>Discover the best food & drinks in Delhi NCR</h3>
        <div className="inputClass">
        <select className="selector">
          <option value="chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi NCR">Delhi NCR</option>
          <option value="Jaipur">Jaipur</option>
          </select>
        <input type="text" placeholder="Search for restaurant cuisin or a dish"></input>
        </div>
      </div>
    </header>
  );
};

export default header;
