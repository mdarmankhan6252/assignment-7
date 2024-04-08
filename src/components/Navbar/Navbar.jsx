import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
   return (
      <nav className="flex items-center flex-col lg:flex-row justify-between container mx-auto py-5">
         <div className="flex items-center flex-col sm:flex-row">
            <h2 className="text-3xl font-semibold">Recipe Calories</h2>
            <ul className="flex items-center ml-10 space-x-5 *:text-lg text-gray-700">
               <li><a href="">Home</a></li>
               <li><a href="">Recipes</a></li>
               <li><a href="">About</a></li>
               <li><a href="">Search</a></li>
            </ul>
         </div>
         <div className="flex items-center">
            <div className="flex items-center border border-gray-500 p-2 rounded-sm ">
            <input className="outline-none border-none" type="text" placeholder="Search"/>
            <span className="text-2xl cursor-pointer "><CiSearch /></span>

            </div>
            <CgProfile className="text-5xl bg-[#0be58a] p-2 rounded-full ml-6"/>
            

         </div>

      </nav>
   );
};

export default Navbar;