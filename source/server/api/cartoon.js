import express from 'express';
import { getCartoon, getCartoons, getCharacters } from '../db/data-access';

export const router = express.Router();

router.get('/', (req, res, next) => {
    getCartoons()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send('Server error.')
        })
});

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    getCartoon(id)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send('Server error.')
        })
});

router.get('/:id/characters', (req, res, next) => {
    let id = req.params.id;
    getCharacters(id)
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.status(500).send('Server error.')
        })
})