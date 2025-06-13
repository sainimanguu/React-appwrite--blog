import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.ProjectId)

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                this.login({ email, password })
            }
            else {
                return userAccount;
            }
        }
        catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw { error }
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log(error)
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions('current');
        } catch (error) {
            console.log(error)
        }
    }
}
 
const authService = new AuthService();

export default authService
