import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
const Recipe = ({recipe, handleCook}) => {
    const {recipe_image,recipe_id,recipe_name,short_description,ingredients_title,ingredients,calories,preparing_time} = recipe;
    return (
        <div className="border p-4 rounded-xl bg-[#f2f2ff] ">
            <img src={recipe_image} alt="" className="rounded-xl w-full"/>
            <h3 className="text-xl font-semibold">{recipe_name}</h3>   
            <p className="text-gray-700">{short_description}</p>
            <hr  className="my-6"/>
            <h1 className="text-lg font-semibold">Ingredients:</h1>
            <ul className="pl-7">
                {
                    ingredients.map((x, y) => <li className=" list-disc" key={y}>{x}</li>)
                }
            </ul>
            <hr className="my-3" />
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <IoTimeOutline />
                    {preparing_time}
                </div>
                <div className="flex items-center">
                    <FaFire />
                    {calories}
                </div>
            </div>

            <div className="text-center mt-6">
            <button
            onClick={()=>handleCook(recipe)}
             className="relative h-12 w-40 origin-top transform rounded-lg border-2 border-sky-500 text-xl text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-sky-500">Want to cook</button>
            </div>
        </div>
    );
};

export default Recipe;