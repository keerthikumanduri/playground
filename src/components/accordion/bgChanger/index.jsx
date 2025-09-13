import { useState } from "react";
import "./styles.css";

function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

function generateRandomHEX() {
  const randomColor = Math.floor(Math.random() * 0xffffff);
  const hexColor = "#" + randomColor.toString(16).padStart("6", "0");
  return hexColor;
}

export default function BgChanger() {
  const [colorMode, setColorMode] = useState("rgb");
  const [color, setColor] = useState("white");
  return (
    <div
      style={{ backgroundColor: color, height: "100vh", width: "100vw" }}
      className="main-div"
    >
      <div className="buttons-div">
        <button onClick={() => setColorMode("hex")}>Use Hex</button>
        <button onClick={() => setColorMode("rgb")}>Use RGB</button>
        <button
          onClick={() =>
            setColor(
              colorMode === "rgb" ? generateRandomRGB() : generateRandomHEX()
            )
          }
        >
          Generate Random Color
        </button>
      </div>
      <p>Current Mode: {colorMode}</p>
      <p>{color}</p>
    </div>
  );
}
