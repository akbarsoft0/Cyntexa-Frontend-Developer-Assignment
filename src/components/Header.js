import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black p-4 text-xl uppercase text-white ">
      <div className="max-w-screen-xl m-auto flex justify-between align-baseline">
        <h1 className="text-2xl font-bold">
          <Link to="/">akbar</Link>
        </h1>
        <ul className="flex gap-4">
          <li className="font-semibold text-gray-300 hover:text-white">
            <Link to="/dashboard">dashboard</Link>
          </li>
          <li className="font-semibold text-gray-300 hover:text-white">
            <Link to="/list">list</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
