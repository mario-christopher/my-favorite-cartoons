import express from 'express';

import { router as apiCartoon } from './cartoon';
import { router as apiComment } from './comment';
import { router as apiVisitor } from './visitor';
import { notFound } from '../middleware/not-found';

export const router = express.Router();

router.use('/cartoons', apiCartoon);
router.use('/comments', apiComment);
router.use('/visitors', apiVisitor);

router.use(notFound);