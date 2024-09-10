import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/WritePage';
import PostViewPage from './component/page/ViewPage';

const MainTiteText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App() {
    return (
        <BrowserRouter>
            <MainTiteText>LG U+ URECA</MainTiteText>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="post-write" element={<PostWritePage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;