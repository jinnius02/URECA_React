// MyMemo.jsx

import { useState } from 'react';

export default function MyMemo(props) {
    const [memoContent, setMemoContent] = useState(""); //<input type=text>에 입력된 값 저장
    const [memoContents, setMemoContents] = useState([]); 

    function myCallback(event) { // <input>에서 입력된 내용이 변경시 호출
        // setMemoContent('abc');
        setMemoContent(event.target.value); // event로부터 target을 얻어온다. value..?!?!?
    }

    function myClickCallback() {
        // 1. <input type=text>의 값을 배열에 입력!!
        // ==> state memoContent에 저장되어 있음
        setMemoContents([...memoContents, memoContent]) // 배열값 변경(입력)
        // 스프레드 연산자, ... = 배열 연산자
        // ...memoContents = 마라탕, 젤리
        // memoContent = 탕후루 = 새로 들어온 값

        // 2. <input type=text>지우기 효과
        setMemoContent(''); // 입력된 메모텍스트를 삭제
    }

    return (
        <div>
            <h1>마이 메모장</h1>
            <div>
                <h2>메모Form</h2>
                <input type="text" onChange={myCallback} value={memoContent}/>
                <button onClick={myClickCallback}>메모등록</button>
            </div>
            <hr />
            <div>
                <h2>메모 목록</h2>
                <ul>
                    {/* <li>마라탕</li>
                    <li>젤리</li>
                    <li>탕후루</li> */}
                    {memoContents.map( (value) => <li>{value}</li> )}
                </ul>
            </div>
        </div>
    )
}

// <ul> = unoredered list
// useState로 선언되어 있기 때문에, 자바스크립트 안에서 사용 가능