import React, { useState } from 'react';
import styles from './calculator.module.css';
import { evaluate } from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      let result = evaluate(input);
      // Check for special cases: division by zero and zero by zero
      if (!Number.isFinite(result)) {
        if (isNaN(result)) {
          // Handle zero by zero case
          setInput('NaN');
        } else {
          // Handle division by zero case
          setInput('Infinity');
        }
      } else {
        setInput(result.toString());
      }
    } catch (error) {
      setInput('Error');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  return (
    <div className={styles.calculator}>
      <input type="text" value={input} readOnly className={styles.input} />
      <div className={styles.buttons}>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
      </div>
      <div className={styles.buttons}>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={clearInput}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
