const express = require("express");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { countRequests, countTime } = require("./middlewares/logs");
const authRoutes = require("./routes/authRoutes");
const { connectDB } = require("./database/databaseOPS");
const { authenticateToken } = require("./Auth/authOps");
const app = express();
const port = 3000;
require('dotenv').config();

// Connecting the database
connectDB(process.env.MONGOOSE_CONNECTION_STRING);

app.use(cookieParser());
app.use(countTime);
app.use(countRequests);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Public routes
app.use('/user', authRoutes);


app.get('/', (req, res) => {
  res.json('Welcome to the homepage!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ msg: 'Something broke!' });
});

app.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
