/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className={isNavExpanded ? "navbar expanded" : "navbar"}>
      <div className="logo">
        <a href="#">Bitcoin Prices</a>
      </div>
      <ul className={isNavExpanded ? "nav-list expanded" : "nav-list"}>
        <li className="list-item">
          <a href="/">Home</a>
        </li>
        <li className="list-item">
          <a href="/about">About</a>
        </li>
      </ul>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
