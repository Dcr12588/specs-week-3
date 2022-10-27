import React from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import {useEffect} from "react"
// import RecipeCard from "./components/RecipeCard"

const HomeScreen = () => {  

useEffect(() => {
  const getRecipes = () => {
    axios
    .get(`https://recipes.devmountain.com/recipes`)
    .then((res) => {
      console.log(res.data)
      getRecipes(res.data)
  });
};

    getRecipes();
    },[]);

  return (
    <div>
      <AdBanner />

      <div className='input'>
        <input className='cards__search' type='text' placeholder='🔍 Search for a Recipe...'>

        </input>
        </div>
    </div>
  )
}

export default HomeScreen;