import express from 'express';
import { createTask, getTasks } from '../controllers/tasks.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getTasks);
router.post('/', verifyToken, createTask);


export default router;