import { createJob } from '@/lib/appwrite/adminApi';
import React, { useEffect, useState } from 'react';


const JobCreate = () => {

  const [skills, setSkills] = useState([""]);
  const [loading, setLoading] = useState(false);

  const addSkillField = () => {
    setSkills([...skills, ""]);
  };

  const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const responsibilities = event.target.responsibilities.value;
    const skill_qualifications = skills.filter(skill => skill.trim() !== "");

    setLoading(true);

    try {
      await createJob({
        title,
        description,
        responsibilities,
        skill_qualifications,
      });
      event.target.reset();
      setSkills([""]);
    } catch (error) {
      console.error("Error creating job:", error);
    } finally {
      setLoading(false);
    }
  };


    return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", backgroundColor: "#f8f9fa", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>Create Job</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="title" style={{ fontSize: "1rem", fontWeight: "500", color: "#333" }}>Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "1rem" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="description" style={{ fontSize: "1rem", fontWeight: "500", color: "#333" }}>Job Description</label>
          <textarea
            id="description"
            name="description"
            required
            style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "1rem" }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="responsibilities" style={{ fontSize: "1rem", fontWeight: "500", color: "#333" }}>Responsibilities</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            required
            style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "1rem" }}
          ></textarea>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="skills" style={{ fontSize: "1rem", fontWeight: "500", color: "#333" }}>Skills & Qualifications</label>
          {skills.map((skill, index) => (
            <div key={index} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}
                style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "1px solid #ccc", fontSize: "1rem" }}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addSkillField}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Add Another Skill
          </button>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            disabled={loading}
          >
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="spinner" style={{ border: "4px solid #f3f3f3", borderTop: "4px solid #007bff", borderRadius: "50%", width: "24px", height: "24px", animation: "spin 1s linear infinite" }}></div>
              </div>
            ) : (
              "Create Job Listing"
            )}
          </button>
        </div>
      </form>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
    );
}

export default JobCreate;
