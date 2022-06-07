import { useState, useRef } from "react";
import { hamburger, hamburgerOpen } from "./Nav.module.scss";
import Link from "next/link";

const navLinks = [
  { text: "Impact", path: "/impact" },
  { text: "Initiatives", path: "/initiatives" },
  { text: "Insights", path: "/insights" },
  { text: "Intentions", path: "/intentions" },
  { text: "Contact", path: "/contact" },
];

function MobileNavToggle({ setNavExpanded, navExpanded }) {
  function expandNav() {
    setNavExpanded((navExpanded) => !navExpanded);
  }

  return (
    <button className="h-full" onClick={expandNav}>
      <svg
        viewBox="0 0 100 80"
        className={`${hamburger} ${navExpanded ? hamburgerOpen : ""} h-full`}
      >
        <path className="transition[d] duration-200 linear" />
      </svg>
    </button>
  );
}

function MobileNavLinks({ navExpanded }) {
  const opacityTransition = "transition opacity duration-500 linear";

  return (
    <div
      className={`${opacityTransition} flex flex-col justify-between h-full bg-white pb-8 ${
        navExpanded ? "" : "opacity-0"
      }`}
    >
      <ul className="grow flex flex-col justify-center">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <a
                // className={`block text-center text-[8vmin] py-3 ${opacityTransition} ${
                className={`block text-center text-4xl md:text-5xl py-3 ${opacityTransition} ${
                  navExpanded ? "" : "opacity-0"
                }`}
              >
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <button className="self-center bg-black rounded-full text-white px-8 py-4 text-[6vmin]"> */}
      <button className="self-center bg-black rounded-full text-white px-8 py-4 text-3xl md:text-4xl">
        Donate
      </button>
    </div>
  );
}
export default function Nav() {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <nav>
      <div className="flex justify-between items-center h-36 p-8 lg:p-4 lg:h-28 ">
        <img
          className="max-h-full"
          src="/images/multiple-logo.png"
          alt="Multiple Hub"
        />
        <ul className="hidden lg:inline-block">
          {navLinks.map((link) => (
            <li className="inline mr-4" key={link.path}>
              <Link href={link.path}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
          <button className="bg-black rounded-full text-white px-8 py-4">
            Donate
          </button>
        </ul>
        <span className="h-2/5 lg:hidden">
          <MobileNavToggle
            setNavExpanded={setNavExpanded}
            navExpanded={navExpanded}
          />
        </span>
      </div>
      <div className="h-[calc(100vh-theme(spacing.36))] absolute w-full lg:hidden ">
        <MobileNavLinks navExpanded={navExpanded} />
      </div>
    </nav>
  );
}
