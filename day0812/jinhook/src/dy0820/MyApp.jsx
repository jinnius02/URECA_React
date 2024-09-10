// MyApp.jsx

function MyAPP() {
    // 전달데이터 => "쉬는 시간"
    return <GrandParent value="쉬는 시간입니다."/>;
}

// function Child(props) {
//     return <div>전달받은 데이터: {props.value}</div>;
// }

function GrandParent({value}) {
    return <Parent value={value}/>;
}
function Parent({value}) {
    return <Child value={value}/>;
}
function Child({value}) {
    return <GrandChild value={value}/>;
}
function GrandChild({value}) {
    return <Message value={value}/>;
}
function Message({value}) {
    return <div>전달받은 데이터: {value}</div>;
}

export default MyAPP;