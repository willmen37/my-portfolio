import React from "react";
import { NavLink } from "react-router-dom";

import image from "../galaxyblue.jpg";

export default function Home() {
    return (
        <main>
            <img 
                src={image} 
                alt="Full stack Dev" 
                className=" absolute w-full" 
            />
                <section className=" container mx-auto relative flex justify-center min-h-screen pt-10 lg:pt-64 px-8">
                
                    <h1 className="text-8xl text-yellow-300  cursive leading-none lg:leading-snug home-name ">
                    My Portfolio site!</h1>
                    <div>
                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-200"
                    activeClassName = "text-red-100 bg-green-600"
                    >
                    Blog Posts
                    </NavLink>

                    <NavLink to = "/project"    
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-200"
                        activeClassName = "text-red-100 bg-green-600"
                        >
                        Projects
                    </NavLink>

                    <NavLink to = "/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-200"
                        activeClassName = "text-red-100 bg-green-600"
                        >
                        About Me!
                    </NavLink>
                    </div>

            </section>
                
            
            
        </main>
    )
}