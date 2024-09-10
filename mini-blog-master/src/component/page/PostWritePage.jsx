import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostWritePage(props) {
    
    const {updatePosts} = props;

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handlePush=()=>{

        const blogData = localStorage.getItem("blogData");

        let blogArr = JSON.parse(blogData);

        //가장 큰 Post번호 구하기
        let id=0;
        if(blogArr.length==0){
            id=1; //첫 Post라면
        }else if(blogArr.length>0){ //두번째 이상의 Post라면 마지막 id+1
            id=blogArr[blogArr.length-1].id+1;
        }

        // blogArr.push({id,title,content});  //입력된 제목,내용과 id를 배열에 저장 
        blogArr.push({id,title,content,comments:[]});  //입력된 제목,내용과 id를 배열에 저장 
         
        localStorage.setItem("blogData", JSON.stringify(blogArr));//localStorage에 저장하기 위해 string으로 변환
        updatePosts(); //post배열이 저장되어 있는곳에서 업데이트
    }

    return (
        <Wrapper>
            <Container>
                <TextInput
                    height={20}
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    height={480}
                    value={content}
                    onChange={(event) => {
                        setContent(event.target.value);
                    }}
                />

                <Button
                    title='글 작성하기'
                    onClick={() => {
                        handlePush();
                        navigate('/');
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;
