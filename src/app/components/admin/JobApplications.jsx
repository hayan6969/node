import React, { useEffect, useState } from 'react';
import { getJobsList } from "@/lib/appwrite/adminApi";

const JobApplications = () => {
    // State to store jobs and selected job
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    // Fetch jobs when the component mounts
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobList = await getJobsList();
                setJobs(jobList);  // Assuming the job list is returned in an array format
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    // Handler to open the modal with job details
    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    // Handler to close the modal
    const closeModal = () => {
        setSelectedJob(null);
    };

    return (
        <div>
            <h1>Job Applications</h1>

            {/* Display the job list */}
            <div className="job-list">
                {jobs.length === 0 ? (
                    <p>No jobs available.</p>
                ) : (
                    jobs.map((job) => (
                        <div 
                            key={job.id} 
                            className="job-item" 
                            onClick={() => handleJobClick(job)}
                        >
                            <h2>{job.title}</h2>
                            <p>{job.location}</p>
                        </div>
                    ))
                )}
            </div>

            {/* Modal to display selected job details */}
            {selectedJob && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedJob.title}</h2>
                        <p><strong>Location:</strong> {selectedJob.location}</p>
                        <p><strong>Description:</strong> {selectedJob.description}</p>
                        <p><strong>Salary:</strong> {selectedJob.salary}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobApplications;
