
/** @type {import('sequelize-cli').Migration} */

import { Model } from 'sequelize';

  export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reminders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      taskId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Tasks', key: 'id'
        },
        onDelete: 'CASCADE'
      },
      remindAt: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  }
  
  export async function down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reminders');
  }
