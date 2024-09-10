import React, { useState } from 'react';

// 메인 계산기 컴포넌트
function MyCalc() {
  const [number1, setNumber1] = useState("");  // 첫 번째 숫자를 위한 상태
  const [operator, setOperator] = useState("");  // 연산자를 위한 상태
  const [number2, setNumber2] = useState("");  // 두 번째 숫자를 위한 상태
  const [result, setResult] = useState("");  // 결과를 저장할 상태

  // 각 입력 필드를 업데이트하는 함수들
  const handleNumber1Change = (e) => {
    setNumber1(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const handleNumber2Change = (e) => {
    setNumber2(e.target.value);
  };

  // 계산 결과를 처리하는 함수
  const handleEvaluate = () => {
    if (operator && !isNaN(number1) && !isNaN(number2)) {
      try {
        const result = eval(`${number1}${operator}${number2}`);
        setResult(result.toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setResult("Invalid input");
    }
  };

  return (
    <div className="MyCalc">
      <CalcHeader />
      <CalcBody 
        number1={number1} 
        operator={operator} 
        number2={number2} 
        onNumber1Change={handleNumber1Change} 
        onOperatorChange={handleOperatorChange} 
        onNumber2Change={handleNumber2Change} 
        onEvaluate={handleEvaluate} 
      />
      <CalcResult result={result} />
    </div>
  );
}

// 계산기 헤더 컴포넌트
function CalcHeader() {
  return (
    <div className="CalcHeader">
      <h1>계산기</h1>
    </div>
  );
}

// 입력과 버튼을 포함하는 바디 컴포넌트
function CalcBody({ number1, operator, number2, onNumber1Change, onOperatorChange, onNumber2Change, onEvaluate }) {
  return (
    <div className="CalcBody">
      <input type="text" value={number1} onChange={onNumber1Change} placeholder="첫 번째 숫자" />
      <input type="text" value={operator} onChange={onOperatorChange} placeholder="연산자" />
      <input type="text" value={number2} onChange={onNumber2Change} placeholder="두 번째 숫자" />
      <button onClick={onEvaluate}>계산</button>
    </div>
  );
}

// 결과를 표시하는 컴포넌트
function CalcResult({ result }) {
  return (
    <div className="CalcResult">
      <h2>결과: {result}</h2>
    </div>
  );
}

export default MyCalc;