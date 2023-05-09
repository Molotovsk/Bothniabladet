import Navbar from "./navbar";
import list from "@/data";
import Cards from "./startPageContent";
import { useState } from "react";

const StartPage = () => {

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        cart.push(item);
        console.log(cart);
    }

    return (
        <main>
            <Navbar />
            <section>
                {
                    list.map((item)=> (
                       <Cards key={item.id} item={item} handleClick={handleClick}/> 
                    ))
                }
            </section>
        </main>
    )
}

export default StartPage;