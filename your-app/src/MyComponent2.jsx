// MyComponent2.jsx

import { useState } from "react";


// 도서1
function ChildComponent1(props) {
    const {add, subtract} = props; // 부모로부터의 전달 데이터!!
    const [ subTotal, setSubTotal ] = useState(0);

    const handleBookAdd=(event)=>{
        setSubTotal(subTotal+1); // 내 도서 증가
        add(); // 부모 도서 증가
    }

    const handleBookSub=(event)=>{
        setSubTotal(subTotal-1); // 내 도서 감소
        subtract(); // 부모 도서 감소
    }

    return (<div> [처음만난리액트({subTotal})]
                <button onClick={handleBookAdd}>도서대여+</button>
                <button onClick={handleBookSub}>도서반환-</button>
            </div>);
}

// 도서2
function ChildComponent2(props) {
    const {add, subtract} = props; // 부모로부터의 전달 데이터!!
    const [ subTotal, setSubTotal ] = useState(0);

    const handleBookAdd=(event)=>{
        setSubTotal(subTotal+1); // 내 도서 증가
        add(); // 부모 도서 증가
    }

    const handleBookSub=(event)=>{
        setSubTotal(subTotal-1); // 내 도서 감소
        subtract(); // 부모 도서 감소
    }

    return (<div> [처음만난자바스크립트({subTotal})]
                <button onClick={handleBookAdd}>도서대여+</button>
                <button onClick={handleBookSub}>도서반환-</button>
            </div>);
}

//////////////////////////////////////////////////////////

// 부모컴포넌트 (총 도서대여수)
function MyComponent2(props) {
    const [ totalRentBook, setTotalRentBook ] = useState(0);

    function handleClick() {
        setTotalRentBook(totalRentBook);
    }

    // 도서 대여
    const handleRentAdd = (event)=>{
        setTotalRentBook(totalRentBook+1);
    }

    // 도서 반납
    const handleRentSubtract = (event)=>{
        setTotalRentBook(totalRentBook-1);
    }

    return (
        // JSX문법
        <>
            <div>
                총 도서대여수 : { totalRentBook }
            </div>

            <hr color="red" />
            {/* 첫번째도서 */}
            <ChildComponent1 add={handleRentAdd} subtract={handleRentSubtract} />
            <hr color="blue" />
            {/* 두번째도서 */}
            <ChildComponent2 add={handleRentAdd} subtract={handleRentSubtract} />
        </>
    );
}

export default MyComponent2;