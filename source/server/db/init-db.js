import { config } from '../picker';
import { connectDb } from './util';
import { cartoons, americandadChars, familyguyChars, kingofthehillChars, simpsonsChars, southparkChars, comments, visitors } from './seed-data';

const initDb = () => {

    let mongoDbUrl = config.mongoDB.url + config.mongoDB.dbName;
    console.log('Connecting and initializing DB on : ', mongoDbUrl);

    connectDb() 
        .then(db => {
            createData(db)
                .then(() => {
                    console.log('Completed initDB successfully.')
                    db.close();
                })
                .catch(err => {
                    db.close();
                })
        })
        .catch(err => {
            console.log('Failed to connect to DB.', err)
        })
}

const createData = (db) => {

    return new Promise((resolve, reject) => {

        let cartoonColl = db.collection('cartoon');
        let charColl = db.collection('character');
        let visitorColl = db.collection('visitor');
        let commentColl = db.collection('comment');

        // Delete any existing data to clean up Collection and insert new Data.
        cartoonColl.deleteMany({});
        charColl.deleteMany({});
        visitorColl.deleteMany({});
        commentColl.deleteMany({});

        cartoonColl.insert(cartoons(),
            (err, result) => {
                if (result && result.insertedCount > 0) {
                    charColl.insert(simpsonsChars(result.insertedIds[0]), (err, result) => {
                    });
                    charColl.insert(familyguyChars(result.insertedIds[1]), (err, result) => {
                    });
                    charColl.insert(americandadChars(result.insertedIds[2]), (err, result) => {
                    });
                    charColl.insert(southparkChars(result.insertedIds[3]), (err, result) => {
                    });
                    charColl.insert(kingofthehillChars(result.insertedIds[4]), (err, result) => {
                    });

                    visitorColl.insert(visitors(), (err, result) => {
                    });
                    commentColl.insert(comments(), (err, result) => {
                    });
                }
                resolve();
            });
    });
}

initDb();