"use client"
import { useState, useEffect } from "react";
import { getJobsList } from "@/lib/appwrite/adminApi"; // Assuming you have this API
import Link from 'next/link';

const Page = () => {
    // State to hold the job list and loading status
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);  // Initially, loading is true

    useEffect(() => {
        // Fetch jobs list when the component mounts
        const fetchJobs = async () => {
            try {
                const jobsData = await getJobsList(); // Assuming this returns the job data
                setJobs(jobsData); // Update the jobs state with the fetched data
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched (or error happens)
            }
        };

        fetchJobs();
    }, []); // Empty dependency array means this runs once on mount

    // Function to format the date to '28. No 2024' format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate(); // Get the day
        const month = date.toLocaleString('default', { month: 'short' }); // Get the short month name
        const year = date.getFullYear(); // Get the year

        return `${day}. ${month} ${year}`; // Format the date as '28. No 2024'
    };

    return (
        <div>
            <h1>JOBS PAGES</h1>

            {loading ? (
                <p>Loading...</p> // Show loading text while data is being fetched
            ) : (
                <ul>
                    {jobs.map((job, index) => (
                        <li
                            key={index}
                            style={{
                                border: '2px solid',
                                width: 'fit-content',
                                padding: '10px',
                                borderRadius: '10px',
                                margin: '10px',
                                display: 'flex',
                                gap: '50px',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <Link href={`/jobs/${job.$id}`}>
                                    <h1 className="job-title">{job.title}</h1>
                                </Link>
                                <span>remote</span>
                            </div>
                            <div>
                                <span>{formatDate(job.$createdAt)}</span> {/* Format the creation date */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Page;
