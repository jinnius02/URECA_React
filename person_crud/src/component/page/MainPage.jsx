// MainPage.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PersontList';
import Button from '../ui/Button';
import axios from 'axios';


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > *:not(:last-child) {
        margin-bottom: 16px;
    }
`;

function MainPage() {
    const navigate = useNavigate();

    //TypeError: Assignment to constant variable.
    // const posts = [];
    // let posts = [];

    const [posts,setPosts] = useState([]);

    // axios.get(url);
    // axios.get(url).then(콜백함수);
    // axios.get(url).catch(콜백함수);
    // axios.get(url).then(콜백함수).catch(콜백함수);

    // useEffect(콜백,연관배열);
    // useEffect(function(){}, []);
    useEffect(()=>{
        axios.get('http://localhost:8080/person/list')
        .then(function (response) {
            // 성공 콜백
            console.log('response>>>', response)
    
            // response.data ==> 배열데이터 [{사람},{사람}]
            // posts= response.data;
            setPosts(response.data);
        })
        .catch(function (error) {
            // 에러 콜백
            console.log("error>>>", error);
        })
        .finally(function () {
            // 반드시 실행
        });
    }, []);



    return (
        <Wrapper>
            <Container>
                <PostList
                    posts={posts}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
                <Button
                    title="사람 정보 추가하기"
                    onClick={() => {
                        navigate('/post-write');
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
