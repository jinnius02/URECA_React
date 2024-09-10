//MyFunctionToggle.jsx

import { useState } from "react";

function MyFunctionToggle(props){
    
    const [isToggleOn, setIsToggleOn]=useState(true);

    function handleClick(){//콜백함수
        setIsToggleOn( (isToggleOn) => !isToggleOn );
    }

    return (
        <button onClick={ handleClick }>
                {isToggleOn ? '수업시간'  : '쉬는시간'} 
        </button>
    );

}
export default MyFunctionToggle;