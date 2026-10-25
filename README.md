# ParkShare · Share · Park · Go 🚗📍

> **A smart, reservable peer-to-peer parking marketplace.**  
> Academic startup project for the Entrepreneurship & IPR Course (Experiment 9: Venture Creation) by F.Y. MCA students at Sardar Patel Institute of Technology (SPIT), Munshi Nagar, Andheri (West), Mumbai 400058.

---

## 👥 Founding Team (SPIT MCA 2025–2026)
- **Prathamesh Andhale** (2025510002) – Team Lead & Full-stack Development
- **Swapnil Bhiungade** (2025510007) – Product & Research
- **Vedant Bhushette** (2025510008) – Design & Business Analysis
- **Dev Tayade** (2025510064) – Operations & Documentation

**Official Public Email:** `prathamesh.andhale25@spit.ac.in`  
**Campus Address:** Sardar Patel Institute of Technology, Munshi Nagar, Andheri (West), Mumbai - 400058.

---

## 🚀 Overview & Key Innovations
ParkShare unlocks distributed, authorized private parking slots (driveways, stilts, residential societies) for Mumbai drivers through:
1. **Transaction-Gated Location Reveal:** Protects homeowners by withholding exact building and wing numbers until a refundable deposit is committed.
2. **Refundable Security Deposit:** ₹300–₹500 escrow hold ensures reservation reliability.
3. **Live Photo, GPS & Timestamp Verification:** Arrival and departure photos with tamper-proof device timestamps stop billing disputes.
4. **Actual-Duration Billing:** Pay down to the actual minute parked (₹25–₹60/hr introductory rate).
5. **Zero Hardware Needed:** Hosts monetize vacant spaces without smart locks, sensors, or boom barrier retrofits.

---

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite 6
- **Routing:** React Router v6 (`HashRouter` ensures GitHub Pages never 404s on refresh)
- **Styling:** Tailwind CSS + PostCSS + Custom print stylesheets
- **Animations & Icons:** Framer Motion + Lucide React
- **Hosting & CI/CD:** GitHub Pages via GitHub Actions workflow

---

## 💻 Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
This generates the static production bundle in `dist/`.

---

## 📝 Where to Edit Content
Every piece of editable content is centralized in **ONE** single file:
👉 `src/data/siteData.js`

Here you can update:
- **Founding team details & roles**
- **Mobility statistics & market research numbers**
- **Business Model Canvas items & unit economics**
- **Roadmap phases & milestone dates**
- **Promotional video URL**
- **Repo & live production URLs**

---

## 🎬 How to Add the Promotional Video
1. Upload your MP4 or video recording to Google Drive.
2. Set link permissions to *"Anyone with the link can view"*.
3. Copy the URL (e.g. `https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing`).
4. Paste it into `src/data/siteData.js` under:
   ```javascript
   urls: {
     videoUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/view",
     // ...
   }
   ```
5. ParkShare automatically extracts the file ID and renders the responsive preview player at `#/video`.

---

## 📄 Adding Optional Pre-built PDFs
The Downloads page dynamically detects PDFs placed in `public/docs/`:
- `public/docs/StartupProfile.pdf`
- `public/docs/Brochure.pdf`
- `public/docs/BMC.pdf`

If files exist, a direct "Download Direct PDF" button is shown. If not, the application gracefully provides the printable A4 browser view (`#/profile` and `#/brochure`) with a 1-click print-to-PDF button.

---

## 🖨️ Printing Clean A4 Documents
To save official documents as PDF:
1. Open `#/profile` or `#/brochure`.
2. Click **Download as PDF / Print**.
3. In Chrome/Safari/Edge:
   - Destination: **Save as PDF**
   - Paper Size: **A4**
   - Options: Check **Background graphics**
   - Margins: **Default** or **None**

`#/profile` is specifically tailored to fit **1 page A4**, and `#/brochure` fits **exactly 2 pages A4** with a native CSS page break.

---

## 🔄 Deployment & Updates
Deployment runs automatically via GitHub Actions on every push to the `main` branch.

### Push updates to live site:
```bash
git add .
git commit -m "Update site content"
git push origin main
```

---

## ⚖️ Academic Intellectual Property Notice
*IP documents (patent, trade mark and copyright forms) were prepared as part of an academic exercise for the Entrepreneurship and IPR course at SPIT Mumbai. Nothing has been filed, granted or registered.*
