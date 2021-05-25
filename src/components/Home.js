import React from "react";
import {SocialIcon} from "react-social-icons"
import conectivity from "../conectivity.jpg";

export default function Home() {
    return (
        <main>
            <img 
                src={conectivity} 
                alt="Full stack Dev" 
                className="absolute w-full  " 
            />
                <section className=" container mx-auto relative flex justify-center min-h-screen pt-10 lg:pt-64 px-8">
                    <div>
                    <h1 className="text-8 xl text-green-300  cursive leading-none lg:leading-snug home-name mb-40 ">
                    Software Developer</h1>
                    
                    <div>
                    </div>
                        <h2 className="text-5xl text-white text-bold cursive leading-none mb-8 "> Contact Me: </h2>
                        <SocialIcon url="https://www.facebook.com/WilMenMor" className="mr-4 hover:shadow-lg " target="_blank" fgColor="#fff" style={{height:80, width:80}}/>
                        <SocialIcon url="https://github.com/willmen37" className="mr-4 hover:shadow-lg" target="_blank" fgColor="#fff" style={{height:80, width:80}}/>
                        <SocialIcon url="https://www.linkedin.com/in/william-mendez-165673201/" className="mr-4 hover:shadow-lg" target="_blank" fgColor="#fff" style={{height:80, width:80}}/>
                    </div>
                
            </section>
                
            
            
        </main>
    )
}