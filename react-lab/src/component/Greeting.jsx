import React from "react";
import "../App.css";

function Greeting({ name }) {
  return (
    <div className="greeting-card">
      <h2>💌 Happy Day, {name}!</h2>
      <p>You are amazing!</p>
      <p>Wishing you joy 😊</p>
    </div>
  );
}

export default Greeting;
