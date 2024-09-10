import React, { useEffect, useMemo, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
// Pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;


function App(props) {


    const [data,setData]=useState([]);//배열
    const [post,setPost] = useState({});//post한개
    

    useEffect(()=>{

        const blogData = localStorage.getItem("blogData");
        console.log('blogData:',blogData, typeof blogData);
        if(!blogData){ //아직 한번도 localStorage에 저장한 값이 없다면
                       //blogData ==> 자료형: string

            localStorage.setItem("blogData", JSON.stringify([])); //저장공간 만들기 ==> 저장 '[]'

        }else{ //한번 이상 저장하였을때
            const blogArr = JSON.parse(blogData);//blogArr ==> 자료형: []배열

            if(blogArr.length>0){ //추가된 데이터가 한건 이상이라면
                setData(blogArr); //그 값을 저장
            }
        }
        console.log('useEffect>>>>>>>');

    },[]);


    const updatePosts=()=>{

        const blogData = localStorage.getItem("blogData"); //blogData="[{},{},{}]"

        // if(!blogData){//빈문자열 또는 저장된 값이 없다면
            // console.log("if>>>>>>>>>>>>");
            // localStorage.setItem("blogData", JSON.stringify([]));
        // }else{

             const blogArr = JSON.parse(blogData); //blogArr=[{},{},{}]
             console.log("else>>>>>>>>>>>>", blogArr.length);

             if(blogArr.length>0){ //추가된 Post가 1개 이상일때 (빈 배열일 가능성이 있음)
                setData(blogArr);
             }
        // }      
    }


    return (
        <BrowserRouter>
            <MainTitleText>소플의 미니 블로그</MainTitleText>
            <Routes>
                <Route index element={<MainPage  data={data} />} />
                <Route path="post-write" element={<PostWritePage updatePosts={updatePosts}/>} />
                <Route path="post/:postId" element={<PostViewPage  updatePosts={ updatePosts } />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;