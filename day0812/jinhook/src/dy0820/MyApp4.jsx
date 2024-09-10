// MyApp3.jsx  === props에서 Context공유로 변경 ==> MyApp4.jsx

import { createContext, useContext } from "react";

// MyApp4.jsx
const MyContext = createContext(); //////////////////

function MyApp4(){
//    return(
//       <UrecaComponent value="오늘은 화요일입니다!"/>
//    );
   return (
       <MyContext.Provider value="오늘은 화요일이요!">
           <UrecaComponent/>
       </MyContext.Provider>
   );
}

function UrecaComponent(){
   return(
      <div>
          <First/>
          <Second/>
          <Third/>
      </div>
   );
}

function First(){
    const value = useContext(MyContext);
    return (<div>첫번째 컴포넌트: {value}</div>);
}
function Second(){
    const value = useContext(MyContext);
    return (<div>두번째 컴포넌트: {value}</div>);
}
function Third(){
    const value = useContext(MyContext);
    return (<div>세번째 컴포넌트: {value}</div>);
}


export default MyApp4;