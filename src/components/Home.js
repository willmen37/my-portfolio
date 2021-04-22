import React from "react";
import image from "../world.jpg";

export default function Home() {
    return (
        <main>
            <img 
                src={image} 
                alt="Full stack Dev" 
                className="absolute object-cover w-full h-full" 
            />

            <section className=" container mx-auto relative flex justify-center min-h-screen pt-10 lg:pt-64 px-8">
                <h1 className="text-6xl text-yellow-300 font-bold cursive leading-none lg:leading-snug home-name ">
                 My Portfolio site!</h1>
            </section>
        </main>
    )
}