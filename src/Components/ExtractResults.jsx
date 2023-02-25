import React from "react";

function ExtractResults({ image, colors, share }) {
  return (
    <div className="flex flex-col mb-20 w-full sm:w-96  bg-base-100 border rounded-xl border-slate-200">
      <figure className="bg-slate-100 px-5 py-5 rounded-t-xl ">
        <img src={image} alt="Shoes" className="object-cover" />
      </figure>
      <div className=" border-t border-slate-200 flex flex-col items-center text-center">
        <h2 className="card-title ">Palette</h2>

        {colors.length ? (
          <div className="py-2">
            <div className="grid grid-cols-5 my-5">{colors}</div>
            <button className="btn btn-primary w-full" onClick={share}>
              Share
            </button>
          </div>
        ) : (
          <div>Hit that extract button</div>
        )}
      </div>
    </div>
  );
}

export default ExtractResults;
