// CalcBody.jsx

import { useContext } from "react";
import CalcContext from "./CalcContext";


function CalcBody(props){

    const  calc = useContext(CalcContext);
    //calc ===  function calcResultPrint(){}

    function handleSubmit(event){ //submit이벤트 발생시 실행되는 콜백함수 ==> 파라미터로 이벤트에 대한 정보 전달
        event.preventDefault(); //화면재시작(전체화면 리로드 방지)  
                                // <form action="hello.html">  ==> 콜백함수 실행후 hello.html 호출 (화면출력)
                                //action정의가 없다면 <form action="index.html"> 
        console.log('event=', event);
        console.log('event.target=', event.target); //<form>
        //폼태그안에 사용자명(<input name=username>) 가져오기
        //==> document.frm.username.value             event.target == frm
        console.log('첫번째 입력된 수='+ event.target.su1.value);

        // const form = event.target;  

        const su1= parseInt(event.target.su1.value);
        const su2= parseInt(event.target.su2.value);
        const oper= event.target.oper.value;

        let result;
        if(oper === '+'){
            result = su1+su2;
        }else if(oper === '-'){
            result = su1-su2;
        }else if(oper === '*'){
            result = su1*su2;
        }else {
            result = su1/su2;
        }

        const resultStr = `${su1} ${oper} ${su2} = ${result}`;  //2 + 3 = 5
        // calc(402,403); //== calcResultPrint();
        calc(resultStr);
    }

   return (
     <div>
        <form onSubmit={handleSubmit}>
           <input type="text" size="4" name="su1"/>
           <select name="oper">
               <option value="+">+</option>
               <option value="-">-</option>
               <option value="*">*</option>
               <option value="/">/</option>
           </select>
           <input type="text" size="4" name="su2" />
           <button type="submit">계산</button>
        </form>
     </div>
   );
}

export default CalcBody;