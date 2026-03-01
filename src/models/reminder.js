import { Model, DataTypes } from "sequelize";

export  default (sequelize) => {
  class Reminder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reminder.belongsTo(models.Task, {
        foreignKey : 'taskId'
      });
      // define association here
    }
  }
  Reminder.init({
    taskId: DataTypes.INTEGER,
    remindAt: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reminder',
  });
  return Reminder;
};