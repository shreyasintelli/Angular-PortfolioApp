const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const portfolioRoutes = require('./routes/portfolio');
const cors = require('cors');

const app = express();

// Middleware

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb+srv://shreyas:Shre024689@cluster0.s771kxo.mongodb.net/myAngularPortfolio?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/portfolio', portfolioRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
