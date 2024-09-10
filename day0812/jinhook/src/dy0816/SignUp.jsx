// SignUp.jsx

import { useState } from "react";

function SignUp() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("여자");
    
    const handleChangeName=(event)=>{ // 콜백함수
        setName(event.target.value); // value=데이터
    }

    const handleSubmit=(event)=>{
        // 입력된 이름 (알림창)출력
        alert(`이름: ${name}, 성별: ${gender}`);
        event.preventDefault(); // submit방지, 다른 페이지 이동 방지
    }

    const handleChangeGender=(event)=>{
        setGender(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button>제출</button>
        </form>
    )
}

export default SignUp;