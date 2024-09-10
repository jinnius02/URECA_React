import React, { useEffect, useRef, useState } from "react";

const styles = {
  continaer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  board: {
    width: "1200px",
    border: "1px solid black",
    display: "flex",
  },

  "board-left": {
    width: "800px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid black",
  },

  "board-right": {
    flex: 1,
  },

  top: {
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  bottom: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    listStyleType: "none",
    padding: 0,
  },

  "result-board": {
    width: "1200px",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  prev: {
    width: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  "prev-result": {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#333",
    backgroundColor: "#6ccad0",
    marginBottom: "10px",
  },
};

function GameNumber() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(Math.floor(Math.random() * 100 + 1));
  const [number, setNumber] = useState(1);
  const [success, setSuccess] = useState(false);
  const [resultStr, setResultStr] = useState("");
  const [resultCountStr, setResultCountStr] = useState([]);

  const [scoreNum, setScoreNum] = useState(1);
  const [prevResult, setPrevResult] = useState([]);

  const inputEl = useRef(null);

  const handlerSubmit = (event) => {
    event.preventDefault();

    setCount(count + 1);

    if (count >= 9) {
      setResultStr(`실패했습니다... 정답은 ${target}였습니다...`);
      setResultCountStr([
        `${count + 1}번째 시도 [${number}]보다 높습니다.`,
        ...resultCountStr,
      ]);
      setSuccess(true);
      setPrevResult([...prevResult, { score: target, counting: scoreNum }]);
      setScoreNum(scoreNum + 1);
      return;
    }

    if (number < target) {
      setResultStr(`${count + 1}번째 시도 [${number}]보다 높습니다.`);
      setResultCountStr([
        `${count + 1}번째 시도 [${number}]보다 높습니다.`,
        ...resultCountStr,
      ]);
    } else if (number > target) {
      setResultStr(`${count + 1}번째 시도 [${number}]보다 낮습니다.`);
      setResultCountStr([
        `${count + 1}번째 시도 [${number}]보다 낮습니다.`,
        ...resultCountStr,
      ]);
    } else {
      setResultStr(`${count + 1}번째 시도 정답입니다!!`);
      setResultCountStr([
        `${count + 1}번째 시도 정답입니다!!`,
        ...resultCountStr,
      ]);
      setPrevResult([...prevResult, { score: target, counting: scoreNum }]);
      setScoreNum(scoreNum + 1);
      setSuccess(true);
    }
  };

  useEffect(() => {
    inputEl.current.focus();
  }, [success]);

  return (
    <div style={styles.continaer}>
      <h2>숫자 맞추기</h2>
      <p>1 ~ 100 사이 컴퓨터의 숫자를 맞춰보세요!!</p>
      <div style={styles.board}>
        <div style={styles["board-left"]}>
          <span>{count}번쨰 시도</span>

          <form onSubmit={handlerSubmit} style={{ margin: "20px 0" }}>
            <input
              type="number"
              onChange={(event) => setNumber(event.target.value)}
              min={1}
              max={100}
              value={number}
              disabled={success}
              ref={inputEl}
              style={{ width: "150px" }}
            />
            <button disabled={success}>정답 확인</button>
          </form>

          <div>
            {success ? (
              <>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setTarget(Math.floor(Math.random() * 100 + 1));
                    setNumber(1);
                    setResultStr("");
                    setCount(0);
                    setResultCountStr([]);
                  }}
                >
                  다시하기
                </button>
              </>
            ) : null}
          </div>
        </div>

        <div style={styles["board-right"]}>
          <div style={styles.top}>
            {resultStr ? <p>확인결과 : {resultStr}</p> : null}
          </div>

          <ul style={styles.bottom}>
            {resultCountStr.length > 0 &&
              resultCountStr.map((element, idx) => {
                return <li key={idx}>{element}</li>;
              })}
          </ul>
        </div>
      </div>

      <div style={styles["result-board"]}>
        {prevResult.length > 0 &&
          prevResult.map((element, idx) => {
            return (
              <div style={styles.prev} key={idx}>
                <div style={styles["prev-result"]}>{element.score}</div>
                <span>{element.counting}회차</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default GameNumber;