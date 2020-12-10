import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-black bg-opacity-50">
      <div className="container mx-auto flex justify-between">
        <nav className="flex items-center">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-black text-opacity-75 hover:text-black text-opacity-25 transition duration-300 ease-in-out text-4xl font-bold cursive tracking-widest"
          >
            Jacek
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-black bg-opacity-25"
            className="inline-flex item-center py-3 px-3 my-6 rounded text-black text-opacity-25 hover:text-black text-opacity-75"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-black bg-opacity-25"
            className="inline-flex item-center py-3 px-3 my-6 rounded text-black text-opacity-25 hover:text-black text-opacity-75"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-black bg-opacity-25"
            className="inline-flex item-center py-3 px-3 my-6 rounded text-black text-opacity-25 hover:text-black text-opacity-75"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.facebook.com/jacek.nagrodzki"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
        </div>
      </div>
    </header>
  );
}
