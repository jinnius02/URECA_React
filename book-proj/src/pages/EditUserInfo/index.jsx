import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findUserInfoById } from "./utils/findUserById";
// import { getBooksFromStorage } from "../../utils/getUsersFromStorage";
import { deleteBookToStorage, saveBookToStorage } from "../../utils/saveUserToStorage";
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
  // const userId = Number(useParams().userId);
  const bookIsbn = useParams().userId;

  // const userInfo = findUserInfoById(userId);

  const [bookInfo, setBookInfo ] = useState({});
 
  // const [ image, setImage ] = useState(''); // 이미지 파일 상태 추가

  useEffect(()=>{
    findUserInfoById(bookIsbn, setBookInfo);
    
    // 이미지 URL 설정 (서버에서 받은 이미지가 있다면)

  },[]);

  // useEffect(() => {
  //   if (bookInfo.image) {
  //     setImage(`http://localhost:8080/upload/${bookInfo.img}`);
  //   }
  // },[findUserInfoById])

  const navigate = useNavigate();

  const isbnRef = useRef(null);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);
  const imageInputRef = useRef(null); // 이미지 파일 입력을 위한 ref 추가

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch(`/book/uploadImage?isbn=${bookIsbn}`, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.text()) // 가정: 서버가 이미지 파일명을 문자열로 반환
    // .then(filename => {
    //   setImage(`/upload/${filename}`);
    // })
    .catch(error => console.log('Error uploading image: ', error));
  };

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
      // image !== `/upload/${bookInfo.img}`
    ) {
    
      saveBookToStorage({isbn:bookIsbn, title:newTitle, author:newAuthor, price:newPrice, desc:newDesc }); //DB수정 작업 요청!! // 이미지 정보 저장 추가
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
        <S.Row>
          <InputName>이미지 업로드</InputName>
          <input type="file" ref={imageInputRef} onChange={handleImageChange} accept="image/*" />
          {bookInfo.img && <img src={`http://localhost:8080/upload/${bookInfo.img}`} alt="Book Cover" style={{ width: '100px', height: '100px' }} />}
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

export default EditUserInfo;
