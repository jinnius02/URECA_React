// MyMemoList.jsx

import React, { useState } from 'react';

function MyMemoList() {
    const [inputText, setInputText] = useState(""); // 입력 필드의 텍스트를 관리
    const [items, setItems] = useState([]); // 목록에 추가될 아이템들을 관리

    const handleChange = (event) => {
        setInputText(event.target.value); // 입력 필드의 변경을 감지하고 상태 업데이트
    };

    const handleAddItem = () => {
        if(inputText.trim()) { // 입력 필드가 비어있지 않은 경우에만 실행
            setItems([...items, inputText]); // 기존 아이템 목록에 새 아이템 추가
            setInputText(""); // 입력 필드 초기화    
        }
    };

    return (
        <div>
            <h1>마이 메모장</h1>
            <h2>메모폼</h2>
            <div>
                <input type='text' value={inputText} onChange={handleChange} />
                <button onClick={handleAddItem}>메모 등록</button>
            </div>
            <h2>메모 목록</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default MyMemoList;