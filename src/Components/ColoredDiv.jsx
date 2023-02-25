import React from "react";

function ColoredDiv({ color }) {
  return (
    <div style={{ backgroundColor: color }} className={`bg-[${color}]`}>
      {color}
    </div>
  );
}

export default ColoredDiv;
