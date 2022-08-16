'use strict';

const express = require('express');
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static(path.join( __dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');    
});

app.listen(PORT, HOST, () => {
    console.log(`This app running on http://${HOST}:${PORT}`);
});