import { ID, Query } from "appwrite";
import { account, databases } from "./appwrite";

export const enableAuth = async (authType) => {
    try {
      // Get the current logged-in user
      const user = await account.get();
      // console.log('authType:', authType);
  
      // Check if the provided authType is valid (either sms, email, or none)
      if (['sms', 'email', 'not'].includes(authType)) {
        
        // Fetch the user document by user ID from the database
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_DB_ID,  // Database ID
          process.env.NEXT_PUBLIC_USERS_COLLECTION,  // Collection ID
          [Query.equal("email", user.email)]  // Match user email
        );
  
        if (response.documents.length === 0) {
          // console.log("User document not found");
          return;
        }
  
        let userDocument = response.documents[0];
        
        // Update the twoFa field in the user document
        userDocument.twoFa = authType;
  
        // Update the document in the database
        const updatedUser = await databases.updateDocument(
          process.env.NEXT_PUBLIC_DB_ID, // Database ID
          process.env.NEXT_PUBLICs_USERS_COLLECTION, // Collection ID
          userDocument.$id,        // Document ID
          {twoFa: authType}            // Updated document
        );
  
        // console.log(`Two-factor authentication enabled with ${authType}.`);
        return updatedUser;
  
      } else {
        throw new Error('Invalid authType. It should be either "sms", "email", or "none".');
      }
  
    } catch (error) {
      // console.error('Error enabling authentication:', error);
      alert('Failed to enable authentication.');
    }
  };
  