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
    <div className='px-5 py-2 max-w-[600px] my-0 mx-auto rounded-[8px] shadow-[0 4px 8px rgba(0, 0, 0, 0.1)]'>
      <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}>Create Job</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="title" className='text-base font-medium text-white'>Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className='w-full p-3 rounded-sm border text-base'
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="description" className='text-base font-medium text-white'>Job Description</label>
          <textarea
            id="description"
            name="description"
            required
            className='w-full p-3 rounded-sm border text-base'
          ></textarea>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="responsibilities" className='text-base font-medium text-white'>Responsibilities</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            required
            className='w-full p-3 rounded-sm border text-base'
          ></textarea>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="skills" className='text-base font-medium text-white'>Skills & Qualifications</label>
          {skills.map((skill, index) => (
            <div key={index} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}
                className='w-full p-3 rounded-sm border text-base'
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addSkillField}
            className='px-4 py-2 border border-[#004AAD] text-white rounded-sm cursor-pointer hover:bg-opacity-50 hover:bg-[#004AAD]'
          >
            Add Another Skill
          </button>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <button
className='px-4 py-2 border border-[#004AAD] text-white rounded-sm cursor-pointer hover:bg-opacity-50 hover:bg-[#004AAD]'
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