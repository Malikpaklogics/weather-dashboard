import React from 'react';

const WeatherCard = ({ data }) => {
  const {
    city, country, temperature, feelsLike,
    humidity, windSpeed, description, icon, condition,
  } = data;

  const getBgColor = () => {
    switch (condition) {
      case 'Clear': return 'from-yellow-400/20 to-orange-400/20';
      case 'Clouds': return 'from-gray-400/20 to-slate-400/20';
      case 'Rain': case 'Drizzle': return 'from-blue-400/20 to-cyan-400/20';
      case 'Snow': return 'from-white/20 to-blue-200/20';
      case 'Thunderstorm': return 'from-purple-500/20 to-gray-600/20';
      default: return 'from-blue-400/20 to-indigo-400/20';
    }
  };

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${getBgColor()} border border-white/20 backdrop-blur-sm p-6 text-white shadow-2xl`}>
      {/* City & Icon */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-3xl font-bold">{city}</h2>
          <p className="text-blue-200 text-sm uppercase tracking-widest">{country}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-16 h-16"
        />
      </div>

      {/* Temperature */}
      <div className="mb-4">
        <p className="text-6xl font-extrabold">{Math.round(temperature)}°C</p>
        <p className="text-blue-200 capitalize mt-1">{description}</p>
        <p className="text-sm text-blue-300">Feels like {Math.round(feelsLike)}°C</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-blue-200 text-xs uppercase tracking-wide">💧 Humidity</p>
          <p className="text-xl font-semibold mt-1">{humidity}%</p>
        </div>
        <div className="bg-white/10 rounded-xl p-3 text-center">
          <p className="text-blue-200 text-xs uppercase tracking-wide">💨 Wind Speed</p>
          <p className="text-xl font-semibold mt-1">{windSpeed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
