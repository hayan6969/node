import { getApplicationsByIds } from "@/lib/appwrite/adminApi";
import { storage } from "@/lib/appwrite/appwrite";
import { useEffect, useState } from "react";

const ApplicationDetails = ({ applicationsList }) => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                let res = await getApplicationsByIds(applicationsList);
                setApplications(res);
                console.log('data,,,,', res);
                setLoading(false);
            } catch (error) {
                console.log('data,,,errrr,', error);
                setLoading(false);
            }
        })()
    }, [applicationsList]);

    // Function to handle email click and show modal
    const handleEmailClick = async (applicant) => {
        console.log('got',applicant);
        setSelectedApplicant(applicant);
        setShowModal(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedApplicant(null);
    };

    async function docDownload(fileId) {
        try {
            const fileUrl = storage.getFileView("67a1d4bd001eb105953e", fileId); // No need to await
            console.log('File URL:', fileUrl);
            window.open(fileUrl, "_blank", "noopener,noreferrer");
        } catch (error) {
            console.log('Document download error:', error);
        }
    }
    

    if (loading) {
        return (<h1>Loading....</h1>);
    }

    return (
        <>
            <ul>
                {applications && applications.length > 0 ? (
                    applications.map((applicant, index) => (
                        <li key={index}>
                            <span
                                style={{ cursor: "pointer", color: "#007bff", textDecoration: "underline" }}
                                onClick={() => handleEmailClick(applicant)}
                            >
                                {applicant.email}
                            </span>
                        </li>
                    ))
                ) : (
                    <li>No applicants found.</li>
                )}
            </ul>

            {/* Modal for showing applicant details */}
            {showModal && selectedApplicant && (
                <div style={modalOverlay}>
                    <div style={modalContent}>
                        <h3>Applicant Details</h3>
                        <p><strong>Email:</strong> {selectedApplicant.email}</p>
                        <p><strong>First Name:</strong> {selectedApplicant.first_name}</p>
                        <p><strong>Last Name:</strong> {selectedApplicant.last_name}</p>
                        <p><strong>Phone:</strong> {selectedApplicant.phone}</p>
                        <p><strong>Why us:</strong> {selectedApplicant.why_us}</p>
                        <p><strong>Discord ID:</strong> {selectedApplicant.discord_id || "N/A"}</p>
                        <p><strong>LinkedIn:</strong> {selectedApplicant.linkedin || "N/A"}</p>
                        <p><strong>Website:</strong> {selectedApplicant.website || "N/A"}</p>
                        <p onClick={() => docDownload(selectedApplicant.document)}><strong>Document:</strong> <button 
  style={{
    backgroundColor: "blue",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  }}
>
  Download
</button>
 </p>

                        <button onClick={closeModal} style={closeButtonStyle}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
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
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#6c757d",
    color: "#fff",
    cursor: "pointer",
    marginTop: "20px",
};

export default ApplicationDetails;
