import React from "react";
import { useOutletContext } from "react-router-dom";

function Index() {
  const { download } = useOutletContext();
  return (
    <div className="container flex-grow flex flex-col items-center mx-auto px-5">
      <div className="h-1/3 w-full mx-auto my-14 flex flex-col justify-center items-center text-center prose">
        <h1 className="text-black">Welcome</h1>
        <p>Try the app 👇</p>
        <button className="btn btn-info" onClick={download}>
          Download PWA
        </button>
      </div>
    </div>
  );
}

export default Index;
