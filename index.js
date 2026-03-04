import express from 'express';
import sequelize from './src/config/database.js';
import userRoutes from './src/routes/user.js';
import taskRoutes from './src/routes/tasks.js'
import { initCron } from './src/utils/cron-jobs.js';
import swaggerUi from 'swagger-ui-express';
import { specs } from './src/config/swagger.js';


const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


const port = 8000;

app.listen(port, () => {
    console.log(`Server is ruuning on port ${port}`);
})

initCron();