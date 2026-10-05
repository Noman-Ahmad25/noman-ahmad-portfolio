# Noman Ahmad — Backend & AI Software Engineer Portfolio

A developer portfolio built for **Noman Ahmad** ([GitHub](https://github.com/Noman-Ahmad25) • [LinkedIn](https://linkedin.com/in/noman-ahmad25)).

Designed around a **deterministic-first engineering philosophy**: enforcing strict schema validation (Pydantic v2), regex/AST gates, database integrity, and multi-tenant security before invoking probabilistic LLMs.

---

## 🚀 Key Highlights & Architectural Identity

- **Deterministic-First AI Architecture**: Demonstrates why raw LLM outputs cannot be trusted blindly. Highlights real pipelines: `Input -> Regex Normalization -> Schema Validation -> LLM Reasoning -> Structured Output (TAKE/REVIEW/DECLINE)`.
- **Verified Resume Grounding**: 100% derived from `Noman Ahmad-Resume.pdf` with zero hallucinated companies, metrics, or testimonials.
- **Production Experience**: Highlights internships at **Dream Filler** (YOLO fine-tuning, mobile app full-stack) and **Quantumbay Cloud** (modular pharmacy ERP, Alembic migrations, RBAC).
- **Featured Systems**:
  1. **AI Requirement Analyzer & Project Decision Engine**: Pydantic v2 validation, TAKE/REVIEW/DECLINE decision engine, multi-tenant workspaces.
  2. **Deterministic-First AI Ticket Triage System**: High-throughput support triage with regex gates and human-in-the-loop draft review.
  3. **AlumniConn — Multi-Tenant Platform**: React 19, TypeScript, FastAPI, PostgreSQL, WebSockets, 4-tier RBAC, live deployment.
  4. **RepoMind — Repository Intelligence CLI**: Concrete syntax trees (Tree-sitter), pgvector embeddings, Gemini reasoning.
- **Downloadable Resume**: Direct download link to `Noman Ahmad-Resume.pdf`.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Bundler & Server**: Vite 5.4
- **Styling**: Vanilla CSS with modern custom tokens, dark obsidian theme, and glassmorphism
- **Icons**: Lucide React + custom SVG icons for brand fidelity
- **Fonts**: Google Fonts (`Plus Jakarta Sans` for typography, `JetBrains Mono` for telemetry and code)

---

## 📂 Project Structure

```
├── public/
│   ├── favicon.svg             # Custom geometric NA developer favicon
│   └── Noman Ahmad-Resume.pdf  # Downloadable resume asset
├── src/
│   ├── assets/                 # Icons & static assets
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive navigation & mobile drawer
│   │   ├── SystemArchitectureGraphic.tsx # Interactive deterministic & backend pipeline visualizer
│   │   ├── ProjectCard.tsx     # Project showcase with pipeline flow & verified links
│   │   ├── SocialIcons.tsx     # Clean SVG brand icons
│   │   └── Footer.tsx          # Terminal-style developer footer
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth containing resume data
│   ├── sections/
│   │   ├── Hero.tsx            # High-impact introduction & architecture graphic
│   │   ├── About.tsx           # CS background & 3 core architectural pillars
│   │   ├── Experience.tsx      # Timeline of production internship experience
│   │   ├── Projects.tsx        # Filterable systems grid & architecture banner
│   │   ├── Skills.tsx          # 5 categorized technical skill cards
│   │   ├── Achievements.tsx    # India Runs AI challenge, NPTEL, and freeCodeCamp
│   │   ├── Education.tsx       # B.Tech CS degree & foundational focus
│   │   └── Contact.tsx         # Direct channels, copyable email, and mail composer
│   ├── App.tsx                 # Core page composition
│   ├── index.css               # Comprehensive design tokens & responsive CSS
│   └── main.tsx                # React application entry point
├── package.json
└── vite.config.ts
```

---

## 💻 Running Locally

### Development Server
```bash
npm run dev
```
The server will start at `http://127.0.0.1:5173/`.

### Production Build
```bash
npm run build
```
Creates an optimized, minified bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```
