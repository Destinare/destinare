const { Router } = require('express');
const app = require('../app');
const { getAllData } = require('../utils/apiUtils');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const response = await getAllData(req.query.city, req.query.state);
    res.send(response);
  } catch (err) {
    next(err);
  }
});
