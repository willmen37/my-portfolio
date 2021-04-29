import React from "react"
import { NavLink } from "react-router-dom";
import {SocialIcon} from "react-social-icons"


export default function NavBar() {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className= "flex">
                    <NavLink to="/" exact 
                      activeClassName="text-white"
                      className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-300 text-4xl cursive"
                    >
                        William Mendez
                    </NavLink>
                
                </nav>
                <div className=" inline-flex py3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/WilMenMor" className="mr-4 hover:shadow-lg " target="_blank" fgColor="#fff" style={{height:40, width:40}}/>
                    <SocialIcon url="https://github.com/willmen37" className="mr-4 hover:shadow-lg" target="_blank" fgColor="#fff" style={{height:40, width:40}}/>
                    <SocialIcon url="https://www.linkedin.com/in/william-mendez-165673201/" className="mr-4 hover:shadow-lg" target="_blank" fgColor="#fff" style={{height:40, width:40}}/>
                </div>
            </div>
        </header>
    )
}