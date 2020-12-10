import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import mural from "../images/mural.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="absolute h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );
  return (
    <main className="relative">
      <img
        src={mural}
        alt="Mural"
        className="absolute w-full object-cover h-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-black bg-opacity-50 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 lg:w-64 mr-8"
          />
          <div className="text-lg flex-col justify-center">
            <h1 className="cursive text-6xl text-white text-opacity-50 mb-4">
              Hey there. I'm {""}
              <span className="text-white text-opacity-50">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white text-opacity-50">
              <BlockContent
                blocks={author.bio}
                projectId="3g5gr58p"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
