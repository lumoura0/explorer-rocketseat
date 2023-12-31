require('express-async-errors');
const express = require('express');

const router = require('./routes');
const AppError = require('./utils/AppError');
const migrationsRun = require('./database/sqlite/migrations');

const app = express();
app.use(express.json());
app.use(router);
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internar server error',
  });
});

migrationsRun();

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
