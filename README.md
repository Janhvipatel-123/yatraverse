# YatraVerse - Luxury Travel Platform

YatraVerse is a Next.js 16 + TypeScript + Tailwind CSS luxury travel platform that bridges the gap between unparalleled luxury and deep-rooted Indian heritage, culture, and spirituality.

## Features Completed

- **Cinematic Frontend Design**: Premium dark-gold UI using Tailwind CSS, Framer Motion, and React Three Fiber.
- **Dynamic Routing**: Elaborate destination pages (`/destinations/[slug]`), rich experiences, and premium package details.
- **Database Foundation (PostgreSQL + Prisma)**: Robust schema supporting Inquiries, Bookings, and AI-generated Itineraries.
- **Contact & Inquiry System**: Dynamic contact forms with automated saving to the database and email notifications via Resend.
- **Admin Dashboard**: 
  - Manage and view customer inquiries (`/admin`).
  - Manage and view journey bookings (`/admin/bookings`).
  - Update status flows (PENDING, CONFIRMED, CANCELLED, COMPLETED).
- **AI Travel Planner**: Integration with Google Gemini API to dynamically generate personalized, day-by-day itineraries based on travel style, budget, and duration.
- **Saved Trips**: Store AI-generated itineraries in the database and retrieve them later (`/saved-trips`).
- **Booking Flow**: Complete flow allowing users to inquire about and book specific luxury packages.
- **Production Polish**: 100% lint-free TypeScript, optimized builds, full error-handling boundaries, and responsive loading states.

## Setup & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env` file at the root of the project with:
   ```env
   DATABASE_URL="your-postgresql-url"
   RESEND_API_KEY="your-resend-api-key"
   ADMIN_EMAIL="admin@yatraverse.com"
   FROM_EMAIL="noreply@yatraverse.com"
   GEMINI_API_KEY="your-gemini-api-key"
   ```

3. **Database Initialization:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for Production:**
   ```bash
   npm run build
   npm run start
   ```

## Production Improvements Still Pending

As of the current Phase 8 milestone, the following items are logged as TODOs for the next iterations:

- **Authentication & RBAC**: Add secure authentication (e.g., NextAuth/Auth.js) to protect all `/admin` routes. Implement Role-Based Access Control.
- **Payment Gateway Integration**: Integrate Stripe or Razorpay for direct online booking and deposits.
- **Live Flight/Hotel APIs**: Connect real-time APIs (Amadeus, Booking.com, etc.) to fetch dynamic pricing instead of static estimates.
- **Analytics & Tracking**: Integrate Vercel Analytics, Google Analytics, or PostHog to track user conversion flows and drop-offs.
- **User Accounts**: Allow users to create accounts, login, and view their past/upcoming trips securely without relying on open public pages.

## Technologies Used

- Next.js (App Router)
- React 18 / 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Framer Motion
- React Three Fiber
- Resend (Email API)
- Google Gemini API (Generative AI)

---

*YatraVerse — Reimagining Travel Through Meaningful Journeys.*
