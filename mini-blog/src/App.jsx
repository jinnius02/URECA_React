// import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import styled from 'styled-components';

//페이지 컴포넌트
import MainPage from './component/page/MainPage';
import PostViewPage from './component/page/PostViewPage';
import PostWritePage from './component/page/PostWritePage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
        <MainTitleText>우진이의 미니 블로그</MainTitleText>
        <Routes>
          <Route index element={<MainPage/>}></Route>
          <Route path='post/:postId' element={<PostViewPage/>}></Route>
          <Route path='post-write' element={<PostWritePage/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
