const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { testData } = require('../data/seedData');

describe.skip('destinare-be routes', () => {
  it.skip('gets all Data from 4 APIs', async () => {
    const res = await request(app).get('/api/v1?city=Portland&state=OR');

    expect(res.body).toEqual(testData);
  });
});
