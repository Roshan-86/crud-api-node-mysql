const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
dotenv.config();

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
