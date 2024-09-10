import React, { useEffect, useState, useffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(100); // 타이머를 100초로 초기화.

    useEffect(() => {
        // 타이머가 0이면 더 이상 카운트다운을 진행하지 않음.
        if (seconds == 0) return;

        // 매초마다 seconds를 감소시키는 setInterval을 설정.
        const timerId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        // 컴포넌트가 umoount되거나 update되기 전에 interval을 정리.
        return () => clearInterval(timerId);
    }, [seconds]);

    return (
        <div>
            <h1>Timer: {seconds}</h1>
        </div>
    )
}

export default Timer;