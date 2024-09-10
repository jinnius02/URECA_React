// App.js -> App,jsx 수정
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PersonList from "./components/PersonList";
import PersonForm from "./components/PersonForm";
import EditPersonForm from "./components/EditPersonForm";

function App() {
  const [ people, setPeople ] = useState([]);

  // 데이터 로드
  useEffect(() => {
    const loadedPeople = JSON.parse(localStorage.getItem('people') || '[]');
    setPeople(loadedPeople);
  }, []);

  // 데이터 저장
  useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  // 시람 추가
  const addPerson = person => {
    setPeople([...people, { ...person, id: Date.now() }]);
    console.log(localStorage.getItem('people'));
  };

  // 사람 업데이트
  const updatePerson = updatedPerson => {
    const updatedPeople = people.map(p => p.id === updatedPerson.id ? updatedPerson : p);
    setPeople(updatedPeople);
  };

  // 사람 삭제
  const deletePerson = id => {
    const filteredPeople = people.filter(p => p.id !== id);
    setPeople(filteredPeople);
  };

  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<PersonForm onSave={addPerson} />} />
          <Route path="/people" element={<PersonList people={people} />} />
          <Route path="/edit/:id" element={<EditPersonForm people={people} onUpdate={updatePerson} onDelete={deletePerson} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
