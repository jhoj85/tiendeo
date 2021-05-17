const express = require('express');
const cors = require('cors');

const app = express();

//PORT
app.set('port', process.env.PORT || 5000)


app.use(cors());
app.use(express.json());

//routes
app.use('/api/cards', require('../routes/cards'));

module.exports = app;