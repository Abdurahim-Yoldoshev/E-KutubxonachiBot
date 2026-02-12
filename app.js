const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
// Terlegram bot connection
require('./bot/bot')

// Connect to MongoDB
async function dev() {
    try {
      await mongoose.connect(process.env.MONGO_URI).then(() => {console.log('MongoDB connected')}).catch((err) => {console.log(err)});
      app.listen(process.env.PORT, () => {console.log(`Server is running on port ${process.env.PORT}`)});
    } catch (error) {
        console.log(error);
    }
}

dev();