"use client";
import { getJobsList, updateJob, removeJob, getApplicationsByIds } from "@/lib/appwrite/adminApi";
import { useEffect, useState } from "react";
import JobCreate from './JobCreate';
import ApplicationDetails from './ApplicationDetails';

const JobManage = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deletingJobId, setDeletingJobId] = useState(null);
  const [editingJob, setEditingJob] = useState(null);
  const [createJobVisible, setCreateJobVisible] = useState(false);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    responsibilities: "",
    skill_qualifications: [],
  });

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const jobs = await getJobsList();
      setJobs(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (jobId) => {
    if (confirm("Are you sure you want to delete this job?")) {
      setDeletingJobId(jobId);
      try {
        await removeJob(jobId);
        setJobs(jobs.filter((job) => job.$id !== jobId));
      } catch (error) {
        console.error("Error deleting job:", error);
      } finally {
        setDeletingJobId(null);
      }
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setEditForm({
      title: job.title,
      description: job.description,
      responsibilities: job.responsibilities || "",
      skill_qualifications: job.skill_qualifications || [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...editForm.skill_qualifications];
    updatedSkills[index] = value;
    setEditForm((prev) => ({ ...prev, skill_qualifications: updatedSkills }));
  };

  const addSkill = () => {
    setEditForm((prev) => ({
      ...prev,
      skill_qualifications: [...prev.skill_qualifications, ""],
    }));
  };

  const removeSkill = (index) => {
    setEditForm((prev) => ({
      ...prev,
      skill_qualifications: prev.skill_qualifications.filter((_, i) => i !== index),
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateJob(editingJob.$id, editForm);
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job.$id === editingJob.$id ? { ...job, ...editForm } : job))
      );
      setEditingJob(null);
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className='p-5 max-w-[700px] my-5 mx-auto shadow-[0 4px 8px rgba(0, 0, 0, 0.1)] flex flex-col border border-[#B9722D] text-white rounded-md'>
<div className={`${!createJobVisible?"flex-col":"flex-col-reverse"} flex`}>

<button className='px-4 py-2 border border-[#004AAD] text-white rounded-sm cursor-pointer mx-6 mb-4 hover:bg-opacity-50 hover:bg-[#004AAD]' onClick={() => setCreateJobVisible(!createJobVisible)}>{!createJobVisible?"Create Job":"Cancel"}</button>
{createJobVisible ? <JobCreate /> : <></>}
</div>


      {/* Edit Form with Proper Styling */}
      {editingJob && (
        <div className="p-5 rounded-lg shadow-[0 4px 8px rgba(0, 0, 0, 0.1)] mt-5">
          <h1>Edit Job</h1>
          <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input style={inputStyle} className="text-black" type="text" name="title" value={editForm.title} onChange={handleChange} placeholder="Title" required />
            <textarea style={inputStyle} className="text-black" name="description" value={editForm.description} onChange={handleChange} placeholder="Description" required />
            <textarea style={inputStyle} className="text-black" name="responsibilities" value={editForm.responsibilities} onChange={handleChange} placeholder="Responsibilities" />

            <h4>Skills:</h4>
            {editForm.skill_qualifications.map((skill, index) => (
              <div key={index} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <input className="text-black " style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ddd" }} type="text" value={skill} onChange={(e) => handleSkillChange(index, e.target.value)} />
                <button type="button" onClick={() => removeSkill(index)} style={removeButtonStyle}>X</button>
              </div>
            ))}
            <button type="button" onClick={addSkill} className="w-full px-3 py-1 rounded-sm text-center border border-[#004AAD] hover:bg-[#004AAD] hover:bg-opacity-50">Add Skill</button>

            <button type="submit" className="w-full px-3 py-1 rounded-sm text-center border border-[#004AAD] hover:bg-[#004AAD] hover:bg-opacity-50">Update Job</button>
            <button type="button" onClick={() => setEditingJob(null)} className="w-full px-3 py-1 rounded-sm text-center border border-[#B9722D] hover:bg-[#B9722D] hover:bg-opacity-50" >Cancel</button>
          </form>
        </div>
      )}


      <h2 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>Job Listings</h2>

      {loading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {jobs ? jobs.map((job) => (
            <li className="grid grid-cols-3 gap-2 items-center justify-between p-2 border-b border-[#B9722D]" key={job.$id}>
              <span style={{ cursor: "pointer", color: "#007bff", fontWeight: "bold" }} onClick={() => { setSelectedJob(job); setShowModal(true); }}>
                {job.title}
              </span>
              <span className="text-center" >responses: {job.applicants.length}</span>
              <div className="flex gap-2 justify-end w-full">
                <button className="border border-[#B9722D] rounded-full py-1 text-white cursor-pointer px-3" onClick={() => handleEdit(job)}>
                  Edit
                </button>
                <button
                className="rounded-full py-1 px-3 border border-[#004AAD] text-white cursor-pointer"
                  onClick={() => handleDelete(job.$id)}
                  style={{opacity: deletingJobId === job.$id ? 0.6 : 1,}}
                  disabled={deletingJobId === job.$id}
                >
                  {deletingJobId === job.$id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </li>
          )):''}
        </ul>
      )}
      {showModal && selectedJob && (
        <div style={modalOverlay}  className="text-black">
          <div style={modalContent}>
            <h3>{selectedJob.title}</h3>
            <p><strong>Description:</strong> {selectedJob.description}</p>
            <p><strong>Responsibilities:</strong> {selectedJob.responsibilities}</p>
            <p><strong>Skills:</strong></p>
            <ul>
              {selectedJob.skill_qualifications.map((skill, index) => (
                <li key={index}>✅ {skill}</li>
              ))}
            </ul>

            {/* List of Applicants */}
            <h4>Applicants:</h4>
            <ul>
              {selectedJob.applicants.length === 0 ? (
                <p>No applicants yet. {selectedJob.applicants.length}</p>
              ) : (
                <ApplicationDetails applicationsList={selectedJob.applicants} />
              )}

            </ul>

            <button onClick={() => setShowModal(false)} style={closeButtonStyle}>Close</button>
          </div>
        </div>
      )}


      {/* <button style={{margin: '20px 70px', ...buttonStyle }} onClick={() => setCreateJobVisible(!createJobVisible)}>Create Job</button>

      {createJobVisible ? <JobCreate /> : <></>} */}

    </div>
  );
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  width: "100%",
};

const buttonStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

const removeButtonStyle = {
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  padding: "5px 10px",
};

const cancelButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#6c757d",
};


const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContent = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
};

const closeButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#6c757d",
  marginTop: "10px",
};

export default JobManage;