import React from "react";
import image from "../images/jacek.jpg";

export default function Home() {
  return (
    <main>
      <img src={image} alt="Jacek" className="absolute w-full " />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64">
        <h1 className="text-6xl font-bold cursive leading-none lg:leading-snug home-name text-white">
          Cześć
        </h1>
      </section>
    </main>
  );
}
