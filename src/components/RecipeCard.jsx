import React from "react";
import styles from "./RecipeCard.module.css"
import steak from "../../img/steak.jpeg"

const RecipeCard = ({}) => {


return (
<div className="recipe_card">
  <div className="recipe_img">
    <img src= "/img/steak.jpeg" alt="steak"/>
  </div>
  <div className="recipe_name">
    <h7>Steak and Potatoes</h7>
  </div>
    <button>See More</button>
</div>
);
};

export default RecipeCard;