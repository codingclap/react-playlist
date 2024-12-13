import conf from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {

    const client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // Signup
    async function createAccount({ email, password, name }) {

    try {
        const userAccount = await this.account.create(ID.unique(), email, password, name);
        if (userAccount) {
            // call another function
            return this.login({ email, password });
        } else {
            return userAccount;
        }
    } catch (error) {
        console.log(error);
    }
}

// Login 
async function login({ email, password }) {

    try {
        await this.account.createEmailPasswordSession(email, password);
    } catch (error) {

    }
}
}


const authService = new AuthService();        // Creating a object of a class AuthService

export default authService