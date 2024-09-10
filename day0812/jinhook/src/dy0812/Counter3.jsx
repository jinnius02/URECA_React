import React, {useEffect, useState} from "react";

function Counter3(props){
    // let cnt=0;
    const [cnt, setCnt ] = useState(0);
    const [menu, setMenu] = useState("");

    const menus=["마라탕", "미정국수", "곤드레나물밥",
                 "베이글", "회덮밥"];

    useEffect(()=>{
       //랜더링 내용 변경시 호출
       document.title= `이펙트 클릭 - ${cnt}번, 메뉴 - ${menu}`;
       //브라우저 탭 제목 변경 
    }); // ==> 전체 재 렌더링시 실행
    // },[]); // ==> mount와 unmount시에만 실행 (update시에는 호출X)
    // },[cnt, menu]); // ==> 명시된 state가 변경되었을때 실행

    const randomMenu = () => {
        const randomIndex = Math.floor(Math.random() * menus.length);
        return menus[randomIndex];
    };

    return (
            <div>
                <p>총 {cnt}번 클릭했습니다.<br/>
                    오늘의 메뉴: {menu}
                </p>
                <button onClick={()=>{ 
                    setCnt(cnt+1);
                    console.log('cnt=',cnt);
                } }>플리즈 클릭</button>
                    
                <button onClick={()=>{ 
                    setMenu(menus[parseInt(Math.random()*menus.length)]);
                    console.log('cnt=',cnt);
                } }>점심메뉴</button>

            </div>
    );
}

export default Counter3;