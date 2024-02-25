import React, {useState} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import Filter from "../Filter/Filter"
import Collection from "../Collection/collection"

export default function Navbar() {

    const [changeClass, setChangeClass] = useState("liimg")


    const handleOnClick = () =>{
        setChangeClass("diningOut")
    }
  return (
  <div className="nav">

    <div className="search">
        <div className="image">
          <img src="https://i.pinimg.com/originals/f6/0e/dc/f60edc8ed88f4375a0d92ee995eb77a0.png"></img>
        </div>

      <div className="content">
        <div className="inputClass">
          <select className="selector">
            <option value="chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Jaipur">Jaipur</option>
          </select>
          <input
            type="text"
            placeholder="Search for restaurant cuisin or a dish"
          ></input>
        </div>
      </div>

      <div className="list">
        <ul>
          <li className="li">
            <Link to="/login">Log in</Link>
          </li>
          <li className="li">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>



    <div className="order">
        <ul className="unorderlist" >
            <li className="ul-li">
                <div className="liimg" onClick={ handleOnClick } ><img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"/></div>Dining Out</li>
            <li className="ul-li">
            <div className="liimg">  <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"/></div>
                Delivery</li>
            <li className="ul-li">
            <div className="liimg"> <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"/></div>
                Nightlife</li>
        </ul>
    </div>
    <Collection />
    <Filter />
  </div>
  )
}
