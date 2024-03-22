import React, { useState } from "react";
import styles from "./calculator.module.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  const clearInput = () => {
    setInputValue("");
    setResult("");
  };

  const printResult = () => {
    try {
      const ans = eval(inputValue);
      if (isNaN(ans) || !isFinite(ans)) {
        setResult(ans === Infinity ? "Infinity" : "NaN");
        return;
      }
      setResult(ans.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className={styles.calculator}>
      <h2>React Calculator</h2>
      <input
        type="text"
        className={styles.inputField}
        value={inputValue}
        readOnly
      />
      <div className={styles.resultContainer}>
        <p>{result}</p>
      </div>
      <div className={styles.buttonRow}>
        <button onClick={() => handleInput("7")}>7</button>
        <button onClick={() => handleInput("8")}>8</button>
        <button onClick={() => handleInput("9")}>9</button>
        <button onClick={() => handleInput("/")}>/</button>
      </div>
      <div className={styles.buttonRow}>
        <button onClick={() => handleInput("4")}>4</button>
        <button onClick={() => handleInput("5")}>5</button>
        <button onClick={() => handleInput("6")}>6</button>
        <button onClick={() => handleInput("*")}>*</button>
      </div>
      <div className={styles.buttonRow}>
        <button onClick={() => handleInput("1")}>1</button>
        <button onClick={() => handleInput("2")}>2</button>
        <button onClick={() => handleInput("3")}>3</button>
        <button onClick={() => handleInput("-")}>-</button>
      </div>
      <div className={styles.buttonRow}>
        <button onClick={() => handleInput("0")}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={printResult}>=</button>
        <button onClick={() => handleInput("+")}>+</button>
      </div>
    </div>
  );
};

export default Calculator;
