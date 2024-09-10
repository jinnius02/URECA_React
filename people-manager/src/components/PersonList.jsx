// PersonList.jsx
import React from "react";
import { Link } from "react-router-dom";
import './PersonList.css';

function PersonList({ people }) {
    return (
        <div>
            <h1>사람 목록</h1>
            <hr />
            <table>
                <thead>
                    <tr>
                        <th className="tableHeader">번호</th>
                        <th className="tableHeader">이름</th>
                        <th className="tableHeader">나이</th>
                        <th className="tableHeader">직업</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person, index) => (
                        <tr key={person.id}>
                            <td><Link to={`/edit/${person.id}`}>{index + 1}</Link></td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <Link to='/'>사람정보입력</Link>
        </div>
    );
}

export default PersonList;