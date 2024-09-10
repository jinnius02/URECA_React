// MyComponent.jsx

import { useState } from "react";

function ChildComponent1(props) {
    const {su, handleClick} = props; // 부모로부터의 전달 데이터!!
    return (<div>1번자식 : 부모번호({su})
                {/* <button onClick={()=>{간단한 내용}}>증가</button> */}
                <button onClick={handleClick}>증가</button>
            </div>);
}

function ChildComponent2(props) {
    const {yoonsu, jisuClick} = props;
    return (<div>2번자식 : 부모번호({yoonsu})
                <button onClick={jisuClick}>증가</button>
            </div>);
}

//////////////////////////////////////////////////////////

function MyComponent(props) {
    let su=1;
    const [ su2, setSu2 ] = useState(0);
    const [ txt, setTxt ] = useState('');

    function handleClick() {
        // alert("클릭!!");
        // su = su + 1;
        // console.log('su=', su);
        setSu2(su2+1);
    }

    const handleText=(event)=>{
        // event.target ==> 이벤트 소스(엘리먼트) 정보
        const inputText = event.target.value;
        console.log('텍스트 입력값=', inputText);
        setTxt(inputText);
    }

    return (
        // JSX문법
        <>
            <div>
                안녕{su2}
            </div>
            <button onClick={handleClick}>증가버튼</button>
            <input type="text" value={txt} onChange={handleText} />
            <hr color="red" />
            <ChildComponent1 su={su2} handleClick={handleClick}/>
            <ChildComponent2 yoonsu={su2} jisuClick={handleClick}/>
        </>
    );
}

export default MyComponent;