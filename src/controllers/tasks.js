import db from '../models/index.js'

const Task = db.Task;

export const createTask = async (req, res) =>{
    try {
        const {title, description, dueDate, priority} = req.body;

        const userId = req.user.id;

        const newTask = await Task.create({
            title,
            description,
            dueDate,
            priority,
            userId
        });

        return res.status(201).json({
            message: "Created a newTask successfully"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Unable to create a newTask"
        })

    }
}

export const getTasks = async (req, res) => {
    try {
        const userId = req.user.id;

        const tasks = await Task.findAll({
            where : { userId },
            order : [['createdAt', 'DESC']]
        });

        return res.status(200).json({
            message: "Successfully read the getTasks",
            tasks
        });

    } catch (err) {
        return res.status(500).json({
            message: "Unable to read getTasks"
        });
    }
}