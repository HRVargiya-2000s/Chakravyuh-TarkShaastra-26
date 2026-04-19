# TarkShaastra - Predictive Maintenance & Infrastructure Management

TarkShaastra is an end-to-end, AI-powered predictive maintenance platform designed to track, predict, and resolve infrastructure issues across district schools. The ecosystem is split into two primary interfaces: **Chakravyuh** (Web Dashboards) and **ShaalaRakhshak** (Mobile APK).

## 🏗️ System Architecture

The workflow is driven by seamless role-based transitions:
1. **Watchman/Staff (Mobile):** Submits ground-level anomaly reports with AI image analysis and GPS proof.
2. **Principal (Web):** Reviews and approves anomalies.
3. **District Education Officer - DEO (Web):** Monitors district-wide dashboards ranked by AI risk scores and assigns contractors to critical issues.
4. **Contractor (Mobile):** Receives assignments, executes repairs, and logs completion with "after" photos.
5. **Review Phase (Web):** Completed work is verified by the DEO/Principal.

---

## 🌐 Chakravyuh (Web Dashboard)
**For: Principals & District Education Officers (DEOs)**

Chakravyuh is the command center built with **React, Vite, and Tailwind CSS**. It visualizes complex infrastructure data into actionable insights.

### Key Features:
* **AI-Priority Queues:** Automatically ranks incoming issues (Critical, High, Low) based on visual data and predictive time-to-failure calculations.
* **Principal Approvals:** Principals can view pending ground reports, verify the images/locations, and push them to the DEO queue.
* **Contractor Dispatch Modal:** DEOs can view comprehensive issue details (including Cloudinary imagery) and instantly dispatch specialized contractors.
* **Completed Work Verification:** Dedicated interfaces to review before/after images and closing remarks from contractors.

### Tech Stack:
* React 18, Vite
* Tailwind CSS
* Zustand (State Management)
* Lucide Icons

---

## 📱 ShaalaRakhshak (Mobile APK)
**For: Ground Staff (Watchmen & Peons) & Contractors**

ShaalaRakhshak is the robust cross-platform mobile application built precisely for field operations.

### Key Features:
* **Offline-Ready Ground Reporting:** Staff can submit condition reports instantly using a custom dropdown flow specifying location (e.g., Floor-1, Class B), category, and severity.
* **AI Vision Integration:** Camera inputs are instantly analyzed by `Groq Vision models` to assess risk scores (e.g., crack width measurement, leak severity).
* **Geo-fenced Submissions:** Validates staff proximity to the school using device GPS location before allowing submission.
* **Contractor Work Orders:** Contractors access a tailored dashboard showing only their assigned tasks with interactive "Mark as Complete" flows requiring concluding photographic proof.

### Tech Stack:
* React Native / Expo
* Expo Camera & Location Services
* React Navigation & Context API
* Tailwind-based UI components

---

## ⚙️ Backend Core (FastAPI Setup)
Both platforms communicate with a unified central brain.

* **Framework:** FastAPI (Python)
* **Database:** SQLite with Prisma ORM
* **Authentication:** JWT Bearer Token setup
* **Storage:** Cloudinary (For CDN image hosting of condition reports)

## 🚀 Getting Started

### 1. Running the API Core
```bash
cd ShaalaRakhshak/server
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 2. Running Chakravyuh (Web Dashboard)
```bash
cd Chakravyuh/frontend
npm install
npm run dev
```
*Web client will be available at `localhost:5173` (or similar).*

### 3. Compiling ShaalaRakhshak (APK)
```bash
cd ShaalaRakhshak
npm install
# To run on local simulator/device
npx expo start --clear

# To build standalone Android APK
npx expo build:android
```
