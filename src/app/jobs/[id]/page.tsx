"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getJobById, submitApplication, uploadDocument, getCurrentUser } from "@/lib/appwrite/userApi";

const Page = () => {
    const params = useParams();
    const id = params.id as string;

    const [job, setJob] = useState(null);
    const [user, setUser] = useState(null); // New state for user data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);  // New state for button loading

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        why_us: "some dummy text",
        document: null,
        discord_id: "", 
        linkedin: "",   
        website: "",    
    });

    useEffect(() => {
        // Fetch job details
        if (!id) return;

        const fetchJob = async () => {
            try {
                const jobData = await getJobById(id);
                setJob(jobData);
            } catch (err) {
                console.error("Error fetching job:", err);
                setError("Failed to load job details");
            }
        };

        // Fetch current user details
        const fetchUser = async () => {
            try {
                const currentUser = await getCurrentUser();
                if (currentUser) {
                    setUser(currentUser);
                    // Update formData with user details
                    setFormData({
                        first_name: currentUser.first_name, // Assuming the name is in "First Last" format
                        last_name: currentUser.last_name,
                        email: currentUser.email || "",
                        phone: currentUser.phone || "",
                        why_us: "some dummy text",  // This can be pre-filled or left empty as required
                        document: null,
                        discord_id: currentUser.discord_id || "", 
                        linkedin: currentUser.linkedin || "",   
                        website: currentUser.website || "",
                    });
                }
            } catch (err) {
                console.error("Error fetching user:", err);
                setError("Failed to load user details");
            }
        };

        // Fetch job and user data
        fetchJob();
        fetchUser();

        setLoading(false); // End loading after both data are fetched
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({ ...prev, document: file }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.first_name || !formData.last_name || !formData.email || !formData.phone || !formData.why_us || !formData.document) {
            setMessage("Please fill all required fields and upload a document.");
            return;
        }

        // Set loading state for button
        setIsSubmitting(true);

        // formData.jobId = id;
        try {
            const documentId = await uploadDocument(formData.document);
            formData.jobId = id;
            formData.document = documentId;
            await submitApplication(formData);  // Call to submit the application
            setMessage("Application submitted successfully!");
        } catch (err) {
            setMessage("Error submitting application.");
        } finally {
            setIsSubmitting(false);  // Reset button loading state
        }
    };

    if (loading) return <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

    return (
        <>
            {/* Job Details Section */}
            <div style={{ padding: "20px", borderBottom: "2px solid #ddd", maxWidth: "800px", margin: "20px auto" }}>
                <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>Job Details</h1>
                <h2 style={{ fontSize: "22px", color: "#333" }}>{job?.title}</h2>
                <p style={{ fontSize: "16px", color: "#555" }}>{job?.description}</p>
                <span style={{ fontSize: "14px", color: "#777" }}>Posted on: {new Date(job?.$createdAt).toLocaleDateString()}</span>
            </div>

            {/* Job Application Form */}
            <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "2px solid #ddd", borderRadius: "10px", background: "#f9f9f9" }}>
                <h2 style={{ fontSize: "22px", marginBottom: "15px" }}>Apply for this Job</h2>
                {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {/* Required Fields */}
                    <input type="text" name="first_name" placeholder="First Name *" value={formData.first_name} onChange={handleChange} required 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    <input type="text" name="last_name" placeholder="Last Name *" value={formData.last_name} onChange={handleChange} required 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    <input type="tel" name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} required 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    <textarea name="why_us" placeholder="Why Us? *" value={formData.why_us} onChange={handleChange} required 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", minHeight: "80px" }} />

                    {/* Optional Fields */}
                    <input type="text" name="discord_id" placeholder="Discord ID (optional)" value={formData.discord_id} onChange={handleChange} 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    <input type="url" name="linkedin" placeholder="LinkedIn Profile (optional)" value={formData.linkedin} onChange={handleChange} 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    <input type="url" name="website" placeholder="Portfolio/Website (optional)" value={formData.website} onChange={handleChange} 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />

                    {/* File Upload */}
                    <input type="file" name="document" onChange={handleFileChange} required 
                        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} />

                    {/* Submit Button */}
                    <button type="submit" 
                        style={{ cursor: "pointer", padding: "10px", backgroundColor: "black", color: "white", borderRadius: "5px", fontSize: "16px" }}>
                        {isSubmitting ? "Submitting..." : "Submit Application"} {/* Show loading text when submitting */}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Page;
