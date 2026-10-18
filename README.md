# TripWise

TripWise is a full-stack travel planning platform that integrates multi-provider flight search, accommodations discovery, interactive itinerary scheduling, and automated tax invoice generation.

The system combines a FastAPI Python service for live provider orchestration with a React TypeScript client for planning, map route visualization, and client-side PDF document generation.

---

## Architecture Overview

- **Frontend Client**: React 18, TypeScript, Vite, Tailwind CSS, Lucide React, TanStack Query v5, Zustand.
- **Backend Service**: Python 3.11+, FastAPI, SQLAlchemy ORM with async engine (SQLite locally, PostgreSQL for production), SlowAPI rate limiting.
- **Provider Integrations**:
  - Aviation: Duffel Flights API, Amadeus Air API.
  - Places and Geocoding: Geoapify, OpenTripMap.
  - Meteorology: Open-Meteo.
  - Events and Calendar: Calendarific, Ticketmaster.
  - Payments: Razorpay (Sandbox / Webhook verification).
  - Auth: Supabase Auth (OAuth 2.0 / JWT) with fallback guest sessions.
- **Document Engine**: Client-side vector PDF generation (`html2canvas`, `jsPDF`) adhering to Rule 46 of the Indian CGST Rules, 2017.
- **Offline / Cold-Start Resilience**: A client-side fallback layer intercepts network drops, offline states, and server cold-starts, serving cached mock records so users can continue planning without blocking errors.

---

## Repository Structure

```
.
|-- backend/
|   |-- app/
|   |   |-- api/
|   |   |   `-- v1/
|   |   |       |-- endpoints/        # Flights, hotels, destinations, trips, auth, stats
|   |   |       `-- router.py
|   |   |-- core/                 # App settings, logging, rate limiting, error handlers
|   |   |-- db/                   # Database session, models, initial seed migrations
|   |   |-- models/               # SQLAlchemy schema definitions
|   |   |-- schemas/              # Pydantic request and response schemas
|   |   `-- services/             # Duffel, Amadeus, Geoapify, Weather API connectors
|   |-- render.yaml               # Cloud deployment specification for Render
|   |-- requirements.txt          # Python dependencies
|   `-- .env.example              # Backend environment template
|-- frontend/
|   |-- public/
|   |   `-- _redirects            # Netlify single-page application redirect rule
|   |-- src/
|   |   |-- components/           # UI components (flights, itinerary board, map, invoice)
|   |   |-- lib/
|   |   |   |-- api.ts            # Centralized API client with interceptors
|   |   |   |-- firebase.ts       # Firebase client config
|   |   |   |-- mockFallback.ts   # Client-side resilient fallback datasets
|   |   |   `-- supabase.ts       # Supabase authentication client
|   |   |-- pages/                # Home, Search, Destination, Planner, Invoice, History
|   |   |-- store/                # Zustand trip and authentication stores
|   |   |-- types/                # TypeScript interface definitions
|   |   |-- App.tsx
|   |   `-- main.tsx
|   |-- netlify.toml              # Netlify build configuration and headers
|   |-- package.json
|   |-- vite.config.ts
|   `-- .env.example              # Frontend public environment template
`-- netlify.toml                  # Root Netlify configuration
```

---

## Core Capabilities

### 1. Multi-Provider Aviation Engine
- Queries Duffel and Amadeus services in parallel to collect flight offers across domestic and international carriers.
- Calculates savings percentages between lowest and highest fares.
- Provides a 14-day price matrix to identify cheaper departure dates.
- Filter offers by maximum budget, carrier, number of stops, departure time window, and cabin class.

### 2. Verified Accommodations Catalog
- Calculates a weighted quality score (TripWise Index) combining location, cleanliness, amenities, and price.
- Categorizes stays into resorts, boutique hotels, business suites, and eco-retreats.
- Allows immediate reservation attachment into the trip basket.

### 3. Destination Discovery
- Senses coordinates, IATA codes, and region data for destinations across India and global cities.
- Provides categorized points of interest (heritage, architecture, nature, coastal viewpoints).
- Serves local culinary recommendations with dietary tags and origin descriptions.
- Pulls multi-day weather forecasts with packing suggestions.

### 4. Itinerary Day Board & Planner
- Kanban-style day scheduling interface for reordering stops.
- Automatic calculation of estimated transit times and transfer modes (cab, transit, walk) between sequential waypoints.
- Day route optimization endpoint to reorder stops based on geographic proximity.
- Offline persistence via browser storage when the remote server is unreachable.

### 5. Corporate Tax Invoice Engine
- Generates compliant GST tax invoices under Rule 46 of the Indian CGST Rules, 2017.
- Renders corporate credentials for TripWise Technologies Private Limited (CIN, GSTIN, SAC 998555).
- Automatically converts numeric amounts to formal Indian Rupee legal words.
- Outputs clean vector A4 PDF downloads directly inside the browser.

---

## Environment Variables

### Backend Configuration (`backend/.env`)

Copy `backend/.env.example` to `backend/.env` and update the values:

```bash
# Application Environment
ENVIRONMENT=development
PORT=8000
ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000

# Database
DATABASE_URL=sqlite+aiosqlite:///./tripwise.db

# Authentication
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_JWT_SECRET=your-supabase-jwt-secret
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# Aviation APIs
AMADEUS_CLIENT_ID=your-amadeus-client-id
AMADEUS_CLIENT_SECRET=your-amadeus-client-secret
DUFFEL_TOKEN=your-duffel-token

# Geospatial & Places
OPENTRIPMAP_KEY=your-opentripmap-api-key
GEOAPIFY_KEY=your-geoapify-api-key

# Payments (Sandbox)
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your-razorpay-secret
```

### Frontend Configuration (`frontend/.env`)

Copy `frontend/.env.example` to `frontend/.env`:

```bash
# Backend URL (Empty or omitted activates the client-side fallback engine)
VITE_API_BASE_URL=http://localhost:8000/api/v1

# Supabase Auth (Public browser keys)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Razorpay Checkout (Public key only)
VITE_RAZORPAY_KEY_ID=rzp_test_your_key_id

# Firebase (Web SDK configuration)
VITE_FIREBASE_API_KEY=your-firebase-key
VITE_FIREBASE_AUTH_DOMAIN=your-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-app.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

---

## Local Development Setup

### 1. Prerequisites
- Node.js 18 or higher with npm
- Python 3.11 or higher
- Git

### 2. Backend Service Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# macOS / Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start backend server
uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

The interactive OpenAPI documentation will be accessible at:
- Swagger UI: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`

### 3. Frontend Client Setup

Open a separate terminal:

```bash
cd frontend

# Install dependencies
npm install

# Start Vite dev server on port 3000
npm run dev
```

The application client runs at `http://localhost:3000`.

---

## Production Deployment

### Frontend on Netlify

1. Link the repository to Netlify with the following configuration:
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/dist`
2. In Netlify Site Settings > **Environment variables**, set:
   - `VITE_API_BASE_URL` (Points to your live backend endpoint, e.g. `https://your-backend.onrender.com/api/v1`)
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_RAZORPAY_KEY_ID`
   - `VITE_FIREBASE_*`
3. Single-page navigation rewrites (`/* /index.html 200`) are handled automatically by `frontend/public/_redirects` and `netlify.toml`.

### Backend on Render / Container Platform

1. Create a new **Web Service** on Render connected to this repository.
2. Configure settings:
   - **Root Directory:** `backend`
   - **Environment:** `Python 3`
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
3. Supply the environment variables from `backend/.env.example`.
4. Copy the public Render URL and assign it to `VITE_API_BASE_URL` on Netlify.

---

## Testing & Quality Assurance

- **Frontend Typecheck & Build:**
  ```bash
  cd frontend
  npm run build
  ```
- **Backend Validation:**
  ```bash
  cd backend
  python -m pytest
  ```

---

## License

Proprietary. All rights reserved.
