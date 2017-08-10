import express from 'express';
import bodyParser from 'body-parser';
import { getComments, addNewComment } from '../db/data-access';

export const router = express.Router();

router.get('/', (req, res, next) => {
    getComments()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send('Server error.')
        })
})

router.post('/', bodyParser.json(), (req, res, next) => {
    let newComment = req.body;
    addNewComment(newComment)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send('Server error.')
        })
})