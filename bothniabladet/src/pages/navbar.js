import React from "react";
import Image from "next/image";
import {Inter} from "next/font/google";
import Link from "next/link";

const Navbar = () => {
    return (
        <main
            // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >

            <div>
                <header className="flex justify-center">

                    <div className="flex flex-wrap items-center justify-around">

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

                        <Image
                            class="basis-1/2 shrink"
                            src={require('/src/BothniabladetHeader.png')}
                            alt="Bothniabladet logga"
                            width={700}
                            height={"auto"}
                            priority
                        />

                        <Link href="/cart">
                            <button className= " text-black font-bold px-16 bg-red-500 bg-clip-content">  
                                0
                            </button>
                            <Image
                                class="basis-1/8 shrink m-5 "
                                src={require('/src/shoppingCart.png')}
                                alt="ShoppingCart"
                                width={50}
                                height={50}
                                priority
                            />
                        </Link>
                    </div>
                </header>
            </div>
        </main>    
    )
};

export default Navbar;