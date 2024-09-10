import axios from "axios";

export const findUserInfoById = (no,setUserInfo) => {
  axios.get(`http://localhost:8080/person/upform?no=${no}`)
       .then((response)=>{  
           //URL요청후 실행할 문장
          //  response.data ==> Person
              setUserInfo(response.data);
       });


};
