const express = require('express');
const dotenv = require('dotenv');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const ruleRoutes = require('./routes/ruleRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', ruleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
