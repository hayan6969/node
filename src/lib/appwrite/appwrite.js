import { Client, Databases, Account, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // ✅ Use Appwrite Cloud URL
  .setProject("679f0cb6001689ab61cf"); // ✅ Use your project ID from environment variables

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { account, databases, storage, client };
