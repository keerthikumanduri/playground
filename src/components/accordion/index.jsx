import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [openId, setOpenId] = useState(null); // single-select
  const [openIds, setOpenIds] = useState([]); // multi-select
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);

  const handleClick = (id) => {
    if (enableMultiSelect) {
      // Multi-select toggle
      if (openIds.includes(id)) {
        setOpenIds(openIds.filter((itemId) => itemId !== id));
      } else {
        setOpenIds([...openIds, id]);
      }
    } else {
      // Single-select toggle
      setOpenId(openId === id ? null : id);
    }
  };

  const isItemOpen = (id) => {
    return enableMultiSelect ? openIds.includes(id) : openId === id;
  };

  return (
    <div>
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        {enableMultiSelect ? "Disable Multi Select" : "Enable Multi Select"}
      </button>

      {data.map((dataItem) => (
        <div key={dataItem.id}>
          <h3 className="title" onClick={() => handleClick(dataItem.id)}>
            {dataItem.question}
          </h3>
          {isItemOpen(dataItem.id) && <p>{dataItem.answer}</p>}
        </div>
      ))}
    </div>
  );
}
