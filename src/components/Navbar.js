import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar () {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact 
                        //activeClassName applies when this page is active/being viewed
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
                    >
                        Phillip
                    </NavLink>
                    <NavLink 
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 tounded text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700"
                        >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to="/project" 
                        activeClassName="text-white"
                        className="inline-flex items-center py-3 px-3 my-6 tounded text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700"
                        >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        activeClassName="text-white"
                        className="inline-flex items-center py-3 px-3 my-6 tounded text-red-200 hover:text-green-800" 
                        activeClassName="text-red-100 bg-red-700"
                        >
                        About Me
                    </NavLink>
                    {/* <NavLink>
                        Phillip
                    </NavLink>
                    <NavLink>
                        Phillip
                    </NavLink> */}
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/phillipmerriman" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/phillip-merriman-jr-62227485/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/pm_merriman" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}
