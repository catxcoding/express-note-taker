// Importing required modules
const express = require('express');
const path = require('path');

// Initializing express app
const app = express();

// Middleware for parsing request bodies and serving static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Port configuration
const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
