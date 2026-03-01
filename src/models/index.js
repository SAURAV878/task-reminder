import sequelize from "../config/database.js";
import UserModel from './user.js';
import TaskModel from './task.js';

const User =  UserModel(sequelize);
const Task = TaskModel(sequelize);

const db = {
    sequelize,
    User,
    Task
};

export default db;