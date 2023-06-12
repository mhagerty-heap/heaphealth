import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" id="mainNavLogo"/>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      id="mainNavHome"
                      href="/"
                      className={`nav-link ${
                        currentPath == "/" && "active"
                      }`}
                    >
                      Home
                    </Link>

                  </li>

                  <li className="nav-item">
                    <Link
                      id="mainNavAbout"
                      href="/about/"
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      id="mainNavServices"
                      href="/services/"
                      className={`nav-link ${
                        currentPath == "/services/" && "active"
                      }`}
                    >
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      id="mainNavDoctors"
                      href="/doctors/"
                      className={`nav-link ${
                        currentPath == "/doctors/" && "active"
                      }`}
                    >
                      Doctors
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      id="mainNavBlog"
                      href="/blog/"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      id="mainNavContact"
                      href="/contact"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <Link id="navBarAppointmentLink" href="/appointment/" className={`nav-link ${currentPath == "/appointment/" && "active"}`}>
                    <Image id="navBarAppointmentImage" src="/images/home-three/getAppointment.png" width="150" height="50" alt="Get Appointment"></Image>
                </Link>
              </div>

            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
