import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import ColoredDiv from "../Components/ColoredDiv";
import { db } from "../db";

function History() {
  const history = useLiveQuery(() => db.colorHistory.toArray());
  console.log("history data", history);

  const mappedHistory = () => {
    return history?.map((item) => (
      <div>
        {item.colors.map((color) => (
          <ColoredDiv color={color} />
        ))}
      </div>
    ));
  };
  return (
    <div className="container flex-grow flex flex-col items-center mx-auto px-5">
      <div className="h-1/3 w-full mx-auto my-14 flex flex-col justify-center items-center text-center prose">
        <h1>History</h1>
        <div>All previous discovers live here</div>
      </div>

      <div>palette containers</div>
      <div className="flex">{mappedHistory()}</div>
    </div>
  );
}

export default History;
