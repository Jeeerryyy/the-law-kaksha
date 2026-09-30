<div align="center">

![The Law Kaksha Banner](./frontend/public/assets/hero%20section..svg)

# The Law Kaksha (The Law कक्षा)
### Premier Chartered Accountancy Law Education & Examination Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.21-lightgrey?style=flat&logo=express)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=flat)](#license)

**The Law Kaksha** is an institutional-grade educational web platform designed specifically for **CA Foundation**, **CA Intermediate (Paper 2: Corporate & Other Laws)**, and **CA Final** aspirants in India.

</div>

---

## 🏛️ Platform Architecture & Features

### 1. 🌟 Homepage & Editorial Showcase
- **Curated ICAI Master Series**: Chapter-wise coverage of Companies Act 2013 (Sections 1 to 148), General Clauses Act 1897, Interpretation of Statutes, and FEMA 1999.
- **Interactive 6-Page Sample Reader**: DRM-watermarked modal reader with instant chapter previews and Bare Act citations.
- **National All-India Leaderboard**: Live Hall of Fame highlighting top performers across mock tests and case study drills.
- **ICAI 5-Pillar Answer Evaluator**: Side-by-side comparative rubric demonstrating keywords, statutory citations, and examiner scoring.

### 2. 🎓 100% Functional Student Dashboard (`/student`)
- **Matte Design System**: Clean, distraction-free matte color palette (Deep Navy `#0A192F`, Slate `#1E293B`, Royal Blue `#005A9C`, and Emerald `#059669`).
- **10 Core Student Desks**:
  1. **Overview**: Real-time study streak counter, active course progress bar, and all-India ranking summary.
  2. **My Library & Vault**: Digital DRM PDF reader, offline revision notes, and physical book live tracking with courier milestones.
  3. **Quizzes & Tests**: Timed ICAI mock drills with positive/negative marking rules (+2 / -0.5), live timer, question palette, and Bare Act explanations.
  4. **All-India Leaderboard**: National rankers podium with accuracy %, score, and completion speed.
  5. **Curricula & Modules**: Section-by-section completion tracker across Companies Act and Other Laws.
  6. **Live Masterclasses**: Interactive classroom player simulator, timetable, and recorded lecture archive.
  7. **Study Timetable**: 60-day ICAI exam countdown and daily revision checklist.
  8. **Orders & Invoices**: GST-compliant tax invoices with printable official receipts.
  9. **Doubt Desk**: Submit legal interpretation queries and receive official statutory opinions from the Academic Board.
  10. **Device & Security**: Single-device DRM hardware ID binding monitor.

### 3. 🛡️ Institutional Admin Control Panel (`/admin`)
- **Unified Layout**: Identical design architecture and matte styling matching the student portal.
- **Administrative Desks**:
  1. **Executive Command Center**: Platform metrics, rapid dispatch queue, active doubt count, live quiz attempts feed.
  2. **Quizzes & Test Engine**: Full CRUD quiz engine — create new quizzes with question builder (Options A/B/C/D, Correct Option, Bare Act Citation, Explanation), edit, delete, publish/unpublish, and live submission logs.
  3. **Orders & Dispatches**: Filter orders by status (Processing, Dispatched, Delivered), update AWB tracking codes, and print official Delhivery/BlueDart shipping waybills with barcode.
  4. **Students & DRM Registry**: Searchable candidate roster, one-click **Unbind Hardware ID / Reset Device**, add candidate modal, and license management.
  5. **Catalog & Courses**: Add, edit, and toggle books and courses with price, MRP, stock count, and active status.
  6. **Batches & Live Classes**: Manage academic batches (Foundation, Inter, Final) and schedule live masterclasses with meeting links.
  7. **Mains Copy Checking Desk**: Descriptive answer papers grading queue with 100-mark ICAI rubric feedback.
  8. **Doubt Clearance Desk**: Review pending candidate doubts and publish official statutory opinions.
  9. **Coupons & Discounts**: Manage promo codes (`ICAI2026`, `EARLYBIRD`, `RANKER10`) with usage limits.
  10. **System Status & Logs**: Database health checks, DRM encryption token monitor, and backup snapshots.

---

## 💻 Technology Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [Next.js 16 (App Router)](https://nextjs.org/) + React 19 |
| **Styling & Design** | [TailwindCSS v4](https://tailwindcss.com/) + Lucide Icons |
| **Backend API** | [Node.js](https://nodejs.org/) + [Express 4.21](https://expressjs.com/) |
| **Database** | Persistent JSON Database Engine (`data/lawkaksha_db.json`) |
| **Security & DRM** | JWT Authentication, Hardware ID Token Binding, Dynamic Canvas Watermarking |
| **Deployment** | Frontend on Vercel, Backend on Render |

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- Node.js 18.0 or higher
- npm 9.0 or higher

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/the-law-kaksha.git
cd the-law-kaksha
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

### 3. Start Development Servers
You can run both frontend and backend concurrently:
```bash
# Terminal 1 - Backend API (Port 5000)
npm run dev:backend

# Terminal 2 - Frontend (Port 3000)
npm run dev:frontend
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Integration Testing & Validation

Run the complete backend integration test suite:
```bash
cd backend
node test_e2e.js
```

Verify frontend production build:
```bash
cd frontend
npm run build
```

---

## 📂 Project Structure

```
The-Law-Kaksha-main/
├── backend/                        # Express API Server
│   ├── data/                       # Persistent JSON Database
│   ├── src/
│   │   ├── db/                     # DB Client & Initial Seeder
│   │   ├── middleware/             # JWT Auth & DRM Gating
│   │   ├── routes/                 # Quizzes, Leaderboard, Orders, Catalog, etc.
│   │   └── server.js               # API Server Entrypoint
│   └── test_e2e.js                 # Integration Test Suite
│
├── frontend/                       # Next.js App Router Monorepo
│   ├── public/assets/              # Vector SVGs, Logos & Cover Codices
│   └── src/
│       ├── app/
│       │   ├── page.tsx            # Homepage with Pixel-Perfect Hero Section
│       │   ├── student/page.tsx    # 100% Functional Student Dashboard
│       │   ├── admin/page.tsx      # Unified Admin Command Center
│       │   ├── courses/            # Catalog Page
│       │   ├── cart/ & checkout/   # E-Commerce Purchasing Flow
│       │   └── ...                 # Auth, Reviews, About, Contact
│       ├── components/             # Reusable UI & Modal Components
│       ├── context/                # Cart & Session State
│       └── lib/                    # API Client
│
└── package.json                    # Workspace Coordinator
```

---

## 📄 License
All content, book codices, statutory case analyses, and UI designs are proprietary to **The Law Kaksha**.
