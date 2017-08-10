import { getDb, closeDb, connectDb } from './util';

export const getCartoons = () => {
    return getData('cartoon', {}, {});
};

export const getCartoon = (cartoonId) => {
    return getData('cartoon', { _id: cartoonId }, {});
};

export const getCharacters = (cartoonId) => {
    return getData('character', { cartoonId: cartoonId }, {});
};

export const getVisitors = () => {
    return getData('visitor', {}, {});
};

export const getComments = () => {
    return getData('comment', {}, {});
};

export const addNewComment = (newComment) => {
    newComment = { ...newComment, dateTime: new Date() };
    return new Promise((resolve, reject) => {
        connectDb()
            .then(db => {
                db.collection('comment').insert(newComment, (err, result) => {
                    console.log('Comment Save : ', result);
                    if (err)
                        reject(err);
                    resolve(result.ops);
                })
            })
    })
};

export const login = () => {

};

const getData = (type, filter = {}, project = {}, options = {}) => {

    return new Promise((resolve, reject) => {

        connectDb()
            .then(db => {
                db.collection(type).find(filter, project, options).toArray((err, result) => {
                    db.close();
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            })
            .catch(err => {
                db.close();
                console.log('Error connecting to DB :', err);
            })
    });
}