// app/page.js

"use client";

import { useState } from "react";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";

export default function HomePage() {
  const [students, setStudents] = useState([
    { id: 1, firstName: "John", lastName: "Doe", dob: "2005-08-15", grade: "10" },
    { id: 2, firstName: "Jane", lastName: "Smith", dob: "2006-09-22", grade: "11" },
  ]);

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
