import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";

import { Link } from "react-router-dom";
import Container from "../Container";
import NavItem from "./NavItem";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="sticky right-0 top-0 z-50 bg-[#131022]">
      <Container>
        <nav className="md:flex justify-between items-center">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                src="https://ecsimage.com/wp/wp-content/uploads/2015/05/ECS-logo-final.jpg"
                alt="logo"
              />
            </Link>
            {showNav ? (
              <HiOutlineMenuAlt2
                onClick={() => setShowNav(!showNav)}
                className="md:hidden block w-10 h-10 p-2 cursor-pointer"
              />
            ) : (
              <HiOutlineMenuAlt3
                onClick={() => setShowNav(!showNav)}
                className="md:hidden block w-10 h-10 p-2 cursor-pointer"
              />
            )}
          </div>

          <ul
            className={
              (showNav ? "right-0" : "-left-full") +
              " md:static fixed bottom-0 top-[4.5rem] md:flex md:space-x-6  items-center md:bg-transparent bg-[#1F1C2D] md:w-auto w-10/12  text-white md:space-y-0 space-y-5 p-3"
            }
          >
            <NavItem content="Home" href="/" />
            <NavItem content="About the Company" href="/about" />
            <NavItem content="Our Platform" href="/platform" />
            <NavItem content="Our Work" href="/Work" />
            <NavItem content="News Media" href="/media" />
            <NavItem content="Contact" href="/contact" />
          </ul>
        </nav>
      </Container>{" "}
    </div>
  );
}

export default Navbar;
