// ConfirmButton2.jsx

import React, { useState } from "react";

// '확인하기'버튼  ===누르면==> '확인됨'버튼 (with 비활성화)
function ConfirmButton2(props){
    
    const [isConfirmed, setIsConfirmed]=useState(false);

    const handleConfirm = (event,username)=>{ //콜백
       //현재 버튼에 출력되는 문자열이 무엇인지 콘솔에 출력하기!  (매개변수 사용)
       //  console.log(event.target.value);
       setIsConfirmed( (prevIsConfirmed)=> !prevIsConfirmed);
      //  console.log(event.target); //<button>출석됨</button>
       console.log(event.target.innerText, username); //<button>출석됨</button>
       //==> 이벤트 발생시에 <button>안에 있는 내용을 출력
    }

    //<input type="button" value="나버튼">
    //<button>나버튼</button>

    return (<button onClick={(event)=>handleConfirm(event,'홍길동')}
                  // disabled={isConfirmed} 
                  > 
               {isConfirmed  ?   "출석됨" : "출석하기"}
            </button>);
    
}

export default ConfirmButton2;









