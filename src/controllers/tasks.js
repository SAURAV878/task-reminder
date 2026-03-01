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