# Bikesh Sah – Premium Developer Portfolio

A modern, minimal, premium portfolio website built for **Bikesh Sah** (Full-Stack Developer / MERN, B.Tech CSE student in Bangalore seeking a Full-Stack Developer internship).

Inspired by the clean aesthetic of **Linear / Vercel / Stripe**. Built with **React (Vite)**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

---

## 🎨 Visual Design & Features

- **Color Palette**:
  - Background: `#0A0A0F`
  - Cards & Surfaces: `#12121A` with 1px border `rgba(255,255,255,0.08)`
  - Primary Text: `#F5F5F7`
  - Secondary Text: `#A1A1AA`
  - Accent: Vibrant gradient from `#6366F1` (Indigo) to `#22D3EE` (Cyan)
- **Typography**:
  - Headings: `Space Grotesk` (bold, tight tracking)
  - Body: `Inter`
  - Hero name scaled at 56-72px on desktop
- **Micro-Interactions & Animations**:
  - Soft glowing blurred gradient blobs in hero background
  - Dynamic typewriter effect in the hero: *"Full-Stack Developer"*, *"MERN Stack Engineer"*, *"Problem Solver"*
  - Profile photo placeholder framed inside a glowing gradient ring
  - Scroll progress bar fixed at the top of the viewport
  - Glassmorphism navbar with active section indicators
  - Cards lift slightly on hover with an accent glow border
  - Light mode support with toggle (dark mode by default)

---

## 📂 Project Structure

```text
my-portflio/
├── public/
│   ├── Bikesh_Sah_Resume.pdf        # Downloadable resume
│   └── favicon.svg                  # Custom branded <BS/> favicon
├── src/
│   ├── assets/                      # Static assets & images
│   ├── components/
│   │   ├── Navbar.jsx               # Sticky glass bar, "BS" logo, links, theme toggle, "Hire Me"
│   │   ├── Hero.jsx                 # Internship badge, typewriter roles, 2-line pitch, CTAs, avatar ring
│   │   ├── About.jsx                # Summary paragraph & 4 verified stat cards
│   │   ├── Skills.jsx               # 7 grouped cards with pill-style skill tags & icons
│   │   ├── Experience.jsx           # Vertical timeline for Code Alpha Web Dev Internship
│   │   ├── Projects.jsx             # Large showcase cards for Expense Tracker & BotBarrier
│   │   ├── EducationCertifications.jsx # Jain University, WhiteHouse College & SailPoint IIQ
│   │   ├── Contact.jsx              # Split layout with direct channels & EmailJS working form
│   │   └── Footer.jsx               # Copyright, social icons & back-to-top button
│   ├── data/
│   │   └── portfolio.js             # ⭐️ SINGLE SOURCE OF TRUTH for all content & links
│   ├── App.jsx                      # Theme handling, top scroll-progress bar & section ordering
│   ├── index.css                    # Design system layers, glassmorphism, fonts & scrollbars
│   └── main.jsx                     # Vite entry point
├── index.html                       # SEO meta tags, Google Fonts (Space Grotesk & Inter)
├── tailwind.config.js               # Tailwind design tokens
├── vite.config.js                   # Vite configuration
└── vercel.json                      # Single-page application rewrites for Vercel
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Production Build
```bash
npm run build
```

---

## 🌐 Deploy to Vercel

### Option 1: Via GitHub (Recommended)
1. Commit and push your code:
   ```bash
   git add .
   git commit -m "feat: complete premium developer portfolio"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **"Add New..." → "Project"**.
3. Import your GitHub repository. Vercel will auto-detect Vite.
4. Click **Deploy**.

### Option 2: Via Vercel CLI
```bash
npx vercel
```

---

## ⚙️ Customization Checklist (What You Need to Replace)

All your data is cleanly separated in **`src/data/portfolio.js`**:

1. **Profile Photo**:
   - To use your own photo, place an image (e.g. `profile.jpg`) in the `public/` directory and set `profilePhoto: "/profile.jpg"` inside `portfolioData.personal` in `src/data/portfolio.js`.
2. **Resume PDF**:
   - Your resume has already been placed in `public/Bikesh_Sah_Resume.pdf`. When you update it, replace this file with the same name.
3. **Project Links**:
   - In `portfolioData.projects` in `src/data/portfolio.js`, update `githubUrl` and `liveUrl` with your actual repository and live deployment links.
4. **EmailJS Credentials**:
   - In `portfolioData.emailConfig` in `src/data/portfolio.js`, replace `service_placeholder`, `template_placeholder`, and `public_placeholder` with your credentials from [emailjs.com](https://www.emailjs.com/) to receive contact form emails directly in your inbox.
   *(Note: Until configured, clicking send automatically opens the sender's mail client addressed to `bikeshsah096@gmail.com` as a fail-safe).*
