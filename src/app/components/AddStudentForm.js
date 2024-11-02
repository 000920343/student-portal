// app/components/AddStudentForm.js

import { useState } from "react";

export default function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.dob && formData.grade) {
      onAddStudent(formData);
      setFormData({ firstName: "", lastName: "", dob: "", grade: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <input name="dob" type="date" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} />
      <input name="grade" placeholder="Grade" value={formData.grade} onChange={handleChange} />
      <button type="submit">Add Student</button>
    </form>
  );
}
