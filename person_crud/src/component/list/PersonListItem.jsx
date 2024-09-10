//PersonListItem.jsx

import React from 'react';
import styled from 'styled-components';

const TableRow = styled.tr`
    cursor: pointer;
    &:hover {
        background-color: #f5f5f5;
    }
`;

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function PersonListItem({ post, onClick }) {
    // const {post,onClick} = props;
    return (
        <TableRow onClick={onClick}>
            <td>{post.no}</td>
            <td>{post.name}</td>
            <td>{post.age}</td>
            <td>{post.job}</td>
        </TableRow>
    );
}

export default PersonListItem;
