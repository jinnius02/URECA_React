// LoginControl.jsx

import { useState } from "react";
import Greeting from "./Greeting";

function LoginButton(props){
    return(<button onClick={props.onClick}>로그인</button>);
}

function LogoutButton(props){
    return(<button onClick={props.onClick}>로그아웃</button>);
}

function LoginControl(props){
   const [isLoggedIn, setLoggedIn]= useState(false);

   //로그인 콜백
   const handleLoginClick=()=>{
      setLoggedIn(true);
    }
    
   //로그아웃 콜백
   const handleLogoutClick=()=>{
       setLoggedIn(false);
   }


  //엘리먼트 변수 : 렌더링해야 될 컴포넌트를 변수처럼 사용
   let button;
   if(isLoggedIn)
     button=<LogoutButton onClick={handleLogoutClick}/>;
   else 
     button=<LoginButton onClick={handleLoginClick}/>;


   return (
       <div>
           <Greeting isLoggedIn={isLoggedIn}/>
           {button}
       </div>
   );

}

export default LoginControl;