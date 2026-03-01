import sequelize from "../config/database.js";
import UserModel from './user.js';
import TaskModel from './task.js';
import ReminderModel from './reminder.js';

const User =  UserModel(sequelize);
const Task = TaskModel(sequelize);
const Reminder = ReminderModel(sequelize);

const db = {
    sequelize,
    User,
    Task,
    Reminder
};

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

export default db;