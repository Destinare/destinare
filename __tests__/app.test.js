const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const testData = require('../data/seedData');

describe('destinare-be routes', () => {
  it('gets all Data from 4 APIs', async () => {
    const res = await request(app).get('/api/v1');

    expect(res.body).toEqual(testData);
  });
});
