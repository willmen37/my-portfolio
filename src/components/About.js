import React, {useEffect, useState}  from "react";
import sanityClient from "../client.js";
import typewriter from "../typewriter.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}


export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    },[]);

    if(!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img src={typewriter} alt="developer times" className=" absolute w-full"/>
                <div className="p-10 lg:pt-48 container mx-auto relative" >
                <section className="bg-blue-300 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-50 h-50 lg:w-80 lg:h-80 mr-10" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-800 mb-4">
                            Hey There. I'm{" "}
                            <span className="text-red-500">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-bold text-blue-900 ">
                           <BlockContent blocks={author.bio} projectId="4awsdjej" dataset="production"/>
                        </div>
                    </div>
                </section> 
                </div>
        </main>

    )
}