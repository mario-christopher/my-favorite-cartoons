export const config = {
    mongoDB: {
        dbName: 'cartoondb',
        url: process.env.MONGODB_URL || `mongodb://localhost:27017/`
    },
    tmdb: {
        api_key: process.env.TMDB_KEY || 'e139b3634177d85027b1581996df59f0',
        api_base_url: 'https://api.themoviedb.org/3/tv/',
        image_base_url: 'http://image.tmdb.org/t/p/'
    }
}