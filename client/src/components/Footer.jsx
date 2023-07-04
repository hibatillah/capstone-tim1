import React from "react";
import { Github } from "./Svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex justify-between items-center px-12 py-3 bg-white dark:bg-black-dark z-20">
      <div className="text-grey-dark text-sm select-none">{year} &copy; Tim 1 Capstone</div>
      <a
        href="http://github.com/hibatillah/capstone-tim1"
        target="_blank"
        rel="noopener noreferrer"
        className="fill-grey-dark hover:fill-primary dark:hover:fill-primary-light"
      >
        <Github />
      </a>
    </footer>
  );
};

export default Footer;
