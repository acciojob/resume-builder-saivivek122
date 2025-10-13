import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEducation, deleteEducation } from "./actions";

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector(state => state.education);

  const [form, setForm] = useState({ courseName: "", completionYear: "", college: "", percentage: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = () => {
    dispatch(addEducation(form));
    setForm({ courseName: "", completionYear: "", college: "", percentage: "" });
  };

  return (
    <div>
      <h2>Education</h2>
      <input name="courseName" data-testid="courseName-input" placeholder="Course Name" value={form.courseName} onChange={handleChange} />
      <input name="completionYear" data-testid="completionYear-input" placeholder="Completion Year" value={form.completionYear} onChange={handleChange} />
      <input name="college" data-testid="college-input" placeholder="College" value={form.college} onChange={handleChange} />
      <input name="percentage" data-testid="percentage-input" placeholder="Percentage" value={form.percentage} onChange={handleChange} />
      <button id="add_education" onClick={handleAdd}>Add Education</button>

      <ul>
        {education.map((edu, i) => (
          <li key={i}>{edu.courseName} - {edu.college} ({edu.completionYear}) [{edu.percentage}%] <button id="delete" onClick={() => dispatch(deleteEducation(i))}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
