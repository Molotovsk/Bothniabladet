import Image from "next/image";
import {Inter} from "next/font/google";
import Link from "next/link";
import { Formik, Field, Form } from 'formik';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    return (
        <main
            // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >

            <div class="parent" className="flex flex-row justify-start">
                <Link href="/">
                <Image
                    class="basis-1/8 shrink"
                    src={require('/src/Bothniabladet.png')}
                    alt="Bothniabladet logga"
                    width={150}
                    height={100}
                    priority
                />
                </Link>

                <div class="child">
                    <Link href="login">
                        Logga in
                    </Link>
                </div>

                <div class="child">
                    <Link href="register">
                        Registrera
                    </Link>
                </div>

            </div>

            <div className="flex flex-row justify-around">

                <div className="inputEmailPassword py-6 flex flex-col">

                    <label> Namn på företag </label>
                    <input type="text" name="name">
                    </input>

                    <label> Email </label>
                    <input type="text" name="email">
                    </input>

                    <label> Telefonnummer </label>
                    <input type="text" name="phonenumber">
                    </input>

                    <label> Lösenord </label>
                    <input type="text" name="password">
                    </input>

                    <div className="flex justify-center py-6">
                        <h1 className="registerButton">
                            <Link href="firstPage">
                                Skapa konto
                            </Link>
                        </h1>
                    </div>

                </div>


                <Image class={"logga"}
                       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                       src={require('/src/Bothniabladet.png')}
                       alt="Bothniabladet logga"
                       width={600}
                       height={600}
                       priority
                />
            </div>
        </main>
    )
}
