"use client";
import { getApplicationsByIds } from "@/lib/appwrite/adminApi";
import { storage } from "@/lib/appwrite/appwrite";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

const ApplicationDetails = ({ applicationsList }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await getApplicationsByIds(applicationsList);
        setApplications(res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching applications:", error);
        toast.error("Error fetching applications. Please try again.");
        setLoading(false);
      }
    })();
  }, [applicationsList]);

  // Show modal on email click
  const handleEmailClick = (applicant) => {
    setSelectedApplicant(applicant);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedApplicant(null);
  };

  async function docDownload(fileId) {
    try {
      const fileUrl = storage.getFileView("67a1d4bd001eb105953e", fileId);
      window.open(fileUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Document download error:", error);
      toast.error("Error downloading document.");
    }
  }

  if (loading) {
    return <h1 className="text-white">Loading...</h1>;
  }

  return (
    <>
      <div className="overflow-auto max-h-80">
        {applications && applications.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-white">No</th>
                <th className="px-4 py-2 text-left text-white">Email</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              {applications.map((applicant, index) => (
                <tr key={index} className="hover:bg-gray-600">
                  <td className="px-4 py-2 text-white">{index + 1}</td>
                  <td className="px-4 py-2">
                    <span
                      className="cursor-pointer text-blue-400 underline"
                      onClick={() => handleEmailClick(applicant)}
                    >
                      {applicant.email}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No applicants found.</p>
        )}
      </div>

      {/* Applicant Details Modal */}
      {showModal && selectedApplicant && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96 shadow-lg text-white">
            <h3 className="text-xl font-bold mb-4">Applicant Details</h3>
            <p><strong>Email:</strong> {selectedApplicant.email}</p>
            <p><strong>First Name:</strong> {selectedApplicant.first_name}</p>
            <p><strong>Last Name:</strong> {selectedApplicant.last_name}</p>
            <p><strong>Phone:</strong> {selectedApplicant.phone}</p>
            <p><strong>Why us:</strong> {selectedApplicant.why_us}</p>
            <p><strong>Discord ID:</strong> {selectedApplicant.discord_id || "N/A"}</p>
            <p><strong>LinkedIn:</strong> {selectedApplicant.linkedin || "N/A"}</p>
            <p><strong>Website:</strong> {selectedApplicant.website || "N/A"}</p>
            <div className="mt-4">
              <strong>Document:</strong>{" "}
              <button
                onClick={() => docDownload(selectedApplicant.document)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500"
              >
                Download
              </button>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Toaster />
    </>
  );
};

export default ApplicationDetails;
