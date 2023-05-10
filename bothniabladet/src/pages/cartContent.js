import Link from "next/link";
import React from "react";


const CartContent = ({item}) => {

    const {id, title, author, price, img} = item;

    return (
        <main>
            
            <div className="m-10 grid grid-cols-2">
                <div className="bg-gray-300 w-80 p-8 rounded-xl">
                    <div clasName="">
                        <Link href="/picture" >
                            <img src={img} alt="" />
                        </Link>
                    </div>
                    <p className="py-2 text-black">Titel: {title}</p>
                    <p className=" text-black"> {author}</p>
                    <p className="py-2 text-black">Pris: {price}</p>
         
                </div>
                <div className="py-36">
                    <div className="m-3">
                        <button className= "p-1 hover:bg-gray-400 rounded">+</button>
                    </div>
                    <div className="m-3">
                        <button className= "p-1 hover:bg-gray-400 rounded">-</button>
                    </div>
                    <div className="m-3">
                    <button className= "p-1 hover:bg-gray-400 rounded">Ta bort</button>
                    </div>
                </div>
            </div> 
        </main>   
    )
}

export default CartContent;