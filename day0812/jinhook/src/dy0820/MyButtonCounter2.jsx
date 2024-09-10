// MyButtonCounter.jsx

import { createContext, useContext, useMemo, useState } from "react";

//컨텍스트 2개를 만드는 이유 : 서로 독립된 영역을 갖기 위하여 (재랜더링,재배열 방지)
const CounterContext = createContext(); //카운터 컨텍스트
const ButtonActionContext = createContext(); //버튼액션 컨텍스트

function CounterProvider({children}){
    const [counter, setCounter] = useState(0);// 카운터 상태 관리

    const actions = useMemo(
        ()=>({
            increase(){
                setCounter((prev)=> prev +1);
            },
            decrease(){
                setCounter((prev)=> prev -1);
            },
        }),
        []
    );

    return (
       <CounterContext.Provider  value={counter}>
         <ButtonActionContext.Provider value={actions}>
              {children}    
          </ButtonActionContext.Provider> 
       </CounterContext.Provider> 
    );

}

//숫자출력 컴포넌트
function CounterPrint(){
    console.log('CounterPrint');
//    const [counter,setCounter] =  useContext( CounterContext );
   const counter =  useContext( CounterContext );
   return (
         <h1>{counter}</h1>
   );
}

//버튼(액션) 컴포넌트
function Buttons(){
    console.log('Buttons');
    // const [counter, setCounter] =  useContext( CounterContext );
    const actions =  useContext( ButtonActionContext );

    // const increase = ()=> setCounter((prev)=> prev +1) ;
    // const decrease = ()=> setCounter((prev)=> prev -1) ;

    return (
      <div>
        <button onClick={actions.increase}>더하기</button>
        <button onClick={actions.decrease}>빼기</button>
      </div>
    );
}

// function CounterProvider({children}){
//     const counterState = useState(0);// 카운터 상태 관리
//     return (
//        <CounterContext.Provider  value={counterState}>
//           {children}    
//        </CounterContext.Provider> 
//     );
// }


//앱 컴포넌트
function MyButtonCounter2(){
    return ( 
        <CounterProvider> 
            <div>
                 <CounterPrint/>
                 <Buttons/>
            </div>   
        </CounterProvider>
    );
}

export default MyButtonCounter2;
