const { Router } = require('express');
const app = require('../app');
const { getAllData } = require('../utils/apiUtils');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const city = req.query.city;
    const state = req.query.state;
    const response = await getAllData(city, state);
    res.send(response);
  } catch (err) {
    next(err);
  }
});
