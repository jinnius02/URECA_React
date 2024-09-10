//PersonList.jsx

import React from 'react';
import styled from 'styled-components';
import PersonListItem from './PersonListItem';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Thead = styled.thead`
color: white;
    background-color: #48586a;
    th {
        padding: 8px;
        border: 1px solid #ccc;
    }
`;

const Tbody = styled.tbody`
    td {
        padding: 8px;
        border: 1px solid #ccc;
    }
`;

function PersontList({ posts, onClickItem }) {
    return (
        <Table>
            <Thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>직업</th>
                </tr>
            </Thead>
            <Tbody>
                {posts.map((post, index) => (
                    <PersonListItem
                        key={post.no}
                        
                        post={post}
                        onClick={() => onClickItem(post)}
                    />
                ))}
            </Tbody>
        </Table>
    );
}

export default PersontList;
