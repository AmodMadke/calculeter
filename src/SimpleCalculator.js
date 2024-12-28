// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div >
//         <h1>CALCULETER</h1>
      
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './SimpleCalculator.css'; // Import the CSS file

function SimpleCalculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const handleButtonClick = (value) => {
    if (displayValue === '0' && value !== '.') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setFirstOperand(parseFloat(displayValue));
    setDisplayValue('0');
  };

  const handleEqualsClick = () => {
    const secondOperand = parseFloat(displayValue);
    let result;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstOperand(null);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstOperand(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleEqualsClick()}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleClearClick()}>C</button>
      </div>
    </div>
  );
}

export default SimpleCalculator;