// MyButtonCounter.jsx

import { createContext, useContext, useState } from "react";

const CounterContext = createContext(); // 카운터 컨텍스트

function CounterProvider({children}) {
    const counterState = useState(0); // 카운터 상태 관리
    return (
        <CounterContext.Provider value={counterState}>
            {children}
        </CounterContext.Provider>
    );
}

// 숫자출력 컴포넌트
function CounterPrint() {
    console.log('CounterPrint');
    // useContext();
    const [counter] = useContext(CounterContext);
    return (
        <h1>{counter}</h1>
    );
}

// 버튼(액션) 컴포넌트
function Buttons() {
    console.log('Buttons');
    // const [counter, setCounter] = useContext( CounterContext );
    const [, setCounter] = useContext( CounterContext );

    const increase = ()=> setCounter((prev)=> prev+1);
    const decrease = ()=> setCounter((prev)=> prev-1);

    return (
        <div>
            <button onClick={increase}>더하기</button>
            <button onClick={decrease}>빼기</button>
        </div>
    );
}

// 앱 컴포넌트
function MyButtonCounter() {
    return (
        <CounterProvider>
            <div>
                <CounterPrint/>
                <Buttons/>
            </div>
        </CounterProvider>
    );
}

export default MyButtonCounter;