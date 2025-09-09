// import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  return (
    <div>
      {data.map((dataItem) => (
        <h3>{dataItem.question}</h3>
      ))}
    </div>
  );
}
