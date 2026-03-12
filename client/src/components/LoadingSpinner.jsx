import React from 'react';

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center gap-3 text-blue-300">
    <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
    <p className="text-sm">Fetching weather data...</p>
  </div>
);

export default LoadingSpinner;
