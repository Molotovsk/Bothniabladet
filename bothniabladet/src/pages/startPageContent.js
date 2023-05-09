import Link from "next/link";
import React from "react";

const StartPageContent = ({item, handleClick}) => {
    const {id, title, author, price, img} = item;
    return (

        <div className=" grid grid-cols-3 auto-rows-auto">
            <div className="cards m-10 p-0 shadow-neutral-500 cursor-pointer">
                
                <div className="image_box">
                    <Link href="/picture" >
                        <img src={img} alt="" />
                    </Link>
                    <p className="py-2">Titel: {title}</p>
                    <p className="py-2"> {author}</p>
                    <p className="py-2">Pris: {price}</p>
                    <button button className="addToCartButton" type="submit" onClick={()=> handleClick(item)}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );

}

export default StartPageContent;