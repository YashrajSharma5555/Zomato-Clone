import React, { useState,useEffect } from 'react';

const MyComponent = () => {
    const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://food-recipes-with-images.p.rapidapi.com/?q=chicken%20soup';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '27e00997d1msh1bf3df782d372a6p1bfe7djsnc9c3a70df08b',
          'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (Array.isArray(data.d)) {
          setFoodData(data.d);
          console.log(data);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Recipes</h1>
      <div className="recipe-list">
        {foodData.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <h2>{recipe.Title}</h2>
            <img src={recipe.img_url} alt={recipe.title} style={{ maxWidth: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );

};

export default MyComponent;
