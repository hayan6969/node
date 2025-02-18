import { ID, Query } from "appwrite";
import { account, databases ,OAuthProvider} from "./appwrite";
import { sendEmail } from "./paymentFunctions";

export const GoogleLogin = async () => {
  try {
      console.log('Starting Google login in a popup...');

      // Open a popup for OAuth login
      const popup = window.open(
          `https://cloud.appwrite.io/v1/account/sessions/oauth2/google?project=${process.env.NEXT_PUBLIC_PROJECT_ID}&success=${process.env.NEXT_PUBLIC_DOMAIN}/auth-callback&failure=${process.env.NEXT_PUBLIC_DOMAIN}/login`,
          "GoogleLoginPopup",
          "width=500,height=600"
      );

      if (!popup) {
          alert("Popup blocked! Please allow popups and try again.");
          return;
      }

      // Polling for the popup to close and then retrieve the session
      const checkPopup = setInterval(async () => {
          if (popup.closed) {
              clearInterval(checkPopup);
              console.log("Popup closed. Checking session...");

              try {
                  const user = await account.get();
                  if (user && user.$id) {
                      console.log("Authenticated User:", user);

                      // ✅ Check if user already exists in the database
                      const existingUsers = await databases.listDocuments(
                          process.env.NEXT_PUBLIC_DB_ID,
                          process.env.NEXT_PUBLIC_USERS_COLLECTION,
                          [Query.equal("email", user.email)]
                      );
                      // console.log('auth user:',user);
                      // console.log('documets:',existingUsers.documents);
                      
                      // alert('CHECK USER DB')
                      if (existingUsers.total === 0) {
                          console.log("User not found in DB. Adding now...");

                          // Add user to the database
                          await databases.createDocument(
                              process.env.NEXT_PUBLIC_DB_ID,
                              process.env.NEXT_PUBLIC_USERS_COLLECTION,
                              ID.unique(),
                              {
                                  email: user.email,
                                  first_name: user.name,
                                  userId: user.$id
                              }
                          );
                              await sendEmail(
                                  'Welcome to Our Platform!',
                                  `Hello ${user.name}, 🎉
                                  
                          Thank you for registering with us! We're excited to have you on board.
                          
                          - Your registered email: ${user.email}
                          
                          If you have any questions, feel free to reach out.
                          
                          Best Regards,  
                          The Team`,
                                  `<h2 style="color: blue;">Welcome to Our Platform! 🎉</h2>
                                   <p>Hello <strong>${user.name}</strong>,</p>
                                   <p>Thank you for registering with us! We're excited to have you on board.</p>
                                   <p><strong>Your registered email:</strong> ${user.email}</p>
                                   <p>If you have any questions, feel free to reach out.</p>
                                   <p>Best Regards,<br/>The Team</p>`
                                );

                          console.log("User added to DB successfully.");
                      } else {
                          console.log("User already exists in DB. Skipping insert.");
                      }

                      // Store login state
                      localStorage.setItem("isLoggedIn", "true");
                      // alert("Login successful!");

                      // Redirect after login
                      window.location.href = process.env.NEXT_PUBLIC_DOMAIN;
                  }
              } catch (error) {
                  console.error("Failed to retrieve session:", error);
              }
          }
      }, 1000); // Check every second

  } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred. Please try again.");
  }
};


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
          process.env.NEXT_PUBLIC_USERS_COLLECTION, // Collection ID
          userDocument.$id,        // Document ID
          {twoFa: authType}            // Updated document
        );
  
        // console.log(`Two-factor authentication enabled with ${authType}.`);
        return updatedUser;
  
      } else {
        throw new Error('Invalid authType. It should be either "sms", "email", or "none".');
      }
  
    } catch (error) {
      console.error('Error enabling authentication:', error);
      alert('Failed to enable authentication.');
    }
  };
  