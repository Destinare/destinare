const request = require('superagent');
const {
  formatEvents,
  formatWeather,
  formatParks,
  formatRestaurants,
} = require('./mungeUtils');

async function getEvents(city, state) {
  const data = await request.get(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.EVENTS_KEY}&city=${city}&locale=*&stateCode=${state}`
  );

  return formatEvents(data.body);
}

async function getWeather(city, state) {
  const data = await request.get(
    `https://api.weatherbit.io/v2.0/forecast/daily?units=I&key=${process.env.WEATHER_KEY}&city=${city},${state}`
  );

  return formatWeather(data.body);
}
async function getParks(state) {
  const data = await request.get(
    `https://developer.nps.gov/api/v1/parks?stateCode=${state}&limit=20&sort=&api_key=${process.env.PARKS_KEY}`
  );

  return formatParks(data.body);
}
async function getRestaurants(city) {
  const data = await request
    .get(`https://api.yelp.com/v3/businesses/search?location=${city}`)
    .set('Authorization', `Bearer ${process.env.YELP_KEY}`);

  return formatRestaurants(data.body);
}

async function getAllData(city, state) {
  const allData = await Promise.all([
    getWeather(city, state),
    getParks(state),
    getEvents(city, state),
    getRestaurants(city),
  ]);

  return allData;
}

module.exports = {
  getAllData,
};
