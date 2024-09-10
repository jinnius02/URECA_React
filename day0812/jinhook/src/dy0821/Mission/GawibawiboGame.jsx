// GawibawiboGame.jsx

import React, { useState } from "react";
import GawibawiboHeader from "./GawibawiboHeader";
import GawibawiboInput from "./GawibawiboInput";
import GawibawiboResult from "./GawibawiboResult";

function GawibawiboGame() {
    const [result, setResult] = useState("");

    const onUserSelect = (choice) => {
        const choices = ['가위', '바위', '보'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]
        const determineResult = (user, computer) => {
            if (user === computer) return '무승부';
            if ((user === '가위' && computer === '보') || 
                (user ==='바위' && computer === '가위') || 
                (user === '보' && computer === '바위')) return '당신의 승리!';
            return '컴퓨터 승리!';
        };

        setResult(determineResult(choice, computerChoice));
    };

    return (
        <div className="gawibawibo-game">
            <GawibawiboHeader />
            <GawibawiboInput onUserSelect={onUserSelect}/>
            <GawibawiboResult result={result}/>
        </div>
    );
}

export default GawibawiboGame;