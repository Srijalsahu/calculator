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
    let ans = eval(inputValue.toString());
    if (isNaN(ans) || !isFinite(ans)) {
      setResult("Error");
    } else {
      setResult(ans);
    }
  };

  return (
    <div className={styles.calculator}>
      <h2>React Calculator</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputField}
          value={inputValue}
          readOnly
        />
      </div>
      <div className={styles.resultContainer}>
        <p>{result}</p>
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.numberButton} onClick={() => handleInput("7")}>
          7
        </button>
        <button className={styles.numberButton} onClick={() => handleInput("8")}>
          8
        </button>
        <button className={styles.numberButton} onClick={() => handleInput("9")}>
          9
        </button>
        <button className={styles.operatorButton} onClick={() => handleInput("+")}>
          +
        </button>
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.numberButton} onClick={() => handleInput("4")}>
          4
        </button>
        <button className={styles.numberButton} onClick={() => handleInput("5")}>
          5
        </button>
        <button className={styles.numberButton} onClick={() => handleInput("6")}>
          6
        </button>
        <button className={styles.operatorButton} onClick={() => handleInput("-")}>
          -
        </button>
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.numberButton} onClick={() => handleInput("1")}>
          1
        </button>
        <button className={styles.numberButton} onClick={() => handleInput("2")}>
          2
        </button>
        <button className={styles.numberButton} onClick={() => handleInput("3")}>
          3
        </button>
        <button className={styles.operatorButton} onClick={() => handleInput("*")}>
          *
        </button>
      </div>
      <div className={styles.buttonRow}>
        <button className={styles.clearButton} onClick={clearInput}>
          C
        </button>
        <button className={styles.numberButton} onClick={() => handleInput("0")}>
          0
        </button>
        <button className={styles.equalButton} onClick={printResult}>
          =
        </button>
        <button className={styles.operatorButton} onClick={() => handleInput("/")}>
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
