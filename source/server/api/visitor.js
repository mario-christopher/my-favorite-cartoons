import express from 'express';
import bodyParser from 'body-parser';
import { getVisitors } from '../db/data-access';
export const router = express.Router();

router.get('/', (req, res, next) => {
    getVisitors()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send('Server error.')
        })
})

router.post('/login', bodyParser.json(), (req, resp, next) => {
    let cred = req.body;
})