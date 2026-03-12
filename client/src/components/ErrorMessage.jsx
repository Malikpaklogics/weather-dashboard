import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="bg-red-500/20 border border-red-400/40 rounded-xl p-4 text-center">
    <p className="text-2xl mb-1">⚠️</p>
    <p className="text-red-200 font-medium">{message}</p>
  </div>
);

export default ErrorMessage;
