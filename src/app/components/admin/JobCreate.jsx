"use client";
import { createJob } from "@/lib/appwrite/adminApi";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

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
    const skill_qualifications = skills.filter(
      (skill) => skill.trim() !== ""
    );

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
      toast.success("Job created successfully!");
      // Wait for 2 seconds, then refresh the page completely
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error creating job:", error);
      toast.error("Error creating job. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-5 py-2 max-w-[600px] my-0 mx-auto rounded-lg shadow-lg bg-gray-800">
      <h1 className="text-2xl font-bold mb-5 text-center text-white">
        Create Job
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="text-base font-medium text-white">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-3 py-2 bg-gray-700 text-white text-base rounded-sm border border-slate-600 mt-1"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="text-base font-medium text-white"
          >
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            className="w-full px-3 py-2 bg-gray-700 text-white text-base rounded-sm border border-slate-600 mt-1"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="responsibilities"
            className="text-base font-medium text-white"
          >
            Responsibilities
          </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            required
            className="w-full px-3 py-2 bg-gray-700 text-white text-base rounded-sm border border-slate-600 mt-1"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="skills"
            className="text-base font-medium text-white"
          >
            Skills & Qualifications
          </label>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex gap-2 items-center mt-1 mb-2"
            >
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e)}
                className="w-full px-3 py-2 bg-gray-700 text-white text-base rounded-sm border border-slate-600"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addSkillField}
            className="px-4 py-2 border border-[#004AAD] text-white rounded-sm cursor-pointer hover:bg-[#004AAD] hover:bg-opacity-50"
          >
            Add Another Skill
          </button>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 border border-[#004AAD] text-white rounded-sm cursor-pointer hover:bg-[#004AAD] hover:bg-opacity-50"
          >
            {loading ? (
              <div className="flex justify-center">
                <div
                  className="spinner"
                  style={{
                    border: "4px solid #f3f3f3",
                    borderTop: "4px solid #007bff",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    animation: "spin 1s linear infinite",
                  }}
                ></div>
              </div>
            ) : (
              "Create Job Listing"
            )}
          </button>
        </div>
      </form>
      <Toaster />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default JobCreate;
