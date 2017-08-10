import { MongoClient } from 'mongodb';
import { config } from '../picker';

export const connectDb = () => {

    return new Promise((resolve, reject) => {
        let mongoDbUrl = config.mongoDB.url + config.mongoDB.dbName;
        console.log(mongoDbUrl)
        MongoClient.connect(mongoDbUrl, (err, db) => {
            if (err)
                reject(err);
            else {
                resolve(db);
            }
        })
    })
}