import {useState} from "react"
import RecipeCard from "../../components/RecipeCard"

const RecipeContainer = ({recipes}) => {
    const [search, setSearch] = useState ("");

const recipeDisplay = recipes
    .filter ((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe,index) => {
        return <RecipeCard recipe={recipe}/>
    })
};