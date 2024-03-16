import React, { useState } from 'react';
import styles from './calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className={styles.calculator}>
      <input className={styles.input} type="text" value={input} readOnly />
      <div className={styles.buttons}>
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => handleButtonClick(num)}>
            {num}
          </button>
        ))}
        {['+', '-', '*', '/'].map((operator) => (
          <button key={operator} onClick={() => handleButtonClick(operator)}>
            {operator}
          </button>
        ))}
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
