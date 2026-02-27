import express from "express";

import { register } from "../controllers/user.js";

const router = express.Router();

router.get('/register', (req, res) => {

    res.send('register is working');
})

router.post('/register', register);


export default router;