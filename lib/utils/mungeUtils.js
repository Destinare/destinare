//Weather Munge
function formatWeather(weatherData) {
  const formattedWeather = weatherData.data.map((item) => {
    return {
      temperature: item.max_temp,
      date: item.datetime,
      forecast: item.weather.description,
    };
  });
  return formattedWeather.slice(0, 7);
}

//Events Munge
function formatEvents(eventsData) {
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

//Restaurants Munge
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

//Parks Munge

function formatParks(parksData) {
  const formattedPark = parksData.data.map((item) => {
    return {
      parkName: item.fullName,
      website: item.url,
      image: item.images[0].url,
    };
  });
  return formattedPark;
}
