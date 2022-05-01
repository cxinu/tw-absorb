import React from "react";
import Btnthree from "./Btnthree";

export default function Navbar() {
  return (
    <>
      <nav className="relative flex flex-row px-3 items-center w-screen bg-violet-800 text-white border-b-[5px] border-violet-900 cursor-pointer">
        <div className="navbar-wrap">
          <img src="logo512.png" className="h-9" alt="logo" />
        </div>
        <Btnthree text="A" />
        <Btnthree text="B" />
        <Btnthree text="C" />
        <Btnthree text="D" />
        <Btnthree text="E" />
        <Btnthree text="F" />
        <Btnthree text="U" />
      </nav>
    </>
  );
}
