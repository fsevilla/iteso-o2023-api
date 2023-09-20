const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { engine } = require('express-handlebars');

dotenv.config();

const router = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views'); // ubicacion de la carpeta views

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(router);

mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`App is running in port ${port}`);
    });
}).catch(err => {
    console.log('Failed to connect to MongoDB: ', err);
});



