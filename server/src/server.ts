import express from 'express';
import sequelize from './config/connections.js';
import routes from './routes/index.js';
import axios from 'axios';
import dotenv from 'dotenv';
const forceDatabaseRefresh = false;

dotenv.config();

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);

const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.static('../client/dist'));
app.use(express.json());
app.use(routes);

app.get('/anime/:title', async (req, res) => {
    const { title } = req.params;

    try {
        //Calling Jikan API
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${title}`);
        res.status(200).json(response.data); // Send back data to client
    } catch (error: any) {
        console.error('Error fetching data from Jikan API:', error.message);
        res.status(500).json({ error: 'Failed to fetch data from Jikan API' });
    }
});

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
});