// PersonForm.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PersonForm({ person: initialPerson, onSave }) {
    const [ person, setPerson ] = useState(initialPerson || { name: '', age: '', job: ''});

   useEffect(() => {
    setPerson(initialPerson || { name: '', age: '', job: ''});
   }, [initialPerson]);

    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(person);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>사람정보입력</h1>
            <hr />
            <label>이름: <input type="text" name="name" value={person.name} onChange={handleChange} placeholder="Name" /></label><br />
            <label>나이: <input type="number" name="age" value={person.age} onChange={handleChange} placeholder="Age" /></label><br />
            <label>직업: <input type="text" name="job" value={person.job} onChange={handleChange} placeholder="Job" /></label><br />
            <button type="submit">입력</button>
            <br />
            <br />
            <Link to="/people">사람목록보기</Link>
        </form>
    );
}

export default PersonForm;