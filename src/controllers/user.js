import bcrypt from 'bcrypt'
import db from '../models/index.js'
import user from '../models/user.js';
import jwt from 'jsonwebtoken';

const User = db.User;

export const register = async  (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try {
        
        const existingUser = await User.findOne ({where: {email}});
        if(existingUser) {
            return res.status (400).json({
                message: 'Email is already in use'
            });
        }

        

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create ({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });

        return res.status(201).json({
            message : 'User registerd successfully',
            user: {
                id: newUser.id,
                email: newUser.email
            }
        });

    } catch (err) {
        console.log('error: ' + err);
        return res.status(500).json({
            message : 'Internal server error '
        });

    }    
}


export const login = async (req, res) => {
    const {email, password} = req.body
    try {

        const existingUser = await User.findOne({where: {email}});
        if(!existingUser) {
            return res.status(401).json({
                message: "Invalid credentails"
            });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if(!isMatch) {
            return res.status(401).json({
                message : "Invalid credentails"
            });
        }

        const token = jwt.sign(
            {id: existingUser.id},
            process.env.JWT_SECRET,
            {expiresIn : '60s'}
        );

        res.status(200).json({ token });

    } catch (err) {
        res.status(500).json ({
            message: 'server error'
        });
    }
}
