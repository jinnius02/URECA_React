import React, { useEffect, useState } from "react";

function Result({ target, number, count, setScoreHistory, setSuccess }) {
  const [resultStr, setResultStr] = useState(""); // 높다, 낮다, 정답이다를 출력하는 state
  const [resultCountStr, setResultCountStr] = useState([]); // 각 N번째 시도에 대한 정보를 담는 배열

  useEffect(() => {
    if (count > 0) {
      // 카운트 횟수가 10번일 경우에는 실패
      if (count >= 10) {
        setResultStr(`실패했습니다... 정답은 ${target}였습니다...`);
        setResultCountStr([
          `${count}번째 시도 [${number}]보다 높습니다.`,
          ...resultCountStr,
        ]);
        setSuccess(true);
        setScoreHistory((prev) => [...prev, target]);
        return;
      }

      // 카운트 횟수가 10번이 아닐 경우
      if (number < target) {
        // 입력값이 target보다 작을 경우
        // 현재 제출에 대한 결과가 나오는 문자열을 state에 반영
        setResultStr(`${count}번째 시도 [${number}]보다 높습니다.`);

        // 이번 횟차에 대한 결과들을 저장 후 state에 반영
        setResultCountStr([
          `${count}번째 시도 [${number}]보다 높습니다.`,
          ...resultCountStr,
        ]);
      } else if (number > target) {
        // 입력값이 target보다 높을 경우
        // 현재 제출에 대한 결과가 나오는 문자열을 state에 반영
        setResultStr(`${count}번째 시도 [${number}]보다 낮습니다.`);

        // 이번 횟차에 대한 결과들을 저장 후 state에 반영
        setResultCountStr([
          `${count}번째 시도 [${number}]보다 낮습니다.`,
          ...resultCountStr,
        ]);
      } else {
        // 입력값과 target이 같을 경우
        setResultStr(`${count}번째 시도 정답입니다!!`);
        setResultCountStr([
          `${count}번째 시도 정답입니다!!`,
          ...resultCountStr,
        ]);
        setScoreHistory((prev) => [...prev, target]);
        setSuccess(true);
      }
    }
  }, [count]);

  useEffect(() => {
    setResultStr("");
    setResultCountStr([]);
  }, [target]);

  return (
    <div>
      <span>확인결과: {resultStr}</span>

      <ul>
        {resultCountStr.length > 0 &&
          resultCountStr.map((element, idx) => <li key={idx}>{element}</li>)}
      </ul>
    </div>
  );
}

export default Result;
