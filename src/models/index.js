import sequelize from "../config/database.js";
import UserModel from './user.js';

const User =  UserModel(sequelize);

const db = {
    sequelize,
    User
};

export default db;