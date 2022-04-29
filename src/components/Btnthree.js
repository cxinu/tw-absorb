import React from "react";

export default function Btnthree({ text }) {
  return (
    <div className="navbar-wrap">
      <div class="my-auto">
        <div class="px-3 py-1 bg-gray-200 text-black rounded-lg border-b-4 border-b-gray-400 hover:border-b-0 transition-all ease-in-out duration-100">
          {text}
        </div>
      </div>
    </div>
  );
}
