// "use client";
// //(use client)--> This tells Next.js that the component should run on the client side, since it uses hooks (useState).
// import Link from "next/link";
// //Link is used for client-side navigation in Next.js.
// import Logo from "./Logo";
// import {
//   DribbbleIcon,
//   GithubIcon,
//   LinkedinIcon,
//   MoonIcon,
//   SunIcon,
//   TwitterIcon,
// } from "../Icons";
// import siteMetadata from "@/src/utils/siteMetaData";
// import { useState } from "react";
// import { cx } from "@/src/utils";
// import { useThemeSwitch } from "../Hooks/useThemeSwitch";

// const Header = () => {
//   const [mode,setMode]=useThemeSwitch();
//   // Removed useThemeSwitch hook usage to avoid the error.
//   const [click, setClick] = useState(false);

//   const toggle = () => {
//     setClick(!click);
//   };

//   return (
//     //Defines the header layout.
//     <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
//       <Logo />

//       {/* Hamburger Menu for Mobile */}
//       <button
//         className="inline-block sm:hidden z-50"
//         onClick={toggle}
//         aria-label="Hamburger Menu"
//       >
//         <div className="w-6 cursor-pointer transition-all ease duration-300">
//           <div className="relative">
//             <span
//               className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
//               style={{
//                 transform: click
//                   ? "rotate(-45deg) translateY(0)"
//                   : "rotate(0deg) translateY(6px)",
//               }}
//             >
//               &nbsp;
//             </span>
//             <span
//               className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
//               style={{
//                 opacity: click ? 0 : 1,
//               }}
//             >
//               &nbsp;
//             </span>
//             <span
//               className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
//               style={{
//                 transform: click
//                   ? "rotate(45deg) translateY(0)"
//                   : "rotate(0deg) translateY(-6px)",
//               }}
//             >
//               &nbsp;
//             </span>
//           </div>
//         </div>
//       </button>

//       {/* Mobile Navigation */}
//       <nav
//         className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center flex sm:hidden fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300"
//         style={{
//           top: click ? "1rem" : "-5rem",
//         }}
//       >
//         <Link href="/" className="mr-2">
//           Home
//         </Link>
//         <Link href="/about" className="mx-2">
//           About
//         </Link>
//         <Link href="/contact" className="mx-2">
//           Contact
//         </Link>
//         <button onClick={()=> setMode(mode === "light" ? "dark" : "light")}>
//           <SunIcon />
//         </button>
//       </nav>

//       {/* Desktop Navigation */}
//       <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center hidden sm:flex fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50">
//         <Link href="/" className="mr-2">
//           Home
//         </Link>
//         <Link href="/about" className="mx-2">
//           About
//         </Link>
//         <Link href="/contact" className="mx-2">
//           Contact
//         </Link>
//         <button>
//           <SunIcon />
//         </button>
//       </nav>

//       {/* Social Icons */}
//       <div className="hidden sm:flex items-center">
//         <a
//           href={siteMetadata.linkedin}
//           rel="noopener noreferrer"
//           className="inline-block w-6 h-6 mr-4"
//           aria-label="Reach out to me via LinkedIn"
//           target="_blank"
//         >
//           <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
//         </a>
//         <a
//           href={siteMetadata.facebook}
//           rel="noopener noreferrer"
//           className="inline-block w-6 h-6 mr-4"
//           aria-label="Reach out to me via Twitter"
//           target="_blank"
//         >
//           <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
//         </a>
//         <a
//           href={siteMetadata.github}
//           rel="noopener noreferrer"
//           className="inline-block w-6 h-6 mr-4"
//           aria-label="Check my profile on Github"
//           target="_blank"
//         >
//           <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
//         </a>
//         {/* <a
//           href={siteMetadata.dribbble}
//           rel="noopener noreferrer"
//           className="inline-block w-6 h-6 mr-4"
//           aria-label="Check my profile on Dribbble"
//           target="_blank"
//         >
//           <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
//         </a> */}
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useState } from "react";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />

      {/* Hamburger Menu for Mobile */}
      <button
        className="inline-block sm:hidden z-50"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            />
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{ opacity: click ? 0 : 1 }}
            />
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            />
          </div>
        </div>
      </button>

      {/* Mobile Navigation */}
      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark dark:border-light rounded-full font-medium capitalize items-center flex sm:hidden fixed top-6 right-1/2 translate-x-1/2 bg-light/80 dark:bg-dark/80 backdrop-blur-sm z-50 transition-all ease duration-300"
        style={{ top: click ? "1rem" : "-5rem" }}
      >
        <Link href="/" className="mr-2 text-dark dark:text-light transition-colors">
          Home
        </Link>
        <Link href="/about" className="mx-2 text-dark dark:text-light transition-colors">
          About
        </Link>
        <Link href="/contact" className="mx-2 text-dark dark:text-light transition-colors">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-4 text-dark dark:text-light transition-colors"
          aria-label="Toggle Theme"
        >
          {mode === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>

      {/* Desktop Navigation */}
      <nav className="w-max py-3 px-8 border border-solid border-dark dark:border-light rounded-full font-medium capitalize items-center hidden sm:flex fixed top-6 right-1/2 translate-x-1/2 bg-light/80 dark:bg-dark/80 backdrop-blur-sm z-50">
        <Link href="/" className="mr-2 text-dark dark:text-light transition-colors">
          Home
        </Link>
        <Link href="/about" className="mx-2 text-dark dark:text-light transition-colors">
          About
        </Link>
        <Link href="/contact" className="mx-2 text-dark dark:text-light transition-colors">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-4 text-dark dark:text-light transition-colors"
          aria-label="Toggle Theme"
        >
          {mode === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>

      {/* Social Icons */}
      <div className="hidden sm:flex items-center">
        <a
          href={siteMetadata.linkedin}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="GitHub"
          target="_blank"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div>
    </header>
  );
};

export default Header;
