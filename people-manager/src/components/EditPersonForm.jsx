// EditPersonForm.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditPersonForm({ people, onUpdate, onDelete }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ person, setPerson ] = useState({ name: '', age: '', job: ''});

   useEffect(() => {
        const personToEdit = people.find(p => p.id === parseInt(id));
        if (personToEdit) {
            setPerson(personToEdit);
        }
    }, [id, people]);

    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate({ ...person });
        navigate('/people');
    };

    const handleDelete = () => {
        onDelete(parseInt(id));
        navigate('/people');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>사람정보수정</h1>
            <hr />
            <label>이름: <input type="text" name="name" value={person.name} onChange={handleChange} placeholder="Name" /></label><br />
            <label>나이: <input type="number" name="age" value={person.age} onChange={handleChange} placeholder="Age" /></label><br />
            <label>직업: <input type="text" name="job" value={person.job} onChange={handleChange} placeholder="Job" /></label><br />
            <button type="submit" style={{ marginRight: '8px' }}>수정</button>
            <button type="button" onClick={handleDelete}>삭제</button>
            <br />
            <br />
            <Link to="/people">사람목록보기</Link>
        </form>
    );
}

export default EditPersonForm;