import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './Library';
// import Book from './Book';
// import Clock from './Clock';
// import Comment from './Comment';
// import CommentList from './CommentList';
// import Notification from './day0809/Notification';
import NotificationList from './day0809/NotificationList';


const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(()=>{
  root.render(
      <>
      {/* <App /> */}
      {/* <Library/> */}
      {/* <Clock/> */}
      {/* <Comment/> */}
      {/* <CommentList/> */}
      {/* <Notification/> */}
      {/* <NotificationList/> */}
      <NotificationList/>
      </>
  );
// },1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







