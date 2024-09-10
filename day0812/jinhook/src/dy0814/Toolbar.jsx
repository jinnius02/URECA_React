// Toolbar.jsx
//  툴바 구성1)  로그인 여부 : 환영합니다.             
//   ==> 인라인 if
//   ==> Boolean && expression

//  툴바 구성2)  로그인 여부 : 로그아웃 or 로그인      ==> 인라인 if~else
//   조건식 ? trueExpression : falseExpression

const styles={
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },    
}


function Toolbar(props){
   const {isLoggedIn, onClickLogin, onLogout} = props;
   return (
       <div style={styles.wrapper}>
          {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
          {isLoggedIn ?
            (<button onClick={onLogout}>로그아웃</button>) 
               :
            (<button onClick={onClickLogin}>로그인</button>)
        }
       </div>
   );
}

export default Toolbar;