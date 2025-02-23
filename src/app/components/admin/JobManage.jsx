"use client";
import { getJobsList, updateJob, removeJob, getApplicationsByIds } from "@/lib/appwrite/adminApi";
import { useEffect, useState } from "react";
import JobCreate from "./JobCreate";
import ApplicationDetails from "./ApplicationDetails";
import { toast, Toaster } from "sonner";

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

  // States for deletion confirmation modal
  const [deleteConfirmJobId, setDeleteConfirmJobId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const jobsList = await getJobsList();
      setJobs(jobsList ?? []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Error fetching jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Instead of a confirm() dialog, we show a custom deletion confirmation modal.
  const handleDelete = (jobId) => {
    setDeleteConfirmJobId(jobId);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteConfirmJobId) return;
    setDeletingJobId(deleteConfirmJobId);
    try {
      await removeJob(deleteConfirmJobId);
      setJobs((prevJobs) => prevJobs.filter((job) => job.$id !== deleteConfirmJobId));
      toast.success("Job deleted successfully!");
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error("Error deleting job. Please try again.");
    } finally {
      setDeletingJobId(null);
      setShowDeleteConfirm(false);
      setDeleteConfirmJobId(null);
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
        prevJobs.map((job) =>
          job.$id === editingJob.$id ? { ...job, ...editForm } : job
        )
      );
      toast.success("Job updated successfully!");
      setEditingJob(null);
    } catch (error) {
      console.error("Error updating job:", error);
      toast.error("Error updating job. Please try again.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-5 max-w-[700px] my-5 mx-auto shadow-lg flex flex-col border border-[#B9722D] text-white rounded-md bg-gray-900">
      <div className={`flex flex-col ${!createJobVisible ? "sm:flex-col" : "sm:flex-col-reverse"}`}>
        <button
          className="px-4 py-2 border border-[#004AAD] text-white rounded-sm cursor-pointer mx-6 mb-4 hover:bg-[#004AAD] hover:bg-opacity-50"
          onClick={() => setCreateJobVisible(!createJobVisible)}
        >
          {!createJobVisible ? "Create Job" : "Cancel"}
        </button>
        {createJobVisible && <JobCreate />}
      </div>

      {/* Edit Form */}
      {editingJob && (
        <div className="p-5 rounded-lg shadow-lg mt-5 bg-gray-800">
          <h1 className="text-xl mb-4">Edit Job</h1>
          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <input
              type="text"
              name="title"
              value={editForm.title}
              onChange={handleChange}
              placeholder="Title"
              required
              className="w-full bg-gray-700 text-white text-sm outline-none rounded-md px-3 py-2 border border-slate-600"
            />
            <textarea
              name="description"
              value={editForm.description}
              onChange={handleChange}
              placeholder="Description"
              required
              className="w-full bg-gray-700 text-white text-sm outline-none rounded-md px-3 py-2 border border-slate-600"
            />
            <textarea
              name="responsibilities"
              value={editForm.responsibilities}
              onChange={handleChange}
              placeholder="Responsibilities"
              className="w-full bg-gray-700 text-white text-sm outline-none rounded-md px-3 py-2 border border-slate-600"
            />
            <h4 className="mt-2">Skills:</h4>
            {editForm.skill_qualifications.map((skill, index) => (
              <div key={index} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  className="flex-1 w-full bg-gray-700 text-white text-sm outline-none rounded-md px-3 py-2 border border-slate-600"
                />
                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="bg-red-600 text-white rounded-md px-3 py-1"
                >
                  X
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addSkill}
              className="w-full px-3 py-1 rounded-sm text-center border border-[#004AAD] hover:bg-[#004AAD] hover:bg-opacity-50"
            >
              Add Skill
            </button>
            <button
              type="submit"
              className="w-full px-3 py-1 rounded-sm text-center border border-[#004AAD] hover:bg-[#004AAD] hover:bg-opacity-50"
            >
              Update Job
            </button>
            <button
              type="button"
              onClick={() => setEditingJob(null)}
              className="w-full px-3 py-1 rounded-sm text-center border border-[#B9722D] hover:bg-[#B9722D] hover:bg-opacity-50"
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      <h2 className="text-xl my-4">Job Listings</h2>

      {loading ? (
        <div className="text-center py-4">Loading...</div>
      ) : (
        <ul className="list-none p-0">
          {jobs.map((job) => (
            <li
              key={job.$id}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center justify-between p-2 border-b border-[#B9722D]"
            >
              <span
                className="cursor-pointer text-blue-400 font-bold"
                onClick={() => {
                  setSelectedJob(job);
                  setShowModal(true);
                }}
              >
                {job.title}
              </span>
              <span className="text-center">
                responses: {job.applicants.length}
              </span>
              <div className="flex gap-2 justify-end w-full">
                <button
                  className="border border-[#B9722D] rounded-full py-1 text-white cursor-pointer px-3"
                  onClick={() => handleEdit(job)}
                >
                  Edit
                </button>
                <button
                  className="rounded-full py-1 px-3 border border-[#004AAD] text-white cursor-pointer"
                  onClick={() => handleDelete(job.$id)}
                  style={{
                    opacity: deletingJobId === job.$id ? 0.6 : 1,
                  }}
                  disabled={deletingJobId === job.$id}
                >
                  {deletingJobId === job.$id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Job Details Modal */}
      {showModal && selectedJob && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-md shadow-lg text-white">
            <h3 className="text-xl font-bold mb-4">{selectedJob.title}</h3>
            <p>
              <strong>Description:</strong> {selectedJob.description}
            </p>
            <p>
              <strong>Responsibilities:</strong> {selectedJob.responsibilities}
            </p>
            <p className="mt-2 font-semibold">Skills:</p>
            <ul className="list-disc ml-5">
              {selectedJob.skill_qualifications.map((skill, index) => (
                <li key={index}>✅ {skill}</li>
              ))}
            </ul>
            <h4 className="mt-4 font-semibold">Applicants:</h4>
            <ul>
              {selectedJob.applicants.length === 0 ? (
                <p>No applicants yet. {selectedJob.applicants.length}</p>
              ) : (
                <ApplicationDetails applicationsList={selectedJob.applicants} />
              )}
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-sm shadow-lg text-white text-center">
            <h3 className="text-xl font-bold mb-2">Confirm Deletion</h3>
            <p>Are you sure you want to delete this job?</p>
            <div className="flex gap-4 justify-center mt-4">
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 rounded-sm border border-blue-600 hover:bg-blue-600 hover:bg-opacity-50"
                disabled={deletingJobId !== null}
              >
                Yes, Delete
              </button>
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeleteConfirmJobId(null);
                }}
                className="px-4 py-2 rounded-sm border border-yellow-600 hover:bg-yellow-600 hover:bg-opacity-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Toaster />
    </div>
  );
};

export default JobManage;
