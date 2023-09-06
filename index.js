const express = require('express');
const path = require('path');

const router = require('./src/routes');

const app = express();
const port = 3000;

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(router);

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});

