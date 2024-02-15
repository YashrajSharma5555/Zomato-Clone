import React from 'react'
import ccard1 from "/Users/appleid/Desktop/React/zomato/src/assets/ccard1.jpeg"
import ccard2 from "/Users/appleid/Desktop/React/zomato/src/assets/ccard2.avif"
import ccard3 from "/Users/appleid/Desktop/React/zomato/src/assets/ccard3.avif"
import ccard4 from "/Users/appleid/Desktop/React/zomato/src/assets/ccard4.avif"
import './collection.css'
export default function collection() {
  return (
    <div className="collection">
      <h1>Collections</h1>
      <div className="collectionText">
          <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
          <span>All collections in Delhi NCR</span>
      </div>
      <div className="collectionCard">
          <div className="cards">
              <img src={ccard1}/>
              <h3>The Legends of Delhi</h3>
              <span>9 Places</span>
          </div>
          <div className="cards">
              <img src={ccard2}/>
              <h3>One of a Kind Places</h3>
              <span>11 Places</span>
          </div>
          <div className="cards">
              <img src={ccard3}/>
              <h3>Fomo Finds</h3>
              <span>19 Places</span>
          </div>
          <div className="cards">
              <img src={ccard4}/>
              <h3>Dine for the Gram</h3>
              <span>22 Places</span>
          </div>
      </div>
    </div>
  )
}
