const express = require('express');
const config = require('./config');
require('dotenv').config();


const app = express();

const usersRoute = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', usersRoute);

const PORT = process.env.APP_SERVER_PORT || 4000;

app.listen(PORT, () => console.log(`App running on port:${PORT}`));