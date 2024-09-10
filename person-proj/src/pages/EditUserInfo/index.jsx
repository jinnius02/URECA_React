import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findUserInfoById } from "./utils/findUserById";
import { getUsersFromStorage } from "../../utils/getUsersFromStorage";
import { deleteUsersToStorage, saveUsersToStorage } from "../../utils/saveUserToStorage";
import Button from "../../components/Button";
import * as S from "./EditUserInfoStyle";
import {
  Content,
  InputName,
  InputWrapper,
  StyledInput,
  Title,
  Wrapper,
  BottomButtonsWrapper,
} from "styles";
import { ROUTE } from "Route";

function EditUserInfo() {
  const userId = Number(useParams().userId);

  // const userInfo = findUserInfoById(userId);

  const [userInfo, setUserInfo ] = useState({});
 
  useEffect(()=>{
    findUserInfoById(userId,setUserInfo);
  },[]);

  const navigate = useNavigate();
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const jobRef = useRef(null);

  const saveUserInfo = () => {
    const newName = nameRef.current.value;
    const newAge = ageRef.current.value;
    const newJob = jobRef.current.value;

    if (
      newName !== userInfo.name ||
      newAge !== userInfo.age ||
      newJob !== userInfo.job
    ) {
    
      saveUsersToStorage({no:userId, name:newName, age:newAge, job:newJob}); //DB수정 작업 요청!!
      // saveUsersToStorage({no,name,age,job}); //DB수정 작업 요청!!
      alert("저장되었습니다.");
    } else {
      alert("변경된 사항이 없습니다.");
    }
  };

  const deleteUserInfo = () => {

  //saveUserToStorage.js에 새롭게 추가함.
    // deleteUsersToStorage({no:userId});
    deleteUsersToStorage(userId);
   
    alert("삭제되었습니다.");
    navigate(ROUTE.LIST);
  };

  return (
    <Wrapper>
      <Title>사람 정보 수정</Title>
      <Content>
        <S.Row>
          <InputName>이름</InputName>
          <InputWrapper>
            <StyledInput ref={nameRef} defaultValue={userInfo.name} />
          </InputWrapper>
        </S.Row>
        <S.Row>
          <InputName>나이</InputName>
          <StyledInput ref={ageRef} defaultValue={userInfo.age} />
        </S.Row>
        <S.Row>
          <InputName>직업</InputName>
          <StyledInput ref={jobRef} defaultValue={userInfo.job} />
        </S.Row>
      </Content>
      <BottomButtonsWrapper>
        <Button disabled={false} text="저장" clickFunc={saveUserInfo} />
        <Button disabled={false} text="삭제" clickFunc={deleteUserInfo} />
        <Button
          disabled={false}
          text="목록 보러 가기"
          clickFunc={()=>{navigate(ROUTE.LIST)}}
        />
      </BottomButtonsWrapper>
    </Wrapper>
  );
}

export default EditUserInfo;
