// NotificationList.jsx
import React from "react";
import Notification from "./Notification";


const reservedNotications=[
    {
        id:1,
        message:'안녕하세요, 오늘 일정을 알려드립니다.'},
    {
        id:2,
        message:'점심시간입니다. 맛점하세요~!!'},
    {
        id:3,
        message:'일주일간 고생하셨습니다. 마치겠습니다~!!'},
];

let timer;//setInterval 제어

class NotificationList extends React.Component{
   constructor(props){
      super(props);

    //   this.state={};
    this.state = {
        notifications:[] 
    }
   }

   //랜더링 후 호출
   componentDidMount(){
       const {notifications} =this.state;
    //    setInterval(콜백함수,밀리세컨드);
    //    setInterval(()=>{},1000);
       timer = setInterval(()=>{
           if(notifications.length < reservedNotications.length){
               const index = notifications.length;
               notifications.push(reservedNotications[index]);
               this.setState({notifications: notifications});//재렌더링을 위하여 setState()호출
           }else{
               //일정 보여주기가 끝마쳐졌다면 일정메시지를 지우기
               this.setState({notifications:[]});
               
               clearInterval(timer);//타이머 종료
           }
       },3000);
   }

   //unmount 전 호출
   componentWillUnmount(){
       if(timer)
        clearInterval(timer);//타이머 종료
   }

   render(){
      return (<div>
                {
                    // this.state.notifications.map((notification, index)=>{
                    //     return <Notification 
                    //               key={index}
                    //               message={notification.message}/>;
                    // })
                    this.state.notifications.map((notification)=>{
                        return <Notification 
                                  key={notification.id}
                                  id={notification.id}
                                  message={notification.message}/>;
                    })
                }   
             </div>);
   }
}//class NotificationList

export default NotificationList;