import React from "react";
import { activateShare, generatePaletteLink } from "../utils";
import ColoredDiv from "./ColoredDiv";

function PaletteContainer({ palette }) {
  const link = generatePaletteLink(palette.colors, true);
  return (
    <div className="h-36 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col p-3">
      <div className="h-2/5 prose-h2 font-poppins flex justify-between items-center mb-1">
        <span className="text-black font-semibold">#{palette.id}</span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => activateShare(palette.colors)}
        >
          Share
        </button>
      </div>
      <a className="grow" href={link}>
        <div className="border h-full rounded-xl grid grid-cols-custom overflow-hidden">
          {palette.colors.map((color) => (
            <ColoredDiv color={color} />
          ))}
        </div>
      </a>
    </div>
  );
}

export default PaletteContainer;
