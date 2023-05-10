import Navbar from "./navbar";
import list from "@/data";
import { useState } from "react";
import StartPageContent from "./startPageContent";

const StartPage = () => {

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        cart.push(item);
        console.log(cart);
    }

    return (
        <main>
            <Navbar />
            <div className="flex justify-center py-3 px-6 bg-gray50 border-b">
                <form action="">
                    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                        <svg className="w-7 h-6 absolute ml-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                        <input 
                        type="text"
                        name="search"
                        placeholder="Sök"
                        autoComplete="off"
                        aria-label="Sök"
                        className="w-96 px-10 py-2 font-semibold placeholder-gray-500 text-black border-none rounded-2xl ring-2 ring-gray-500 focus:ring-gray-500 focus:ring-2"
                        >
                        </input>
                        <div className="pl-5">
                            <button className="px-5 border-2 border-gray-600 bg-white rounded-xl text-black hover:bg-gray-300">
                                Sök
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <section className="m-2 grid grid-cols-4">
                {
                    list.map((item)=> (
                       <StartPageContent key={item.id} item={item} handleClick={handleClick}/> 
                    ))
                }
            </section>
        </main>
    )
}

export default StartPage;