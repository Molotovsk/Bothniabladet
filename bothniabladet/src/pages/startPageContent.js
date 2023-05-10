import Link from "next/link";
import React from "react";

const StartPageContent = ({item, handleClick}) => {
    const {id, title, author, price, img} = item;

    return (
        <div className="m-10 ">
            <div className="bg-gray-300 w-80 p-8 rounded-xl">
                <div clasName="">
                    <Link href="/picture" >
                        <img src={img} alt="" />
                    </Link>
                    <p className="py-2 text-black">Titel: {title}</p>
                    <p className=" text-black"> {author}</p>
                    <p className="py-2 text-black">Pris: {price}</p>
                    <button className="addToCartButton hover:bg-gray-300" type="submit" onClick={()=> handleClick(item)}>
                        Add to cart
                    </button>
                </div>  
            </div>
        </div>
    );
}

export default StartPageContent;