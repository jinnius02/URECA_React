// MyNumberGuess

import { useState } from "react";
import Greeting from "./Greeting";

// {console.log("호호");}
// const  com_num =  Math.floor( Math.random()*100 + 1 );   //1~100

function MyNumberGuess(props){
    
    //난수 발생 
    const  [com_num, setCom_num] = useState(Math.floor( Math.random()*100 + 1 ));  //1~100
//    {console.log("하하");}


   //사용자가 입력한 데이터를 (상태)관리
   const  [user_num, setUser_num] = useState("");
   const  [result, setResult] = useState("");

   function checkNum(){
      console.log("com_num=", com_num, ", user_num=", user_num);

      //값비교  ==결과==> 낮춰주세요!/높여주세요!
      //기준값 ==> 난수를 발생
      if(user_num > com_num){//사용자 입력값이 높을때
           setResult(`[${user_num}] 낮춰주세요!`);
      }else if(user_num < com_num){//사용자 입력값이 낮을때
           setResult(`[${user_num}] 높여주세요!`);
      }else{//정답
           setResult("정답입니다^O^");
      }
      setUser_num("");//사용자 입력값 지우기
   }

   function handleChange(event){//HTML마크업의 변경된 값을 state에 반영
      setUser_num(event.target.value);
   }

    return (
        <div>
            <h1>숫자맞추기</h1>
            <p>1~100사이 컴퓨터의 숫자를 맞춰보세요</p>
            <input type="number" 
                    min="1" 
                    max="100"
                    value={user_num}
                    onChange={handleChange}/>
            <button onClick={checkNum}>정답확인</button>
            <div>확인결과: {result} </div>
            <Greeting
                     isLoggedIn={false}/>
        </div>
    );
}

export default MyNumberGuess;