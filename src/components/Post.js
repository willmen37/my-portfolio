import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../client.js";
import image from "../wood.jpg"


export default function Post() {
    const[postData, setPost]= useState(null);

    useEffect(()=> {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                    title,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                }
            }`)
            .then((data)=> setPost(data))
            .catch(console.error);
    }, []);

    return (
        
        <main >
            <img
                src={image}
                alt="development"
                className="absolute w-full"
            />
            <section className="container mx-auto relative">
                <h1 className="text-8xl flex justify-center text-green-400 font-bold cursive mb-5">Blog Posts Page</h1>
                <h2 className="text-4xl flex justify-center text-green-300 mb-20 ">Welcome to My Page of Blog Post!</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) =>( 
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" 
                            key={index} 
                            >
                                <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className="w-full h-full rounded-r object-cover absolute"
                                />
                                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    {post.title}
                                    </h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>

    )
}