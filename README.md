# 🌤️ Weather Dashboard

A full-stack Weather Dashboard app built with React, Tailwind CSS, Node.js, and Express.

## Tech Stack
- **Frontend:** React + Tailwind CSS + Vite
- **Backend:** Node.js + Express
- **API:** OpenWeatherMap

## Getting Started

### Backend
```bash
cd server
npm install
npm run dev
```

### Frontend
```bash
cd client
npm install
npm run dev
```

## Environment Variables

### server/.env
```
PORT=5000
OPENWEATHER_API_KEY=your_api_key_here
```

### client/.env
```
VITE_API_BASE_URL=http://localhost:5000
```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/weather/:city | Get weather by city name |
