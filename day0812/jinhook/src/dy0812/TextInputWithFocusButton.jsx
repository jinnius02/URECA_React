// TextInputWithFocusButton

import { useRef } from "react";

export default function TextInputWithFocusButton(props){
    const inputElem =useRef(null);
    
    //버튼 콜백
    const onButtonClick=()=>{
         inputElem.current.focus();  //<input>엘리먼트에 포커스를 두자
    };

    return (
        <>
           <input type="text"  ref={inputElem}  />
           <br />
           <button onClick={onButtonClick}>(입력)포커스버튼</button>
        </>
    );
}

// export default TextInputWithFocusButton;