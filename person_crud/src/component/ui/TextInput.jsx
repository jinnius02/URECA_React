import React from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
`;

function TextInput(props) {
    const { height, value, onChange } = props;
    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
