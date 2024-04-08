import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Cooks from "./components/Cooks/Cooks";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";

const App = () => {

  const [addCook, setAddCook] = useState([])

  const handleCook = recipe =>{
    const newRecipe = [...addCook, recipe]
    setAddCook(newRecipe)
  }
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className="lg:flex flex-row-reverse lg:flex-row gap-x-3">
      <Recipes handleCook={handleCook}></Recipes>
      <Cooks addCook={addCook}></Cooks>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;