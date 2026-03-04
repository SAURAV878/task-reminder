import express from "express";

import { getProfile, login, register } from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// router.get('/register', (req, res) => {

//     res.send('register is working');
// })

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */

router.post('/register', register);
router.post('/login', login);
router.get('/profile', verifyToken, getProfile);


export default router;