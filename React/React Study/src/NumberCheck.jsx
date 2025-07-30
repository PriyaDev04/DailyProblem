import React, { useState } from "react";
import './style.css'


function EvenOrOddChecker() {
    const [number, setNumber] = useState("");
    const [status, setStatus] = useState("");
    const [result, setResult] = useState("");

    const handleCheck = () => {
        if (number.trim() === "" || isNaN(Number(number))) {
            setResult("❌ Please enter a valid number");
            return;
        }

        setStatus("🔍 Checking...");
        setResult(""); // Clear previous result

        setTimeout(() => {
            const num = Number(number);
            const isEven = num % 2 === 0;
            setStatus("");
            setResult(`✅ The number ${num} is ${isEven ? "Even" : "Odd"}`);
        }, 1500); // 1.5 second delay for "checking"
    };

    return (
        <div className="even-odd-container">
            <h1 className="title">Even or Odd Checker</h1>

            <input
                className="number-input"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter a number"
            />

            <button className="check-button" onClick={handleCheck}>
                Check
            </button>

            <div className="result-area">
                {status && <div className="status">{status}</div>}
                {result && <div className="result">{result}</div>}
            </div>

            <div className="result-area">
                {status && <div className="status">{status}</div>}
                {result && <div className="result">{result}</div>}
            </div>

        </div>
    );
}

export default EvenOrOddChecker;
