import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">ChatGPT Clone</h1>

      <div className="grid-main">
        {arrayItems.map((item) => (
          <div
            key={item.name} // Add the key prop here with a unique value
            className="grid-child"
            onClick={() => selectOption(item.option)}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
