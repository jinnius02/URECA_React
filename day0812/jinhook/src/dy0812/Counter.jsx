import React, {useState} from "react";

function Counter(props){
    let cnt=0;

    /*
      function () {};
        () =>   데이터;
        () => {return 데이터;}

    */
    return (
            <div>
                <p>총 {cnt}번 클릭했습니다.</p>
                <button onClick={()=> {
                    cnt++
                    console.log('cnt=', cnt);
                } }>클릭</button>
            </div>
    );
}

export default Counter;