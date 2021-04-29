//Weather Munger
function formatWeather(weatherData) {
  const formattedWeather = weatherData.data.map((item) => {
    return {
      temperature: item.max_temp,
      date: item.datetime,
      forecast: item.weather.description,
    };
  });
  return formattedWeather;
}

//Events Munger
function formatEvents(eventsData) {
  if (eventsData.page.totalElements === 0) {
    return [];
  } else {
    const formattedEvent = eventsData._embedded.events.map((item) => {
      return {
        venueName: item.name,
        website: item.url,
        date: item.dates.start.localDate,
        time: item.dates.start.localTime,
      };
    });
    return formattedEvent;
  }
}

//Restaurants Munger
function formatRestaurants(restaurantsData) {
  const formattedRestaurant = restaurantsData.businesses.map((item) => {
    return {
      restaurantName: item.name,
      website: item.url,
      image: item.image_url,
    };
  });

  return formattedRestaurant;
}

//Parks Munger

function formatParks(parksData) {
  const formattedPark = parksData.data.map((item) => {
    if (item.images.length === 0) {
      return {
        parkName: item.fullName,
        website: item.url,
        image: 'No park image',
      };
    } else {
      return {
        parkName: item.fullName,
        website: item.url,
        image: item.images[0].url,
      };
    }
  });

  return formattedPark;
}

module.exports = {
  formatEvents,
  formatParks,
  formatRestaurants,
  formatWeather,
};
