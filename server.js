// Importing required modules
const express = require('express'); // Express framework for handling server requests.
const path = require('path'); // Path module for handling file paths.
const fs = require('fs'); // File system module for reading and writing files.

// Initializing express app
const app = express();

// Middleware for parsing request bodies and serving static files
app.use(express.json()); // Parses incoming requests with JSON payloads.
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with URL-encoded payloads.
app.use(express.static('public')); // Serves static files from the 'public' directory.

// Port configuration
const PORT = process.env.PORT || 3000; // Sets the port from environment variable or defaults to 3000.

// HTML Route to serve notes.html on GET request to '/notes'
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// API Route to GET saved notes
app.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

// API Route to POST new note
app.post('/api/notes', (req, res) => {
    // Read notes from db.json
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const newNote = { ...req.body, id: notes.length};

        // Add the new note
        notes.push(newNote);

        // Write the new notes back to db.json
        fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(newNote);
        });
    });
});

// Catch-all route to direct any other requests to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});