import { ID, Query } from "appwrite";
import { account, databases, storage } from "./appwrite";


export const getJobById = async (jobId) => {

  try {
    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_JOBS_COLLECTION,  // Collection ID
      jobId                     // Document (Job) ID
    );
    return response; // Return job details
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error; // Re-throw error for handling
  }

}

export const submitApplication = async (applicationData) => {
  try {
    console.log('Application Data:', applicationData);
    
    // Get the current user
    const user = await getCurrentUser();

    // Check if the user has already applied for the same job
    const existingApplication = await databases.listDocuments(
      process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_APPLICATIONS_COLLECTION,  // Collection ID
      [
        Query.equal("userId", user.$id), // Match user ID
        Query.equal("job_id", applicationData.jobId)  // Match the job ID
      ]
    );

    if (existingApplication.total > 0) {
      // User already applied for this job, handle accordingly (e.g., show a message)
      alert("You have already applied for this job.")
      return null;  // Or throw an error, depending on your handling logic
    }

    // If no existing application, proceed to create a new application
    const response = await databases.createDocument(
      process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_APPLICATIONS_COLLECTION,  // Collection ID
      ID.unique(),              // Auto-generate unique document ID
      {
        first_name: applicationData.first_name,
        last_name: applicationData.last_name,
        email: applicationData.email,
        phone: applicationData.phone,
        why_us: applicationData.why_us,
        discord_id: applicationData.discord_id || null,
        linkedin: applicationData.linkedin || null,
        website: applicationData.website || null,
        document: applicationData.document,  // Ensure this is a valid ID
        job_id: applicationData.jobId,  // Ensure this is a valid ID 
        userId: user.$id, // User ID from Appwrite session
      }
    );

    // add applciatio to the job applicantList
    await pushToJobApplicant(response.$id,applicationData.jobId);
    // console.log("Application submitted successfully:", response);
    alert("Application submitted successfully:")

    return response;

  } catch (error) {
    console.error("Error submitting application:", error);
    throw error;
  }
};

export const pushToJobApplicant = async (applicationId, jobId) => {
  try {
    // Step 1: Fetch the job document to update the applicants array
    const jobDocument = await databases.getDocument(
      process.env.NEXT_PUBLIC_DB_ID,  // Database ID (Jobs collection)
      process.env.NEXT_PUBLIC_JOBS_COLLECTION,  // Collection ID (Jobs collection)
      jobId                    // Job ID to fetch the job details
    );

    // Step 2: Push the application ID to the applicants array in the job document
    const updatedJob = await databases.updateDocument(
      process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_JOBS_COLLECTION,  // Collection ID
      jobId,                   // Job ID to update
      {
        applicants: [
          ...jobDocument.applicants,  // Existing applicants
          applicationId              // Add the new application ID
        ]
      }
    );

    console.log("Application added to job applicants:", updatedJob);
    return updatedJob;  // Return the updated job document
  } catch (error) {
    console.error("Error in pushToJobApplicant:", error);
    throw error;  // Rethrow the error if necessary
  }
};

export const uploadDocument = async (file) => {
  console.log(file);
  try {
    const DocUpload = await storage.createFile(
      "67a1d4bd001eb105953e",// bucket id
      ID.unique(),
      file
    )
    // console.log('document uploadeed:',DocUpload.$id);
    return DocUpload.$id;
  } catch (error) {
    console.log('document upload error:',error);
  } 
}

export const updateUserData = async (updatedData) => {
  try {
    const user = await getCurrentUser();
    
    const response = await databases.updateDocument(
      process.env.NEXT_PUBLIC_DB_ID,      // Database ID
      process.env.NEXT_PUBLIC_USERS_COLLECTION,    // Collection ID
      user.$id,                  
      updatedData
    );

    // console.log('User data updated successfully:', response);
    
    return response; // Optionally return the updated document
  } catch (error) {
    // console.log('User data update error:', error);
    throw error; // Rethrow the error if needed
  }
}

export const getCurrentUser = async () => {
    // console.log('getting');

    // Get logged-in user
    const user = await account.get();
    // console.log('production',process.env.NEXT_PUBLIC_DB_ID);
    // console.log('cccccccc',user.$id);
    
    // if (!user) return null; // If no user, return null

    // Search for user document in collection by user ID
    const response = await databases.listDocuments(process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_USERS_COLLECTION, [
      Query.equal("userId", user.$id), // Match user ID
    ]);

    if (response.documents.length > 0) {
      return response.documents[0]; // Return the first found document
    } else {
      return null; // No user found in DB
    }

};

export const registerWithEmailAndPass = async (userData) => {
  // console.log('Registering the user...', userData);
  const user = await account.create(
    ID.unique(), // Unique ID for the user
    userData.email,       // User's email
    userData.password,    // User's password
  );

  let usr = await addUserToDB(userData.email, userData.username, userData.firstname, userData.lastname, userData.refer,user.$id);
  await loginEmailAndPass(userData.email,userData.password);
  return usr;
}

export const addUserToDB = async (email, username, firstname, lastname, refer,userId) => {
  try {
    // console.log('adding to doc');
    const registerData = {
      first_name: firstname,
      last_name: lastname,
      email,
      username,
      userId
    };

    // console.log('data', firstname, lastname, email);
    // Only add refer if it exists
    if (refer) {
      registerData.refer = refer;
      const response = await databases.createDocument(
        process.env.NEXT_PUBLIC_DB_ID,  // Database ID
        process.env.NEXT_PUBLIC_USERS_COLLECTION, // The collection ID
        ID.unique(), // Automatically generate a unique ID for this document
        {
          email: email,
          first_name: firstname,
          last_name: lastname,
          refer_of: refer,
          userId:userId
        }
      );
      // 
      addReferralToUser(refer, response.$id);
    }
    else {

      const response = await databases.createDocument(
        process.env.NEXT_PUBLIC_DB_ID,  // Database ID
        process.env.NEXT_PUBLIC_USERS_COLLECTION, // The collection ID
        ID.unique(), // Automatically generate a unique ID for this document
        {
          email: email,
          first_name: firstname,
          last_name: lastname,
          userId:userId
        }
      );
    }
    // console.log('addED');

  } catch (error) {
    // console.log('register DB user Error:', error);

  }
}

const addReferralToUser = async (userId, referedUser) => {
  try {
    // Fetch user by ID
    const response = await databases.getDocument(
      process.env.NEXT_PUBLIC_DB_ID, // Database ID
      process.env.NEXT_PUBLIC_USERS_COLLECTION, // Collection ID
      userId // User's unique ID
    );

    if (!response) {
      // console.log("User not found");
      return null;
    }

    // Ensure `referals` is an array (initialize if undefined)
    const existingReferrals = response.referals || [];

    // Append new referral
    existingReferrals.push(referedUser);

    // Update document with new referrals array
    const updatedUser = await databases.updateDocument(
      process.env.NEXT_PUBLIC_DB_ID, // Database ID
      process.env.NEXT_PUBLIC_USERS_COLLECTION, // Collection ID
      userId,
      { referals: existingReferrals }
    );

    return updatedUser;
  } catch (error) {
    console.error("Error updating referrals:", error);
    return null;
  }
};

export const isTwoFactorEnabled = async (email) => {
  try {
    const response = await databases.listDocuments(process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_USERS_COLLECTION, [
      Query.equal("email", email), // Match email
    ]);
    console.log(response.documents[0].twoFa);
    // console.log('two fa is :',response.documents[0].twoFa);
    
    return response.documents[0].twoFa; // Check if 2FA is enabled
  } catch (error) {
    console.error("Error checking 2FA status:", error);
    return false;
  }
};

export const sendEmailOTP = async (email) => {
  try {
    // let isEn = await isTwoFactorEnabled()
    // console.log('EMAIL:', email);
    
    // Attempt to send OTP via email
    const sessionToken = await account.createEmailToken(
      ID.unique(),
      email
    );

    const userId = sessionToken.userId;
    // console.log('Email sent successfully, user ID:', userId);

    // Return the userId for further use
    return userId;

  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error sending email OTP:', error);

    // Check if the error has a response object for API-specific errors
    if (error.response) {
      // Handle API-specific errors (if error has response)
      console.error('Error response:', error.response);

      // Customize error message based on response status
      if (error.response.status === 400) {
        alert('Invalid email format. Please provide a valid email.');
      } else if (error.response.status === 404) {
        alert('User not found with the provided email.');
      } else if (error.response.status === 500) {
        alert('Server error while sending OTP. Please try again later.');
      } else {
        alert('An unknown error occurred while sending OTP.');
      }
    } else if (error.request) {
      // Handle network or server connection issues
      console.error('Network error:', error.request);
      alert('Network error. Please check your internet connection.');
    } else {
      // Handle any other type of error
      console.error('Unexpected error:', error.message);
      alert('An unexpected error occurred while sending OTP.');
    }
  }
};



export const getUserByEmail = async (email) => {
  try {
    
    const response = await databases.listDocuments(process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_USERS_COLLECTION, [
      Query.equal("email", email), // Match email
    ]);
    
    if (response.documents.length > 0) {
      return response.documents[0]; // Return the first found document
    } else {
      return null; // No user found in DB
    }
    } catch (error) {
    console.error("Error fetching user document:", error);
    return null;
    }
}

  export const sendSmsOTP = async (email) => {
  try {
    // let isEn = await isTwoFactorEnabled()
    let user = await getUserByEmail(email);
    const response = await databases.listDocuments(process.env.NEXT_PUBLIC_DB_ID,  // Database ID
      process.env.NEXT_PUBLIC_USERS_COLLECTION, [
      Query.equal("email", email), // Match email
    ]);
    // console.log('Phone:', response.documents[0].phone);
    // Attempt to send OTP via email
    const sessionToken = await account.createPhoneToken(
      ID.unique(),
      response.documents[0].phone
    );

    const userId = sessionToken.userId;
    // console.log('Email sent successfully, user ID:', userId);

    // Return the userId for further use
    return userId;

  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error sending email OTP:', error);

    // Check if the error has a response object for API-specific errors
    if (error.response) {
      // Handle API-specific errors (if error has response)
      console.error('Error response:', error.response);

      // Customize error message based on response status
      if (error.response.status === 400) {
        alert('Invalid email format. Please provide a valid email.');
      } else if (error.response.status === 404) {
        alert('User not found with the provided email.');
      } else if (error.response.status === 500) {
        alert('Server error while sending OTP. Please try again later.');
      } else {
        alert('An unknown error occurred while sending OTP.');
      }
    } else if (error.request) {
      // Handle network or server connection issues
      console.error('Network error:', error.request);
      alert('Network error. Please check your internet connection.');
    } else {
      // Handle any other type of error
      console.error('Unexpected error:', error.message);
      alert('An unexpected error occurred while sending OTP.');
    }
  }
};

export const loginEmailAndPass = async (email, password) => {
  try {
    // console.log('Email:', email);  // Debug email value
    // console.log('Password:', password);  // Debug password value
    const response = await account.createEmailPasswordSession(email, password);
    // console.log("Login successful", response);
    // alert('login success!')
    return response;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error(error);
  }
};

export const LoginWithOTP = async (userId, otp) => {
  try {
    // console.log('GOT USER ID:', userId);
    // console.log('GOT OTP:', otp);

    // Attempt to create session using OTP
    const session = await account.createSession(userId, otp);

    // alert("LOGIN SUCCESS!");  // Alert on successful login
    // console.log('Session created successfully:', session); 

  } catch (error) {
    // Log the error for debugging purposes
    console.error('OTP login error:', error);

    // Check if the error has a response message or specific error code
    if (error.response) {
      // Handle API-specific errors (if the error contains a response object)
      console.error('Error response:', error.response);

      // Customize error message based on response status
      if (error.response.status === 400) {
        alert('Invalid OTP. Please try again.');
      } else if (error.response.status === 404) {
        alert('User not found. Please check your credentials.');
      } else if (error.response.status === 500) {
        alert('Server error. Please try again later.');
      } else {
        alert('An unknown error occurred.');
      }
    } else if (error.request) {
      // Handle network or server connection issues
      console.error('Network error:', error.request);
      alert('Network error. Please check your internet connection.');
    } else {
      // Handle any other type of error
      console.error('Unexpected error:', error.message);
      alert('An unexpected error occurred.');
    }
  }
};


export const changePassword = async (newPassword, oldPassword) => {
  // console.log('old pass:',oldPassword);
  // console.log('new pass:',newPassword);
  
  try {
      await account.updatePassword(newPassword, oldPassword);
      // console.log("Password updated successfully");
      alert('Password Change Successfully!')
  } catch (error) {
      console.error("Error updating password:", error);
  }
}

//////////////////////////////////////// TESTING ////////////////////////////////////////
export const logOut = async () => {
  try {
    const session = await account.getSession('current');
    // If session exists, proceed with deleting the session
    await account.deleteSession('current');
    localStorage.removeItem('isLoggedIn');
    // console.log('Session deleted');
    window.location.href = '/login';
  } catch (error) {
    console.error('Error:', error.message);
  }
}