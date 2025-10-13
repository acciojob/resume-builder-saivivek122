import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, deleteProject } from "./actions";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);
  const [form, setForm] = useState({ projectName: "", techStack: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(addProject(form));
    setForm({ projectName: "", techStack: "", description: "" });
  };

  return (
    <div>
      <h2>Add your Mini Projects</h2>
      <input name="projectName" placeholder="Project Name" value={form.projectName} onChange={handleChange} />
      <input name="techStack" placeholder="Tech Stack" value={form.techStack} onChange={handleChange} />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button id="next" onClick={handleAdd}>Add Project</button>

      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            {p.projectName} - {p.techStack}: {p.description}
            <button id="delete" onClick={() => dispatch(deleteProject(i))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
