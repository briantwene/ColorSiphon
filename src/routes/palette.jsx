import React from "react";
import {
  activateShare,
  generatePaletteFromLink,
  getContrastYIQ
} from "../utils";
import { useLoaderData } from "react-router-dom";
import ColoredDivCopy from "../Components/ColoredDivCopy";

export async function loader({ params }) {
  const palette = await generatePaletteFromLink(params.paletteId);

  return { palette };
}

export default function Palette() {
  const { palette } = useLoaderData();

  return (
    <div className="container grow flex flex-col mx-auto pt-5 px-5">
      <div className="h-30 sm:h-1/4 w-full flex flex-col sm:flex-row sm:justify-between items-center">
        <h1 className="text-4xl text-black font-bold mb-10 sm:m-0">Palette</h1>
        <button
          className="btn btn-primary"
          onClick={() => activateShare(palette)}
        >
          Share
        </button>
      </div>
      <div className="w-full border flex flex-wrap rounded-xl overflow-hidden my-12">
        {palette.map((color) => (
          <ColoredDivCopy color={color} />
        ))}
      </div>
    </div>
  );
}
