// PostWritePage.jsx
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import { useState } from "react";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return (<Wrapper>
        <Container>
            {/* 블로그 글쓰기(입력폼) - 제목, 내용 */}
            <TextInput
                height={20}
                onChange={(event)=>{
                    setTitle(event.target.value);
                }}
                value={title}
                />
            <TextInput
                height={480}
                onChange={(event)=>{
                    setContent(event.target.value);
                }}
                value={content}
                />
            <Button
                title="글 작성하기"
                onClick={()=>{
                    navigate('/');
                }}
            />
        </Container>
    </Wrapper>);
}

export default PostWritePage;