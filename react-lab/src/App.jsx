import React, { useState } from "react";
import GreetingCard from "./component/Greeting";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    if (name.trim()) {
      setCards([...cards, name]);
      setName("");
    }
  };

  return (
    <div className="app">
      <h1>Greeting Card Generator</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddCard}>Create Greeting Card</button>
      </div>
      <div className="cards-container">
        {cards.map((cardName, index) => (
          <GreetingCard key={index} name={cardName} />
        ))}
      </div>
    </div>
  );
}

export default App;
