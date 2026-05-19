# XYZ Production

Full MERN Stack photography studio website built with React + Vite, Express, and MongoDB.

## Project Structure

```text
xyz-production-mern/
  client/
    src/
      components/
      data/
      pages/
      App.jsx
      main.jsx
      styles.css
  server/
    middleware/
    models/
    routes/
    server.js
    .env.example
```

## Setup

1. Install dependencies:

```bash
npm install
npm run install:all
```

2. Configure MongoDB:

```bash
cp server/.env.example server/.env
```

Update `server/.env` with your MongoDB connection string.

3. Run the full app:

```bash
npm run dev
```

Frontend: `http://localhost:5173`

Backend: `http://localhost:5000`

## API Routes

- `POST /api/bookings`
- `GET /api/bookings`
- `POST /api/contact`
- `GET /api/contact`

## Notes

- The Vite dev server proxies `/api` requests to Express.
- Forms include basic client and server validation.
- Placeholder images use public Unsplash source URLs.
