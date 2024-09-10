// WritePage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import axios from 'axios';

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

function WritePage() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');

    // axios.post("https://ureca.com/user", {
	// 	name: '홍길동',
	// 	userid: 100
    // }).then(function (response) {

    // }).catch(function (error) {

    // });   
    

    const handleSavePost = () => {
        const newPost = { name, age, job };
        axios.post("http://localhost:8080/person/form", newPost)
             .then(function (response) {
                 navigate('/');   //==> DB입력이 끝마쳐진 후에 화면이동 (라우터 변경)
             });
            //.catch(function (error) {
            // });           
        
    };

    return (
        <Wrapper>
            <Container>
                이름: <TextInput value={name} onChange={(event) => setName(event.target.value)} />
                나이:
                <TextInput value={age} onChange={(event) => setAge(event.target.value)} />
                직업:
                <TextInput value={job} onChange={(event) => setJob(event.target.value)} />
                <Button title="입력" onClick={handleSavePost} />
                <Button title="뒤로가기" onClick={() => navigate('/')} />
            </Container>
        </Wrapper>
    );
}

export default WritePage;
