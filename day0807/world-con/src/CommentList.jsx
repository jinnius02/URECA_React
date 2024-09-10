// CommentList.jsx

import Comment from "./Comment";

// 이름, 댓글 목록 정의!! ==> 배열
const comments=[
    {
        name: "노이진", 
        comment: "안녕하세요?"
    },
    {
        name: "고명진", 
        comment: "하이~!"
    },
    {
        name: "고은진", 
        comment: "진남매 화이팅~!"
    },
    {   name: "최우진", 
        comment: "아자 아자!!"
    }
];

function CommentList() {
    return (
            <div>
                {/* <Comment/>
                <Comment/>
                <Comment/> */}
                {
                    //배열명.map();
                    //배열의 요소 수만큼 반복하며 개개의 요소를 반환하는 값을 리턴
                    comments.map((comment)=>{
                        return (<Comment name={comment.name}
                                         comment={comment.comment}/>);
                    })
                }
            </div>
           );
}

export default CommentList;