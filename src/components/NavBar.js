import React from "react"
import { NavLink } from "react-router-dom";



export default function NavBar() {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className= "flex">
                    <NavLink to="/" exact 
                      activeClassName="text-white"
                      className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-300 text-4xl cursive"
                    >
                        William Mendez
                    </NavLink>
                    
                </nav>
                
                <div>
                <NavLink to = "/about" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-lg text-red-200 hover:text-blue-200"
                    activeClassName = "text-red-100 bg-green-600"
                    >
                    About Me!
                </NavLink>
                    
                <NavLink to = "/project"    
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-lg text-red-200 hover:text-blue-200"
                    activeClassName = "text-red-100 bg-green-600"
                    >
                    Projects
                </NavLink>

                <NavLink to="/post" 
                className="inline-flex items-center py-3 px-3 my-6 rounded text-lg text-red-200 hover:text-blue-200"
                activeClassName = "text-red-100 bg-green-600"
                >
                Blog Posts
                </NavLink>

                
                </div>
            </div>
        </header>
    )
}