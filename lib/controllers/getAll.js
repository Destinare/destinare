const { Router } = require('express');
const app = require('../app');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const response = await getAllData();
    res.send(response);
  } catch (err) {
    next(err);
  }
});
