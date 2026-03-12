const axios = require('axios');

const getWeather = async (req, res) => {
  const { city } = req.params;

  if (!city || city.trim() === '') {
    return res.status(400).json({ success: false, message: 'City name is required.' });
  }

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

    const { data } = await axios.get(url);

    const weatherData = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      condition: data.weather[0].main,
    };

    res.status(200).json({ success: true, data: weatherData });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return res.status(404).json({ success: false, message: `City "${city}" not found. Please check the city name.` });
    }
    if (error.response && error.response.status === 401) {
      return res.status(401).json({ success: false, message: 'Invalid API key. Please check your OpenWeatherMap API key.' });
    }
    res.status(500).json({ success: false, message: 'Failed to fetch weather data.' });
  }
};

module.exports = { getWeather };
