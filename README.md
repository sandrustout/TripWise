# TripWise - Autonomous Smart Travel Planning & Multi-Provider Aviation Engine

TripWise is an intelligent, full-stack travel planning platform engineered with real-time multi-provider aviation comparison (Duffel API & Amadeus), dynamic Day Board kanban scheduling, interactive route mapping, and corporate-grade GST tax invoice PDF generation.

---

## Key Features

### 1. Multi-Provider Aviation Engine (Duffel & Amadeus)
- **Concurrent Live Comparison:** Queries Duffel sandbox offers and Amadeus cheapest-date calendars in parallel.
- **Cheapest Date Matrix:** Interactive bar chart visualization for discovering optimal departure dates.
- **Resilient Airline Fallbacks:** Seamlessly falls back to certified domestic and international test flight data if sandbox APIs throttle.
- **Flight Filters:** Filter by max budget, airlines (IndiGo, Air India, Emirates, Singapore Airlines, British Airways, etc.), stops, and sorting criteria.

### 2. Interactive Kanban Day Board & Planner
- **Multi-Day Itinerary Management:** Drag, organize, and plan stops across travel days.
- **Live Cost Accumulator:** Real-time updates for flights, hotel stays, activity passes, and local dining.
- **Dynamic Suggestions Panel:** Curated cultural landmarks, heritage trails, regional culinary specialties, and seasonal festivals.
- **Add-to-Trip Basket:** Modular drawer enabling one-click basket addition and immediate day assignment.

### 3. Interactive Route Mapping
- **Geographic Waypoints:** Visual markers for every planned destination, hotel, and activity.
- **Dynamic Polylines:** Real-time route rendering between consecutive stops.
- **Leaflet & OpenStreetMap Integration:** No mandatory proprietary API keys required; automatic fallback coordinates provided.

### 4. Official Corporate Tax Invoice & PDF Generation
- **GST Compliance:** Fully compliant with Rule 46 of the CGST Rules, 2017.
- **Corporate Credentials:** Formatted for *TripWise Technologies Private Limited* with CIN, GSTIN, SAC 998555, and registered Bengaluru address.
- **High-Resolution Vector PDF:** Generates crisp, printable A4 `.pdf` documents via `html2canvas` and `jsPDF`.
- **Interactive Preview Modal:** In-browser document viewer with instant download and print options.
- **Legal Indian Rupee Words Conversion:** Converts numeric totals into formal legal currency text.

---

## System Architecture

- **Backend:**
  - Python 3.12+ / FastAPI
  - SQLAlchemy ORM with SQLite database
  - Distributed request tracing & SlowAPI rate limiting
  - Providers: Duffel, Amadeus, OpenTripMap, Geoapify, Open-Meteo, Unsplash
- **Frontend:**
  - React 18 / TypeScript / Vite
  - Tailwind CSS with strict corporate warm color palette
  - TanStack React Query (v5)
  - Lucide Icons (Zero emoji commitment)
  - `html2canvas` & `jsPDF` for client-side invoice generation

---

## Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+ & npm

### Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend application will be live at `http://localhost:5173`, connecting to the FastAPI backend at `http://127.0.0.1:8000`.

---

## License

Proprietary © 2026 TripWise Technologies Private Limited. All rights reserved.
