// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const musicRecommendationEngine = require('./musicRecommendationEngine');

// Initialize the Express app
const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define routes
app.get('/recommendations', async (req, res) => {
    try {
        const { userId } = req.query;
        // Call the recommendation engine function to get personalized music recommendations
        const recommendations = await musicRecommendationEngine.getRecommendations(userId);
        res.json({ recommendations });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
