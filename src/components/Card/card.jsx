import React from 'react'
import './card.css'
import Order from "/Users/appleid/Desktop/React/zomato/src/assets/order.avif"
import Dining from "/Users/appleid/Desktop/React/zomato/src/assets/dining.avif"
import NightLife from "/Users/appleid/Desktop/React/zomato/src/assets/nightlife.avif"
import {Link} from "react-router-dom"

export default function card() {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={Order} />
        <h2>Order Online</h2>
        <span>Stay home and order to your doorstep</span>
      </div>
      <Link to="/dining">
      <div className="cardImg" >
        <img src={Dining} />
        <h2>Dining</h2>
        <span>View the cities favourite dining venues</span>
      </div>
      </Link>
      <div className="cardImg">
        <img src={NightLife} />
        <h2>NightLife and Clubs</h2>
        <span>Explore the cities top nightlife outlets</span>
      </div>
    </div>
  )
}
