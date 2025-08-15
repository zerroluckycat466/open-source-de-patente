const express = require('express');
const cors = require('cors');

// Initialize the Express application
const app = express();
const PORT = 3000;

// Enable CORS to allow cross-origin requests
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// Define the main route
app.get('/', (req, res) => {
    // Send welcome message
    res.send('Willkommen zu Open Source DE Patente!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});