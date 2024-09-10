// useCounter.jsx
// 사용자 정의 hook ==> count라는 state를 정의
//               ==> count에 대한 증가/감소 기능의 함수 제공

import { useState } from "react";

function useCounter(initialValue){
    const [count, setCount] = useState(initialValue);

    const increaseCount=()=> setCount((count) => count+1); //증가함수
    const decreaseCount=()=> setCount((count) => Math.max(count-1, 0)); //감소함수

    return [count, increaseCount, decreaseCount];
}

export default useCounter;