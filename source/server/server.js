import "babel-polyfill";
import express from 'express';
import cors from 'cors';
import path from 'path';
import favicon from 'serve-favicon';

import { router as apiRouter } from './api/api';
import { logUrl } from './middleware/log-url';

const app = express();
const PORT = process.env.PORT || 3000;

let staticPath = path.resolve(__dirname, '../../');
app.use(express.static(staticPath));

let staticPathPublic = path.resolve(__dirname, '../../public');
app.use(favicon(path.resolve(staticPathPublic, 'favicon.ico')));

let staticPathBuild = path.resolve(__dirname, '../../public/build');
app.use(express.static(staticPathBuild));

app.use(cors());

app.use(logUrl);

app.use('/api', apiRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(staticPathBuild, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Running server at port ${PORT}`);
})