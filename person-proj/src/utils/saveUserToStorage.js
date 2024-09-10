import axios from "axios";

export const saveUsersToStorage = (user) => {
  axios.put("http://localhost:8080/person/upform", user);
};

export const deleteUsersToStorage = (no) => {
  console.log(typeof no, no);

  axios.delete(`http://localhost:8080/person/delete?no=${no}`);
  //백앤드 PersonController에서는 @GetMapping을 @DeleteMapping으로 변경해야 합니다.
};
