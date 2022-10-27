import React from "react";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to = "">
          <button class='homeBtn'>Home</button>
        </Link>
        <Link to = "/newRecipe">
          <button class="addBtn">Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
