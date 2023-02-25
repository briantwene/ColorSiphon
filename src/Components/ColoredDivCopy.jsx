import React from "react";
import { getContrastYIQ } from "../utils";

export default function ColoredDivCopy({ color }) {
  const copyTextToClipboard = async (e) => {
    console.log(e);
    await navigator.clipboard.writeText(e.target.children[0].innerText);
    alert("Text copied");
  };

  return (
    <div
      onClick={copyTextToClipboard}
      style={{ backgroundColor: color }}
      className={`h-52 w-full sm:w-1/2 lg:w-1/3 xl:w-1/5 flex flex-col cursor-pointer justify-between`}
    >
      <span
        className={`uppercase font-bold text-lg p-3 text-${getContrastYIQ(
          color
        )} `}
      >
        {color}
      </span>

      <span
        className={`font-bold opacity-0 hover:opacity-100 transition-opacity  text-lg p-3 text-${getContrastYIQ(
          color
        )}`}
      >
        Copy
      </span>
    </div>
  );
}
