import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findBookInfoByIsbn } from "./utils/findBookInfoByIsbn";
import { deleteBookToStorage, saveBookToStorage } from "../../utils/saveBookToStorage";
import Button from "../../components/Button";
import * as S from "./EditBookInfoStyle";
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

function EditBookInfo() {
  // const userId = Number(useParams().userId);
  const bookIsbn = useParams().userId;

  // const userInfo = findUserInfoById(userId);

  const [bookInfo, setBookInfo ] = useState({});
 
  useEffect(()=>{
    findBookInfoByIsbn(bookIsbn, setBookInfo); 
  },[]);

  const navigate = useNavigate();

  const isbnRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);

  const saveBookInfo = () => {
    // const newIsbn =  isbnRef.current.value;
    const newTitle = titleRef.current.value;
    const newAuthor = authorRef.current.value;
    const newPrice = priceRef.current.value;
    const newDesc = descRef.current.value;
    
    if (
      newTitle !== bookInfo.title ||
      newAuthor !== bookInfo.author ||
      newPrice !== bookInfo.price ||
      newDesc !== bookInfo.desc
    ) {
    
      saveBookToStorage({isbn:bookIsbn, title:newTitle, author:newAuthor, price:newPrice, desc:newDesc}); //DB수정 작업 요청!!
      // saveUsersToStorage({no,name,age,job}); //DB수정 작업 요청!!
      alert("저장되었습니다.");
      navigate(ROUTE.LIST);
      
    } else {
      alert("변경된 사항이 없습니다.");
    }
  };

  const deleteBookInfo = () => {

    //saveUserToStorage.js에 새롭게 추가함.
    // deleteUsersToStorage({no:userId});
    deleteBookToStorage(bookIsbn);
   
    alert("삭제되었습니다.");
    navigate(ROUTE.LIST);
  };

  return (
    <Wrapper>
      <Title>도서 정보 수정</Title>
      <Content>
        <S.Row>
          <InputName>ISBN</InputName>
          <InputWrapper>
            <StyledInput ref={isbnRef} defaultValue={bookInfo.isbn} />
          </InputWrapper>
        </S.Row>
        <S.Row>
          <InputName>제목</InputName>
          <StyledInput ref={titleRef} defaultValue={bookInfo.title} />
        </S.Row>
        <S.Row>
          <InputName>저자</InputName>
          <StyledInput ref={authorRef} defaultValue={bookInfo.author} />
        </S.Row>
        <S.Row>
          <InputName>가격</InputName>
          <StyledInput ref={priceRef} defaultValue={bookInfo.price} />
        </S.Row>
        <S.Row>
          <InputName>설명</InputName>
          <StyledInput ref={descRef} defaultValue={bookInfo.desc} />
        </S.Row>
      </Content>
      <BottomButtonsWrapper>
        <Button disabled={false} text="저장" clickFunc={saveBookInfo} />
        <Button disabled={false} text="삭제" clickFunc={deleteBookInfo} />
        <Button
          disabled={false}
          text="목록 보러 가기"
          clickFunc={()=>{navigate(ROUTE.LIST)}}
        />
      </BottomButtonsWrapper>
    </Wrapper>
  );
}

export default EditBookInfo;
