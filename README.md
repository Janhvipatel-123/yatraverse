# ✨ YatraVerse — AI Powered Luxury Travel Platform

> **Reimagining travel through meaningful journeys, intelligent planning, and immersive digital experiences.**

YatraVerse is a production-ready AI-powered luxury travel platform built to bridge the gap between premium travel experiences and India's timeless heritage, spirituality, culture, and history.

Unlike traditional travel websites that focus purely on bookings, YatraVerse acts as an intelligent travel companion capable of generating personalized journeys, managing customer inquiries, handling premium package bookings, and delivering AI-curated experiences tailored to every traveler.

---

# 🌍 Problem Statement

Modern travel platforms suffer from three major limitations:

* Generic itineraries that ignore traveler preferences.
* Fragmented experiences requiring multiple platforms for planning and booking.
* Lack of emotional storytelling around destinations and cultural experiences.

YatraVerse solves these problems by combining:

* Artificial Intelligence
* Luxury travel experiences
* Cultural storytelling
* Personalized journey planning
* Full-stack booking management

The result is a platform that transforms travel from transactions into experiences.

---

# 🚀 Live Features

## 🎬 Cinematic Luxury Frontend

* Premium dark-gold luxury theme
* Cinematic video backgrounds
* Glassmorphism interfaces
* 3D tilt interactions
* Magnetic buttons
* Responsive animations using Framer Motion
* Immersive user experience inspired by premium hospitality brands

---

## 🏛 Dynamic Destination Engine

Dynamic route architecture:

```text
/destinations/[slug]
```

Destinations currently include:

* Mathura
* Vrindavan
* Agra
* Jaipur

Each destination contains:

* Cultural insights
* Historical information
* Premium experiences
* Curated journeys
* Luxury recommendations
* Rich media presentation

---

## 🤖 AI Travel Planner

Powered by Google Gemini API.

The AI planner generates:

* Personalized itineraries
* Day-by-day schedules
* Cost estimates
* Travel tips
* Hotel suggestions
* Experience recommendations

Input parameters include:

* Destination
* Budget
* Duration
* Travel style
* Interests

Example:

```text
Destination: Jaipur
Duration: 5 Days
Budget: ₹80,000
Travel Style:
Luxury, Heritage, Photography, Food
```

Generated output:

* Morning activities
* Afternoon activities
* Evening experiences
* Budget allocation
* Local recommendations

---

## 💾 Saved Trips Engine

Generated itineraries are persisted in PostgreSQL and can be revisited later.

Routes:

```text
/saved-trips
/saved-trips/[id]
```

Features:

* Persistent storage
* Retrieval
* Journey history
* Future extensibility for user accounts

---

## 📩 Inquiry Management System

Customer inquiries are:

* Validated
* Stored in PostgreSQL
* Forwarded via email notifications
* Accessible via admin dashboard

Fields:

* Name
* Email
* Phone
* Destination
* Message

---

## 📬 Automated Email Notifications

Using Resend API:

### Admin receives:

* New inquiry notifications
* Booking alerts

### Customers receive:

* Inquiry confirmations
* Booking confirmations

---

## 🧳 Premium Booking Engine

Travelers can book premium journeys directly from package pages.

Booking flow:

```text
Package Selection
        ↓
Booking Form
        ↓
Database Storage
        ↓
Admin Dashboard
        ↓
Status Management
```

Supported statuses:

* PENDING
* CONFIRMED
* CANCELLED
* COMPLETED

---

## 👨‍💼 Admin Dashboard

### Inquiry Management

Route:

```text
/admin
```

Capabilities:

* View inquiries
* Update inquiry status
* Manage customer pipeline

---

### Booking Management

Route:

```text
/admin/bookings
```

Capabilities:

* View bookings
* Update booking status
* Track conversions

---

## 🗄 Database Architecture

Built using PostgreSQL and Prisma ORM.

Core entities:

### Inquiry

Stores:

* Customer inquiries
* Lead management
* Contact requests

### Booking

Stores:

* Travel requests
* Package bookings
* Booking lifecycle status

### Itinerary

Stores:

* AI-generated journeys
* Travel preferences
* Personalized plans

---

# 🏗 System Architecture

```text
Frontend (Next.js 16)
        ↓
API Routes
        ↓
Business Logic Layer
        ↓
Prisma ORM
        ↓
PostgreSQL Database
        ↓
External Services
    ├── Gemini API
    ├── Resend API
    └── Future Integrations
```

---

# 🛠 Technology Stack

## Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* React Three Fiber

## Backend

* Next.js Route Handlers
* Prisma ORM
* PostgreSQL

## AI

* Google Gemini API

## Email

* Resend API

## Infrastructure

* Vercel
* Neon PostgreSQL
* GitHub

---

# 📂 Project Structure

```text
app/
├── admin/
├── api/
├── ai-guide/
├── contact/
├── destinations/
├── saved-trips/
├── experiences/
└── rides/

components/
├── BookingModal
├── MagneticButton
├── TiltCard
└── Navbar

lib/
├── ai/
├── prisma.ts
└── email.ts

prisma/
├── schema.prisma
└── migrations/
```

---

# ⚙ Environment Variables

Create a `.env` file:

```env
DATABASE_URL=""
RESEND_API_KEY=""
ADMIN_EMAIL=""
FROM_EMAIL=""
GEMINI_API_KEY=""
```

---

# 🚀 Local Development

Install dependencies:

```bash
npm install
```

Generate Prisma client:

```bash
npx prisma generate
```

Initialize database:

```bash
npx prisma migrate dev
```

Run development server:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

---

# 📈 Engineering Highlights

This project demonstrates:

* Full-stack architecture
* Database design
* API development
* AI integration
* Cloud infrastructure
* Responsive UI engineering
* Scalable application structure
* Production deployment practices

---

# 🎯 What This Project Demonstrates To Interviewers

### Frontend Engineering

* Component architecture
* State management
* Responsive design
* Animation systems

### Backend Engineering

* API design
* Database modeling
* Validation
* Error handling

### AI Engineering

* Prompt engineering
* LLM integration
* Structured output generation

### Software Engineering

* Clean architecture
* Separation of concerns
* Scalability planning
* Production readiness

---

# 🔮 Future Roadmap

## Authentication & RBAC

* NextAuth/Auth.js
* Protected admin routes
* Role-based access control

## Payments

* Razorpay
* Stripe

## Travel APIs

* Flights
* Hotels
* Dynamic pricing

## Analytics

* User funnels
* Conversion tracking
* Business intelligence

## User Accounts

* Profiles
* Booking history
* Saved journeys

---

# 📊 Project Maturity

| Layer           | Status             |
| --------------- | ------------------ |
| Frontend        | ✅ Production Ready |
| Backend         | ✅ Production Ready |
| Database        | ✅ Production Ready |
| AI Features     | ✅ Production Ready |
| Admin Dashboard | ✅ Production Ready |
| Booking Engine  | ✅ Production Ready |
| Authentication  | ⏳ Planned          |
| Payments        | ⏳ Planned          |
| Flight APIs     | ⏳ Planned          |

---

# 👨‍💻 Author

Developed by **Janhvi Patel**

Built with the vision of combining:

* Artificial Intelligence
* Luxury Travel
* Indian Heritage
* Modern Web Engineering

---

# 🌟 YatraVerse

### Not every trip is a vacation.

### Some journeys change the way we see the world.

