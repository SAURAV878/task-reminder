import cron from 'node-cron';
import {Op} from 'sequelize';
import db from '../models/index.js';


const {Reminder, Task} = db;

export const initCron = () => {
    cron.schedule('* * * * *', async () => {
        console.log("Checker: looking for reminders...");

        try {
            const now = new Date();

            const dueReminders = await Reminder.findAll({
                where : {
                    remindAt : {[Op.lte]: now},
                    status: 'pending'
                },
                include : [{
                    model: Task,
                    as: 'Task'
                }]
            });

            for (const rem of dueReminders) {
                console.log(`Reminder for Task [${rem.Task.title}]: ${rem.Task.description}`);

                rem.status = 'completed';
                await rem.save();
            }

        } catch (err) {
            console.error("Cron Error:", err);
        }
        
    });
};
