import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({handleCook}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className="lg:w-2/3">
            <div  className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {
                recipes.map((recipe,i) => <Recipe handleCook={handleCook} key={i} recipe={recipe}></Recipe>)
            }
            </div>
        </div>
    );
};

export default Recipes;