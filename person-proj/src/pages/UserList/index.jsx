import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Content, Title, Wrapper } from "styles";
import { ROUTE } from "Route";
import * as S from "./UserListStyle";
import { getUsersFromStorage } from "../../utils/getUsersFromStorage";

function UserList() {
  // const list = getUsersFromStorage() || [];
  const [list,setList] = useState([]);
  const navigate = useNavigate();
  
  // useEffect(콜백,연관배열);
  useEffect(()=>{
      getUsersFromStorage(setList);
  },[]);

  let render = <Title>등록된 사람이 없습니다.</Title>;
  if (list) {
    render = list?.map((user) => (
      <S.Row key={user.no}>
        번호: {user.no} 이름: {user.name} 나이: {user.age} 직업: {user.job}
        <S.ButtonWrapper
          onClick={() => {
            navigate(ROUTE.EDIT + `${user.no}`);
          }}
        >
          수정
        </S.ButtonWrapper>
      </S.Row>
    ));
  }
  return (
    <Wrapper>
      <Title>사람 목록</Title>

      <Content>{render}</Content>
      <Button
        disabled={false}
        text="사람 정보 입력"
        clickFunc={() => navigate(ROUTE.REGIST)}
      />
    </Wrapper>
  );
}

export default UserList;
