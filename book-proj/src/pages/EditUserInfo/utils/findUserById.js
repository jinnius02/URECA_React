import axios from "axios";

export const findUserInfoById = (isbn,setUserInfo) => {
  axios.get(`http://localhost:8080/book/find?isbn=${isbn}`)
       .then((response)=>{  
           //URL요청후 실행할 문장
          //  response.data ==> Book
          console.log(response.data);
              setUserInfo(response.data);
       });


};
