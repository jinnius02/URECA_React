//PostList.jsx ==> 한 건의 작성글 하나
import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostList(props){
    const {posts, onClickItem} = props;
    //posts ==> PostListItem 배열
    return (
        <Wrapper>
            {/* <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/> */}

            {
                posts.map((post)=>{
                    return (<PostListItem 
                        post={post}
                        key={post.id}
                        onClick={()=>{
                            onClickItem(post);
                        }}
                    />)
                })
                // { } => return 써야 함!!
                // ( ) => return 안 써도 됨
            }
        </Wrapper>
    );
}

export default PostList;
