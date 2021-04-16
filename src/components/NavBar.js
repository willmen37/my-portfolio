import React from "react"
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons";


export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className= "flex">
                    <NavLink to="/" exact 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-3xl font-bold cursive tracking-widest"
                        activeClassName="text-white"
                    >
                        William Mendez
                    </NavLink>
                    
                    <NavLink to="/post" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName = "text-red-100 bg-green-600"
                        >
                        Blog Posts
                    </NavLink>

                    <NavLink to = "/project"    
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName = "text-red-100 bg-green-600"
                        >
                        Projects
                    </NavLink>

                    <NavLink to = "/about" 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName = "text-red-100 bg-green-600"
                        >
                        About Me!
                    </NavLink>
                    
                </nav>
                <div className= "inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/WilMenMor" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://github.com/willmen37" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/william-mendez-165673201/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}