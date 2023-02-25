import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import ColoredDiv from "../Components/ColoredDiv";
import PaletteContainer from "../Components/PaletteContainer";
import { db } from "../db";
("w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden m-10");
function History() {
  const history = useLiveQuery(() => db.colorHistory.toArray());
  console.log("history data", history);

  const mappedHistory = history?.map((item) => (
    <PaletteContainer palette={item} />
  ));

  return (
    <div className="flex-grow flex flex-col items-center">
      <div className="h-1/3 w-full mx-auto my-14 flex flex-col justify-center items-center text-center prose">
        <h1 className="text-black">History</h1>
        <div>All previous discoveries live here</div>
      </div>

      <div className=" flex flex-wrap w-full">{mappedHistory}</div>
    </div>
  );
}
export default History;
