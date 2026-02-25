import express from 'express';
import sequelize from './src/config/database.js';


const app = express();
const port = 3300;


app.use(express.json());

app.listen(port, () => {
    console.log(`Server is ruuning on port ${port}`);
})