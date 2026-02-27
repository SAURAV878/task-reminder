import express from 'express';
import sequelize from './src/config/database.js';
import userRoutes from './src/routes/user.js';


const app = express();
app.use(express.json());

app.use('/users', userRoutes);



const port = 8000;

app.listen(port, () => {
    console.log(`Server is ruuning on port ${port}`);
})