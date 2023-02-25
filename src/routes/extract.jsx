import React, { useEffect, useState } from "react";
import { extractColorsFromSrc } from "extract-colors";
import ExtractResults from "../Components/ExtractResults";
import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";
import { db } from "../db";

function Extract() {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [navigator, setNavigator] = useState();
  const [palette, setPalette] = useState([]);
  //can add a thing where only one image can be selected will do this
  const onSelectImage = (e) => {
    console.log(e);
    if (e.target.files.length) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setColors([]);
      setPalette([]);
    } else {
      setImage(null);
    }
  };

  const activateShare = async (e) => {
    console.log(e, colors);
    const url = `https://mobile-dev-pwa-demo.vercel.app/palette/${palette
      .map((color) => color.replace("#", ""))
      .join("-")}`;
    const shareData = {
      title: "Color Palette",
      text: "What's good? checkout this palette!",
      url: url
    };

    console.log("shareData", shareData);

    try {
      await window.navigator.share(shareData);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const extractDaColors = async () => {
    //get the colors
    const colors = await extractColorsFromSrc(image).catch(console.error);
    const justTheColors = colors.map((color) => color.hex);
    setPalette(justTheColors);
    setColors(
      justTheColors.map((color, key) => (
        <div className="tooltip" data-tip={color}>
          <div
            key={"result " + key}
            style={{
              backgroundColor: color,
              color: color,
              padding: 4
            }}
          >
            <span className="text-sm">{color}</span>
          </div>
        </div>
      ))
    );

    //add to db

    const id = await db.colorHistory
      .add({ colors: justTheColors })
      .catch(console.error);
    console.log("doen", id);
  };

  // useEffect(() => {
  //   setNavigator(window.navigator);
  // }, []);

  return (
    <div className="container flex-grow flex flex-col items-center mx-auto  px-5">
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
        <ExtractResults image={image} colors={colors} share={activateShare} />
      )}
    </div>
  );
}

export default Extract;
