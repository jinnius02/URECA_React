// MyToggle.jsx
import React from "react";

class MyToggle extends React.Component{
    constructor(props) {
        super(props);

        this.state={isToggleOn: true}; // 토글을 표현하는 상태변수

        // 콜백에서 this를 사용하자!!
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() { // 콜백함수
        console.log(this);
        // this.setState(변경데이터);
        // this.setState(isToggleOn: true);
        // this.setState(isToggleOn: false);
        this.setState((currState) => ({isToggleOn: !currState.isToggleOn})); // 매개변수를 콜백함수로 가져옴.
    }

    render() {
        return (
            // <button onClick={ this.handleClick }>
            <button onClick={ () => this.handleClick() }>
                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        );
    }
}

export default MyToggle;