export const config = {
    mongoDB: {
        dbName: 'cartoondb',
        url: process.env.MONGODB_URL || `mongodb://localhost:27017/`
    }
}