import express from "express";

import { getProfile, login, register } from "../controllers/user.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// router.get('/register', (req, res) => {

//     res.send('register is working');
// })

router.post('/register', register);
router.post('/login', login);
router.get('/profile', verifyToken, getProfile);


export default router;