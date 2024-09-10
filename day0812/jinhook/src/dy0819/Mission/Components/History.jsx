import React from "react";
import "./History.css";

function History({ scoreHistory }) {
  return (
    <div className="history-container">
      {scoreHistory.length > 0 &&
        scoreHistory.map((element, idx) => (
          <div key={idx} className="box">
            <div>{element}</div>
            <span>{idx + 1}회차 정답</span>
          </div>
        ))}
    </div>
  );
}

export default History;
