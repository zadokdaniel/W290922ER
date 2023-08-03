import { useState } from "react";

const ColorPicker = ({ initialColor = "yellow" }) => {
  const [color, setColor] = useState(initialColor);

  return (
    <div>
      <div style={{ width: "100px", height: "100px", backgroundColor: color }}>
        {color}
      </div>

      <button className="btn btn-primary" onClick={() => setColor("yellow")}>
        yellow
      </button>
      <button className="btn btn-primary" onClick={() => setColor("green")}>
        green
      </button>
      <button className="btn btn-primary" onClick={() => setColor("red")}>
        red
      </button>
    </div>
  );
};

export default ColorPicker;
