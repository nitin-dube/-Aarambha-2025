const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for development
}));
app.use(compression());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory (only in production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Aarambha Mahotsava 2025 API is running' });
});

app.get('/api/event-info', (req, res) => {
  res.json({
    venue: 'Playground, Sarala Birla University',
    time: '9:30 AM onwards',
    date: '31st January 2025',
    passesLeft: 600
  });
});


// Catch all handler: send back React's index.html file for any non-API routes (only in production)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Export the app for serverless wrappers or local start
module.exports = app;

// If run directly, start the HTTP server (useful for local development)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Aarambha Mahotsava 2025 server running on port ${PORT}`);
    console.log(`📱 Visit: http://localhost:${PORT}`);
  });
}
