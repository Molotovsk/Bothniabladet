import list from "@/data";
import { useState } from "react";
import CartContent from "./cartContent";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {

    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        cart.push(item);
        console.log(cart);
    }

    return (
        <main>
            <header>
                <div className="text-center flex-justify-center">
                    <div className=" flex space-x-96 flex-wrap items-center justify-around">

                        <Link href="/startPage">
                            <Image
                                class="basis-1/8 shrink"
                                src={require('/src/Bothniabladet.png')}
                                alt="Bothniabladet logga"
                                width={150}
                                height={100}
                                priority
                            />
                        </Link>
                        <Link href="/startPage">
                            <Image
                                class="basis-1/2 shrink"
                                src={require('/src/BothniabladetHeader.png')}
                                alt="Bothniabladet logga"
                                width={700}
                                height={"auto"}
                                priority
                            />
                        </Link>
                    </div>    
                </div>
            </header>
            <div className="px-96 py-5 text-xl font-bold">
                <h1>Din varukorg</h1>
            </div>
            <div className="">
                <section className="px-80">
                    {
                        list.map((item)=> (
                        <CartContent key={item.id} item={item} handleClick={handleClick}/> 
                        ))
                    }
                </section>
            </div>
            <div className="fixed bottom-14 right-32 h-20">
                <p>Pris totalt: 5000 kr</p>
            </div>
            <div className="fixed bottom-0 right-32 h-20">
                <button className="py-2 px-5 border-2 hover:bg-gray-400">
                    Betala
                </button>
            </div>

            <div className="fixed bottom-0 left-32 h-20">
                <Link href={"/startPage"}>
                    <button className="py-2 px-4 border-2 hover:bg-gray-400">
                        Tillbaka 
                    </button>
                </Link>
            </div>
                
            
            
            
        </main>
    )
}

export default Cart;

