import React, { useState } from 'react';
import styles from './calculator.module.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        if (!input.trim()) {
          throw new Error('Incomplete Expression');
        }
        const result = eval(input);
        if (isNaN(result)) {
          throw new Error('Invalid Expression');
        }
        setInput(result.toString());
        setError(false);
      } catch (error) {
        setInput('');
        setError(true);
      }
    } else if (value === 'C') {
      setInput('');
      setError(false);
    } else {
      setInput((prevInput) => prevInput + value);
      setError(false);
    }
  };

  return (
    <div className={styles.calculator}>
      <input className={styles.inputField} type="text" value={input} readOnly />
      {error && <div className={styles.error}>Error</div>}
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
