import { ID } from "appwrite";
import { account, databases } from "./appwrite";
import { getCurrentUser } from "./userApi";

export const checkAdmin = async () => {
    const currUser = await getCurrentUser();
    return currUser.isAdmin;
}

export const getApplicationsByIds = async (applicationIds) => {
    try {
        // console.log('ids:', applicationIds);
        
        // Using Promise.all to fetch all the applications concurrently
        const applicationPromises = applicationIds.map(applicationId =>
            databases.getDocument(
                process.env.NEXT_PUBLIC_DB_ID,  // Database ID
                process.env.NEXT_PUBLIC_APPLICATIONS_COLLECTION, // Collection ID
                applicationId
            )
        );
  
        // Wait for all promises to resolve
        const responses = await Promise.all(applicationPromises);
        
        // Filter out any null values in case some applications were not found
        return responses;

    } catch (error) {
        console.log('Error fetching applications:', error);
        return [];
    }
};

  

export const createJob = async (data) => {

    try {
        // console.log('check admin', await checkAdmin());

        if (await checkAdmin()) {
            const response = await databases.createDocument(
                process.env.NEXT_PUBLIC_DB_ID,  // Database ID
                process.env.NEXT_PUBLIC_JOBS_COLLECTION, // The collection ID
                ID.unique(), // Automatically generate a unique ID for this document
                data
            );
            

        }
        else {
            alert('Only Admin can create Jobs!');
        }
    } catch (error) {
        console.log('job create error:', error);

    }
}

export const getJobsList = async () => {
    try {
        const response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID,  // Database ID
            process.env.NEXT_PUBLIC_JOBS_COLLECTION, // The collection ID
        );
        const jobsList = response.documents;
        console.log('list',jobsList);
        
        return jobsList;
    } catch (error) {
        console.log('jobs fetching error:',error);
        
    }
}

export const updateJob = async (jobId,updatedData) => {
    try {
    
        const response = await databases.updateDocument(
            process.env.NEXT_PUBLIC_DB_ID,  // Database ID
            process.env.NEXT_PUBLIC_JOBS_COLLECTION, // Collection ID
            jobId,  // Document (Job) ID
            updatedData
        );
    
        console.log('Job updated successfully:', response);
        return response;
    } catch (error) {
        console.log('Error updating job:', error);
    }
}

export const removeJob = async (jobId) => {
    try {
        const response = await databases.deleteDocument(
            process.env.NEXT_PUBLIC_DB_ID,  // Database ID
            process.env.NEXT_PUBLIC_JOBS_COLLECTION, // Collection ID
            jobId  // Document (Job) ID
        );
    
        console.log('Job deleted successfully:', response);
    } catch (error) {
        console.log('Error deleting job:', error);
    }
    
}