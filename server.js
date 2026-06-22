const express = require('express');
const app = express();
const PORT = 3000;

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// Apply logger middleware to all routes
app.use(logger);

// Normal route
app.get('/data', (req, res) => {
    res.json({ info: 'Here is your data' });
});

// Route that triggers an error
app.get('/error', (req, res, next) => {
    const err = new Error('Something went wrong!');
    err.status = 400;
    next(err);
});

// Error handling middleware (must be last)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});