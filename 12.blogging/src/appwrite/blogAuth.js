import conf from "../config/config";
import { Client, ID, Databases, Storage } from "appwrite"


export class DBService {

    client = new Client();
    databases
    bucket

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }


    //Create a Post

    async function createPost({title, slug, content, featureImage, status, userID}) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {title, content, featureImage, status, userID}
            )
        } catch (error) {
            
        }
        
    }

}

const Dbservice = new DBService();
export default Dbservice;