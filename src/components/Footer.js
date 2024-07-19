import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black p-4 text-xl uppercase text-white ">
      <div className="max-w-screen-xl m-auto flex justify-between items-baseline">
        <a href="https://akbar63.netlify.app/">akbar</a>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/akbar63/"
              className="font-semibold text-gray-300 hover:text-white"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/akbarsoft0"
              className="font-semibold text-gray-300 hover:text-white"
            >
             <FaGithub />
            </a>
          </li>
       
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
