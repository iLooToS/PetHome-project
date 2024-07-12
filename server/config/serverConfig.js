const express = require('express');
const removeHeaders = require('../middleware/removeHeaders');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const serverConfig = (app) => {
  app.use(cors({ credentials: true, origin: ['http://localhost:5173'] }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(removeHeaders);
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use(cookieParser());
};

module.exports = serverConfig;
