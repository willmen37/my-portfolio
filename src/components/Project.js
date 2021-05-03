import React, {useEffect, useState}  from "react";
import sanityClient from "../client.js";
import image from "../wood.jpg";


export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(()=> {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
    },[]);



    return(
        <main>
            <img
            src={image} 
            alt="Full dev" 
            className=" absolute w-full" 
            />
            
            <section className="container mx-auto relative" >
                <h1 className= " text-9xl flex justify-center font-bold cursive mb-5">My Projects</h1>
                <h2 className= "text-5xl flex justify-center mb-14"> Welcome To My Projects Page </h2>
                <section className="grid grid-cols-2 gap-8">
                {projectData && projectData.map((project, index)=> (
                    <article className="relative rounded-lg shadow-xl bg-gray-300 p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={project.link}
                            alt={project.title}
                            target= "_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold text-lg">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold text-lg">Company</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold text-lg">Type</strong>:{" "}
                                {project.preojectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed ">{project.description}</p>
                            <a href={project.link} rel="noopener noreferrer" target="blank" className="text-green-600 text-lg font-bold hover:underline hover:text-red-400 text-xl mr-30">
                            View The Project {" "}
                            <span role="img" aria-label="right pointer">
                            👁
                            </span>
                            </a>
                            <a href={project.link} rel="noopener noreferrer" target="blank" className="text-blue-600 text-lg font-bold hover:underline hover:text-red-400 text-xl">
                            View The Code {" "}
                            <span role="img" aria-label="right pointer">
                            🛠
                            </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}