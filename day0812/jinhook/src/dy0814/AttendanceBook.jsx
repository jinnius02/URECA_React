// AttendanceBook.jsx  (출석부 컴포넌트)

import { useState } from "react";

const students=[
  {no:1,name:'고명진'},      
  {no:2,name:'고은진'},      
  {no:3,name:'고주희'},      
  {no:4,name:'고윤정'},      
];

function NameForm(props){
   const [ userName, setUserName ]= useState('');
   const [ memo, setMemo ]= useState('메모를 입력하세요');
   const [ fruit, setFruit ]= useState('grape');

   //이름 입력(에 대한 처리) 콜백  처리함수
   const handleChange= (event)=>{
      //event.target ==> 이벤트를 발생시킨 엘리먼트 객체 (여기의 경우 <input type=text>)
      console.log('입력된 이름=,', event.target.value);
      // setUserName(event.target.value);
      setUserName(event.target.value.toUpperCase());
   }

   //이름 제출(에 대한 처리) 콜백  처리함수
   const handleSubmit = (event)=>{
      //제출된 이름을 출력
      alert(`입력한 이름: ${userName} \n입력한 메모: ${memo}`);
    //   event.preventDefault();//submit기능 중지 (비활성화)
   }

   const handleChange2 = (event)=>{
      setMemo( event.target.value );
   }

   const handleChange3 = (event)=>{
      setFruit( event.target.value );
   }

   return (
      <form onSubmit={handleSubmit}>
        <label>
          이름:  <input type="text" value={userName} onChange={handleChange}/>
        </label>
        <br />
        <textarea onChange={handleChange2} value={memo}></textarea>
        <br />
        <select value={fruit} onChange={handleChange3}>
           <option value="apple">사과</option>
           <option value="banana">바나나</option>
           <option value="grape">포도</option>
           <option value="watermelon">수박</option>
        </select>
        <button type="submit">제출</button>
      </form>
   );
}

function AttendanceBook(props){

    return(
        <>
           <ul>
               {/* <li>고명진</li> 
               <li>고은진</li> 
               <li>고주희</li> 
               <li>고윤정</li>  */}
               {
                   //  students.map((student)=> { return <li>{student.name}</li>;} )
                //    students.map((student,idx)=> <li key={idx}>{student.name}</li> )
                   students.map((student)=> <li key={student.no}>{student.name}</li> )
               }
           </ul>
           <hr />
           <NameForm/>
        </>  

    );
}

export default AttendanceBook;