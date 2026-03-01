import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {
        foreignKey: 'userId',
        as:'user'
      });

      Task.hasMany(models.Reminder, {
        foreignKey: 'taskId',
        as: 'reminder'
      });
      // define association here
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    dueDate: DataTypes.DATE,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};