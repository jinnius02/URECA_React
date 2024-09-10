import React, { useState } from "react";

import Mission from "./day0819/Mission/Mission";
import NumberInput from "./day0819/Mission/Components/NumberInput";
import Result from "./day0819/Mission/Components/Result";
import History from "./day0819/Mission/Components/History";

function App() {
  const [scoreHistory, setScoreHistory] = useState([]);
  const [count, setCount] = useState(0); // N번째 시도를 나타냄
  const [target, setTarget] = useState(Math.floor(Math.random() * 100 + 1)); // 정답? 난수? 어쩌고 저쩌고
  const [number, setNumber] = useState(1); // 입력값
  const [success, setSuccess] = useState(false); // 정답을 맞췄는지 판단

  return (
    <Mission>
      <h2>숫자 맞추기 게임</h2>
      <p>1 ~ 100 사이 컴퓨터의 숫자를 맞춰보세요!!</p>

      <div className="NumberInputWrapper">
        <NumberInput
          target={target}
          number={number}
          count={count}
          success={success}
          setNumber={setNumber}
          setCount={setCount}
        />
        <button
          disabled={!success}
          onClick={() => {
            setCount(0);
            setTarget(Math.floor(Math.random() * 100 + 1));
            setNumber(1);
            setSuccess(false);
          }}
        >
          새게임
        </button>
      </div>

      <Result
        target={target}
        number={number}
        count={count}
        setScoreHistory={setScoreHistory}
        success={success}
        setSuccess={setSuccess}
        setTarget={setTarget}
      />
      <History scoreHistory={scoreHistory} />
    </Mission>
  );
}

export default App;
