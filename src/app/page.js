// app/page.js

"use client"; // Ensures client-side hooks like useState and useEffect work

import { useState, useEffect } from "react";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";

export default function HomePage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/data/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error loading students:", error));
  }, []);
  

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };

  return (
    <div>
      <StudentList students={students} />
      <AddStudentForm onAddStudent={addStudent} />
    </div>
  );
}
