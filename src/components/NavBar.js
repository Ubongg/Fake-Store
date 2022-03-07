import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../data";
import SignInOut from "../SignInOut";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = "100vh";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className={`${showLinks ? "nav-center shadow" : "nav-center"}`}>
      <div className="nav-header">
        <Link to="/">
          {/* <img src={logo} alt="yubo" /> */}
          <h1 className="logo">
            Fake<span>store</span>
          </h1>
        </Link>
        <button
          className={`${showLinks ? "nav-toggle show" : "nav-toggle"}`}
          onClick={toggleLinks}
        >
          {showLinks ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id} onClick={toggleLinks}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <SignInOut />
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a target="_blank" href={url}>
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
