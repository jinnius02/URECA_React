// CommentList.jsx
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function CommentList(props){
  const { comments} =  props;
  //comments ==> comment배열
  return (
    <Wrapper>
        {
          comments.map((comment)=>{
              return(
                    <CommentListItem
                           comment={comment.content}  
                           key={comment.id}/>
              );
          })
        }
    </Wrapper>
  );
}

export default CommentList;
