import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [isNumber, setIsNumber] = useState(true);
  const [isSpecialChar, setIsSpecialChar] = useState(true);
  const [copied, setCopied] = useState(false); // New: Feedback state

  const createPassword = () => {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "0123456789";
    let symbols = "!@#$%^&*";

    let AllChars = letters;
    if (isNumber) AllChars += nums;
    if (isSpecialChar) AllChars += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * AllChars.length);
      password += AllChars[index];
    }

    setPassword(password);
    setCopied(false); // Reset copied status on new password
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#cfe8fc",
      }}
    >
      <div
        style={{
          padding: "20px",
          background: "#a0d2eb",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Password Maker</h2>

        <input
          type="text"
          value={password}
          readOnly
          placeholder="Your password"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        />

        {/* Copy button */}
        {password && (
          <button
            onClick={copyToClipboard}
            style={{
              marginTop: "5px",
              width: "100%",
              padding: "8px",
              background: copied ? "#28a745" : "#444",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}

        <label>
          Length: {length}
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </label>

        <div>
          <label>
            <input
              type="checkbox"
              checked={isNumber}
              onChange={() => setIsNumber(!isNumber)}
            />
            Use Numbers
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={isSpecialChar}
              onChange={() => setIsSpecialChar(!isSpecialChar)}
            />
            Use Symbols
          </label>
        </div>

        <button
          onClick={createPassword}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            background: "#0077cc",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
