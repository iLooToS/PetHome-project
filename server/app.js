require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT;

const indexRouter = require('./routes/index.routes');
const serverConfig = require('./config/serverConfig');

serverConfig(app);

app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`PetHome server on port: ${PORT}`);
});
