import express from 'express';
import { createTask } from '../controllers/tasks.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyToken, createTask);

export default router;