const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authRoute = require('./Routes/authRoutes');
const User = require('./Database/userSchema');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('hello world');
  } else {
    res.send('first authenticate');
  }
});

