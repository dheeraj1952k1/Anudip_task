import React, { useState } from "react";

const BgChanger = () => {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
          height: "100vh",
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ display: "flex", color: "black" }}>
          Click a button to change background color
        </h1>
        <br />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            onClick={() => changeColor("red")}
            style={{
              backgroundColor: "red",
              color: "white",
              margin: "5px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Red
          </button>
          <button
            onClick={() => changeColor("green")}
            style={{
              backgroundColor: "green",
              color: "white",
              margin: "5px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Green
          </button>
          <button
            onClick={() => changeColor("blue")}
            style={{
              backgroundColor: "blue",
              color: "white",
              margin: "5px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Blue
          </button>
          <button
            onClick={() => changeColor("orange")}
            style={{
              backgroundColor: "orange",
              color: "white",
              margin: "5px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Orange
          </button>
          <button
            onClick={() => changeColor("purple")}
            style={{
              backgroundColor: "purple",
              color: "white",
              margin: "5px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            Purple
          </button>
        </div>
      </div>
    </>
  );
};

export default BgChanger;
