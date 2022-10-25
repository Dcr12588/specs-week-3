import React from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'
import {useEffect} from "react"

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
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen