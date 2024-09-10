import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommentList from '../list/CommentList';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
// import data from '../../data.json';

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

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage(props) {
    const navigate = useNavigate();


    // 기존있던 코드===============================
    const { postId } = useParams();

    // const post = data.find((item) => {
        //     return item.id == postId;
        // });
    const [comment, setComment] = useState('');

    //============================================
    

    // 변경된 코드=================================
    const {updatePosts} = props;

    const blogData = localStorage.getItem("blogData");
    let blogArr = JSON.parse(blogData);

    const post = blogArr.find((item) => {
        return item.id == postId;
    });

    //============================================
   

    
    const handlePush=()=>{
        
        //post내의 가장 큰 comment번호(id) 구하기
        let id=0;
        if(post.comments.length==0){
            id=1; //첫 Comment라면
        }else if(post.comments.length>0){ //두번째 이상의 Comment라면 마지막 id+1
             id= post.comments[post.comments.length-1].id +1;
        }

        //댓글을 post에 저장
        post.comments.push({id, content:comment});  //입력된 제목,내용과 id를 배열에 저장 
         
        //댓글 추가된 posts를 localStorage에 저장
        localStorage.setItem("blogData", JSON.stringify(blogArr));//localStorage에 저장하기 위해 string으로 변환
        
    }

    return (
        <Wrapper>
            <Container>
                <Button
                    title='뒤로 가기'
                    onClick={() => {
                        navigate('/');
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <Button
                    title='댓글 작성하기'
                    onClick={() => {
                        handlePush();
                        navigate('/');
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
