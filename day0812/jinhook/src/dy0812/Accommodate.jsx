// Accommodate (입장하는 인원을 수용하는 컴포넌트)

import { useState } from "react";
import { useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY=10; //최대수용인원

function Accommodate(props){
    const [isFull, setIsFull] = useState(false); //수용인원 풀상태 state
    const [count, increaseCount, decreaseCount] = useCounter(0); //수용인원 카운트 훅

    useEffect(()=>{//재 렌더링시 실행
        //로그기능
        console.log('=====================');
        console.log('useEffect() is called');
        console.log(`isFull: ${isFull}`);
    }); 

    useEffect( ()=>{//count값이 변경되었을 때 실행
        setIsFull(count>=MAX_CAPACITY); //수용인원 초과
        console.log('현재 카운트: ', count);
    },[count]);

    //A && B ==> A의 값이 참이면 B를 실행

    return(
        <div style={{padding:16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            { isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p> }
        </div>
    );
}

export default Accommodate;