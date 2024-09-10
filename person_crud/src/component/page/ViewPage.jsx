//ViewPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

function ViewPage() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedAge, setEditedAge] = useState(0);
    const [editedJob, setEditedJob] = useState('');

    useEffect(() => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const foundPost = posts.find((p) => p.id === Number(postId));
        if (foundPost) {
            setPost(foundPost);
            setEditedName(foundPost.name);
            setEditedAge(foundPost.age);
            setEditedJob(foundPost.job);
        } else {
            navigate('/');
        }
    }, [postId, navigate]);

    const handleSaveChanges = () => {
        const updatedPost = { ...post, name: editedName, age: editedAge, job: editedJob };
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const postIndex = posts.findIndex((p) => p.id === Number(postId));
        posts[postIndex] = updatedPost;
        localStorage.setItem('posts', JSON.stringify(posts));
        setPost(updatedPost);
        setEditing(false);
    };

    const handleDeletePost = () => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        const updatedPosts = posts.filter((p) => p.id !== Number(postId));
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        navigate('/');
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <Wrapper>
            <Container>
                <PostContainer>
                    {editing ? (
                        <>
                            이름: <TextInput value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                            나이: <TextInput value={editedAge} onChange={(e) => setEditedAge(e.target.value)} />
                            직업: <TextInput value={editedJob} onChange={(e) => setEditedJob(e.target.value)} />
                            <Button title="저장" onClick={handleSaveChanges} />
                            <Button title="취소" onClick={() => setEditing(false)} />
                        </>
                    ) : (
                        <>
                            <TitleText>이름:{post.name}</TitleText>
                            {/* <TitleText>나이:{post.age}</TitleText>
                            <TitleText>직업:{post.job}</TitleText>
                            <td>이름: {post.name}</td><hr/> */}
                            <td>나이: {post.age}</td>
                            <hr />
                            <td>직업: {post.job}</td>
                            <hr />
                            <Button title="수정" onClick={() => setEditing(true)} />
                            <Button title="삭제" onClick={handleDeletePost} />
                        </>
                    )}
                </PostContainer>
                <Button title="사람목록 보기" onClick={() => navigate('/')} />
            </Container>
        </Wrapper>
    );
}

export default ViewPage;
