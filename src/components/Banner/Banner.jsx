import Background from '../../assets/banner.jpg'
const Banner = () => {
   return (
      <header className='bg-cover bg-center container mx-auto mt-4 border py-40 rounded-xl' style={{backgroundImage: `url(${Background})`}}>
         <div className='text-center text-white space-y-6 lg:w-[70%] mx-auto'>
            <h1 className='text-6xl font-semibold'>Discover an exceptional cooking<br/>class tailored for you!</h1>
            <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+<br/>coding problems to become an exceptionally well world-class Programmer.</p>
            <div className='space-x-8 pt-4'>
            <button className="rounded-full bg-green-500 px-8 py-3 text-xl text-white duration-300 active:scale-95">Explore Now</button>
            <button className="rounded-full border-2 border-green-500-500 px-8 py-3 text-xl text-white duration-200 hover:bg-green-500 hover:text-white">Our Feedback</button>
            </div>
         </div>         
      </header>
   );
};

export default Banner;