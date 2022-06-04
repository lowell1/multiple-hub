import { useState, useRef } from "react";
import { hamburger, hamburgerOpen } from "./Nav.module.scss";
import Link from "next/link";
import DonateButton from "../DonateButton";

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
    <button onClick={expandNav}>
      <svg
        viewBox="0 0 100 80"
        className={`${hamburger} ${navExpanded ? hamburgerOpen : ""} w-full`}
      >
        <path className="transition[d] duration-200 linear" />
      </svg>
    </button>
  );
}

function MobileNavLinks({ navExpanded }) {
  return (
    <div
      className={`transition opacity duration-500 flex flex-col grow bg-white h-full p-4 ${
        navExpanded ? "" : "opacity-0"
      }`}
    >
      <ul className="grow flex flex-col justify-center">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>
              <a
                className={`block text-center text-[8vmin] py-3 opacity duration-500 ${
                  navExpanded ? "" : "opacity-0"
                }`}
              >
                {link.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <button className="self-center bg-black rounded-full text-white px-8 py-4 text-[6vmin]">
        Donate
      </button>
    </div>
  );
}

export default function Nav() {
  const [navExpanded, setNavExpanded] = useState("false");

  return (
    <nav>
      <div className="flex justify-between items-center h-20 p-4">
        <img
          className="h-full"
          src="/images/multiple-logo.png"
          alt="Multiple Hub"
        />
        <ul className="hidden md:inline-block">
          {navLinks.map((link) => (
            <li className="inline mr-4" key={link.path}>
              <Link href={link.path}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))}
          <span className="w-32 inline-block">
            <DonateButton />
          </span>
        </ul>
        <span className="w-8 md:hidden">
          <MobileNavToggle
            setNavExpanded={setNavExpanded}
            navExpanded={navExpanded}
          />
        </span>
      </div>
      <div className="h-[calc(100vh-theme(spacing.20))] absolute w-full md:hidden">
        <MobileNavLinks navExpanded={navExpanded} />
      </div>
    </nav>
  );
}
