import "./App.css";
import axios from "axios";
import {useState, useEffect} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import HomeScreen from "./components/homeComponents/HomeScreen";
import NewRecipeScreen from "./components/newRecipeComponents/NewRecipeScreen";
import DetailScreen from "./components/detailComponents/DetailScreen";


function App() {
  return (
    <div className="App">
  <Header />
  <main>
    <Routes>
      <Route index element = {<HomeScreen/>} />
      <Route path = "newRecipe" element = {<NewRecipeScreen/>}/>
      <Route path = "recipeDetails/:id" element = {<DetailScreen/>}/>
    </Routes>
  </main>
  <Footer />
    </div>
  );
}

export default App;
