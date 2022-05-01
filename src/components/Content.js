import React, { useState } from "react";
import Btnthree from "./Btnthree";

export default function Content() {
  const [filltext, setText] = useState("Enter text");
  const HandleOnClick = () => {
    console.log("onClick -", filltext);
    let newText = filltext.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("onChange -", filltext);
    setText(event.target.value);
  };
  return (
    <>
      <div className="h-[512px] w-screen bg-neutral-900 flex flex-col items-center justify-center">
        <textarea
          className="m-3 rounded-lg"
          onChange={handleOnChange}
          value={filltext}
          name="capitalizer"
          id="nocap_8912"
          cols="50"
          rows="5"
        ></textarea>
        <Btnthree text="Convert to Uppercase" onClick={HandleOnClick} />
      </div>
    </>
  );
}
