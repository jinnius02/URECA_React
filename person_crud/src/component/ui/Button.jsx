// Button.jsx

import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #48586a;
    color: white;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
        background-color: #6c819a;
    }
`;
function Button(props) {
    const { title, onClick } = props;
    return <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>;
}

export default Button;
