import React, { useState } from "react";
import { extractColorsFromSrc } from "extract-colors";

function Extract() {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  //can add a thing where only one image can be selected will do this
  const onSelectImage = (e) => {
    console.log(e);
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setImage(null);
    }
  };

  const extractDaColors = async () => {
    const colors = await extractColorsFromSrc(image).catch(console.error);
    setColors(
      colors.map((color, key) => (
        <div
          key={"result " + key}
          style={{ backgroundColor: color.hex }}
          className={`badge m-1 badge-md`}
        ></div>
      ))
    );
  };
  return (
    <div className="container flex flex-col items-center mx-auto h-full px-5">
      <div className="h-1/3 w-full mx-auto my-14 flex flex-col justify-center items-center text-center prose">
        <h1>Extract</h1>
        <div>Create palettes from your photos</div>
      </div>

      <div className="form-control mb-10 w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick an Image</span>
        </label>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={onSelectImage}
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
      </div>

      <button
        className={"btn btn-primary mb-10"}
        onClick={extractDaColors}
        disabled={!image}
      >
        Extract
      </button>

      {/* would then have the results panel here */}

      {image && (
        <div className="card lg:card-side bg-base-100 mb-20 shadow-xl">
          <figure>
            <img src={image} alt="Album" />
          </figure>
          <div className="card-body">
            <h4 className="prose">Colours</h4>
            <div className="flex flex-wrap">{colors}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Extract;
