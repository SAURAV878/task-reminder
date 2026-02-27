import bcrypt from 'bcrypt'
import db from '../models/index.js'

const User = db.User;

export const register = async  (req, res) => {

    try {
        const {firstName, lastName, email, password} = req.body;

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

