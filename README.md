# TicketBari — Client

TicketBari is an online ticket booking platform for buses, trains, launches (river cruises), and flights across Bangladesh. This repository contains the **client/frontend** application.

🔗 Live site: https://ticket-bari-client-three.vercel.app

## Features

- Search and browse tickets by vehicle type (Bus, Rail, Launch, Flight), route, and travel date
- Popular and featured routes (e.g. Dhaka → Cox's Bazar, Sylhet, Chittagong)
- Live platform stats (departures, bookings processed, operators, etc.)
- Secure checkout powered by Stripe
- Instant digital ticket / barcode generation after checkout
- User authentication
- Booking history and self-service cancellation/refunds
- Responsive, animated UI (smooth scrolling, carousels)

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19, Tailwind CSS 4
- **Auth:** better-auth
- **Database:** MongoDB
- **Payments:** Stripe (`stripe`, `@stripe/stripe-js`)
- **Icons:** lucide-react
- **Charts:** Recharts
- **Carousel/Slider:** Swiper
- **Smooth scrolling:** Lenis
- **Notifications:** Sonner
- **Linting:** ESLint

## Prerequisites

- Node.js 18.18+ (Next.js 16 requirement)
- A MongoDB database (Atlas or self-hosted)
- A Stripe account (publishable + secret keys)
- The [TicketBari server](https://github.com/jakerul-islam/ticket-bari-server-side) running and reachable

## Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/jakerul-islam/ticket-bari-client-side.git
   cd ticket-bari-client-side
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root and add the required environment variables (see below).

4. Run the development server

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file with the following (adjust names to match what's used in the codebase):

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Auth (better-auth)
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:5000
```

> Double-check the exact variable names used in the source — update this list to match your `.env` usage.

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the development server          |
| `npm run build` | Build the app for production          |
| `npm run start` | Start the production server           |
| `npm run lint`  | Run ESLint                            |

## Project Structure

```
ticket-bari-client-side/
├── public/        # Static assets (images, icons)
├── src/           # Application source code (pages, components, etc.)
├── next.config.mjs
├── eslint.config.mjs
└── package.json
```

## Related Repositories

- Server / API: https://github.com/jakerul-islam/ticket-bari-server-side

## Deployment

The client is deployed on [Vercel](https://vercel.com). Pushing to `main` will trigger a new deployment if connected to a Vercel project.

## License

This project currently has no license specified. Add a `LICENSE` file if you intend to open-source it.