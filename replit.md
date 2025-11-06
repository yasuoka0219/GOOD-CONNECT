# GOOD CONNECT - テレアポ代行サービス公式サイト

## Overview

This project is the official website for "GOOD CONNECT," a telemarketing and sales support service operated by GOLVOYA Inc. The primary goal is to promote the service's reliability and track record, driving inquiries through a professional online presence. The site emphasizes industry-low pricing and a supportive approach to script design and client engagement.

The project involved a complete conversion of a React-based application to pure HTML, CSS, and JavaScript. It comprises five main pages (Home, Staff Introduction, Testimonials, Column, and Company Profile) plus three detailed staff profile pages. The design adheres to the minimalist, white-based GOLVOYA brand with orange (#F28C3D) accents.

## User Preferences

The project required a complete transformation from a React + Tailwind CSS application to pure HTML, CSS, and Vanilla JavaScript. The current implementation should serve as the definitive version.

## System Architecture

The website is built using a modern, server-rendered approach with static files.

### UI/UX Decisions
- **Design Language**: Adheres to the GOLVOYA brand (https://golvoya.com/), characterized by a minimalist, white-based aesthetic with warm orange accents.
- **Color Scheme**: Main color is Soft Navy (220 40% 20%), with Warm Orange (27 85% 55%) as the accent.
- **Typography**: Noto Sans JP for Japanese text and Inter for numbers and English.
- **Layout**: Fully responsive across desktop, tablet, and mobile breakpoints (768px and 1024px). Grid layouts adjust from 4 columns to 2 to 1 column based on screen size.
- **Animations**: Subtle scroll-fade-ins and hover effects for cards and images.
- **Imagery**: Utilizes stock images for staff, services, case studies, columns, and office visuals. Images are object-covered, with circular profiles featuring orange ring borders. Gradient overlays enhance text readability over background images.

### Technical Implementations
- **Frontend**:
    - **Pure HTML5**: Semantic markup for all five pages.
    - **Custom CSS**: A comprehensive `main.css` file (1400+ lines) incorporating custom properties (design tokens), BEM-style naming, and full responsiveness without a framework.
    - **Vanilla JavaScript**: `site.js` handles mobile menu toggling, smooth scrolling, FAQ accordions, and contact form submissions with API integration.
- **Backend**:
    - **Express.js**: Serves static files from the `server/public` directory.
    - **In-memory storage**: Temporarily stores contact form submissions.
    - **API Endpoint**: `POST /api/contact` for form submission.
- **File Structure**:
    - `server/public/`: Contains all static assets (HTML, CSS, JS, images).
    - `legacy/`: Stores the old React source code for reference.
    - `shared/`: Holds data schemas.

### Feature Specifications
- **Homepage (`index.html`)**: Features an 9-section layout including Hero, Services (4-column with circular images), 8 Reasons to Choose Us (grid with hover effects), Flow (6-step vertical flow diagram), Case Studies (3-column cards), Pricing, FAQ (accordion), Contact Form with validation, and a consistent Footer.
- **Staff Page (`staff.html`)**: Showcases 3 staff profiles with circular photos and orange borders. Each staff name links to their detailed profile page.
- **Staff Detail Pages**: 
  - **Kotani (`staff-kotani.html`)**: CEO profile detailing entrepreneurial journey, business philosophy, and vision for telemarketing services.
  - **Kido (`staff-kido.html`)**: Operations Manager profile highlighting transition from ANA ground staff and expertise in remote team management.
  - **Ogawa (`staff-ogawa.html`)**: Call staff interview showcasing day-to-day operations, work satisfaction, and company culture.
- **Testimonials Page (`testimonials.html`)**: Displays 4 client case studies with real customer photos (testimonial1-4.png), performance metrics, and detailed client comments in a 2-column grid.
- **Column Page (`column.html`)**: Presents 10 column articles with thumbnail images and hover effects in a 3-column grid.
- **Company Page (`company.html`)**: Provides company information, an embedded Google Map, and access details.
- **SEO**: Implemented with appropriate meta titles, descriptions, OGP settings, and `ja` language declaration.

## Recent Updates (November 2025)

### New Sections
- **Flow Section ("ご利用の流れ")**: Added a vertical flow diagram section showing the 6-step process (Hearing, Proposal, Contract Adjustment, Contract, Service Implementation, Evaluation and Improvement) with alternating left-image/right-content layout, blue gradient backgrounds, step badges, and downward arrow connectors. Fully responsive with mobile stacking.

### Service Section Images
- **リスト作成 (List Creation)**: list-creation.png - Hand writing checklist on paper with tablet in background
- **スクリプト設計 (Script Design)**: script-design.png - Japanese professional designing tele-sales script on monitor
- **架電実施 (Call Execution)**: call-execution.png - Japanese call center operator with headset

### Flow Section Images
- **STEP 05 (サービスの導入)**: jp-phone-call-new.jpg - Japanese business professional on call
- **STEP 06 (評価と改善)**: jp-conference-room.jpg - Japanese business meeting in conference room
- All flow images now use consistent Japanese business photography style

### Image Replacements
- **Column Detail Pages (column-1.html through column-10.html)**: Consolidated all article images to single GoodConnect branded images
  - Replaced all article images with `/images/goodconnect-[1-10].png` matching column numbers
  - Removed all secondary article images (2nd, 3rd, 4th images) from detail pages
  - Each column detail page now has exactly 1 article image with class "article-image"
  - Author and footer images remain unchanged and separate from article content
  - Total reduction: column-2 to column-6 (2→1 images), column-7 (3→1 images), column-8 to column-9 (3→1 images), column-10 (4→1 images)
- **Column Page Images**: Replaced all foreign model images with Japanese business professionals
  - Column 2: Team strategy meeting (jp-team-strategy.jpg)
  - Column 3: Conference room collaboration (jp-conference-room.jpg)
  - Column 5: Teamwork handshake (jp-teamwork-hands.jpg)
  - Column 6: Call center professional (jp-call-center.jpg)
  - Column 9: Note-taking business scene (jp-note-taking.jpg)
  - Column 10: Checklist review (jp-checklist-review.jpg)
- **Homepage**: Updated phone call service image (jp-phone-call-new.jpg)

### Design Updates
- **Strengths Section Redesign**: Completely redesigned "選ばれる8つの理由" section with left-image/right-content layout
  - Changed from 4-column grid to 2-column grid layout
  - Each box now features 35% width image on left, content on right
  - Blue titles (hsl(200, 65%, 45%)) with dotted underline border
  - White card backgrounds on muted section background
  - Fully responsive with mobile stacking at 768px breakpoint
  - Updated images for Strength 6 (diverse-approach.png - city network visualization) and Strength 8 (rich-experience.png - business handshake)

### Layout Improvements
- **Text Layout**: Fixed unnatural word breaks in Japanese text on column cards
  - `word-break: keep-all` - Prevents breaking within Japanese words
  - `overflow-wrap: break-word` - Only breaks at natural boundaries
  - Improved line-height for better readability
- **Pricing Section Centering**: Fixed alignment issues in pricing section
  - Added `margin: 0 auto` to `.container-narrow` for proper centering
  - Added `text-align: center` to `.strength-title` for option services heading
- **Testimonials Page Images**: Fixed excessive cropping of customer photos
  - Increased image container height from 12rem (192px) to 18rem (288px)
  - Added `object-position: center 20%` to ensure faces are properly displayed
  - All four customer testimonial photos now show faces without cropping
- **Column Card Size Uniformity**: Completely standardized all column card sizes using CSS Grid and Flexbox
  - Created dedicated `.column-grid` with `grid-template-columns: repeat(3, 1fr); gap: 1.5rem;` for equal-width columns
  - Applied `display: flex; flex-direction: column; height: 100%; padding: 0 !important;` to `.column-card` to override `.card` padding
  - Card content area uses `flex: 1` with Flexbox to fill available space
  - Title uses `overflow-wrap: anywhere;` (removed `word-break: keep-all;` which was causing grid columns to expand unevenly)
  - Image container fixed at `height: 12rem; flex-shrink: 0`
  - All cards now have perfectly uniform width (equal grid columns) and uniform height within each row
  - Root cause: `word-break: keep-all;` prevented text wrapping, forcing grid columns to expand to fit long titles

### 3D Design Implementation
- **Shadow System**: Implemented comprehensive shadow system using CSS custom properties
  - Created shadow variables: `--shadow-sm` (0 1px 3px), `--shadow-md` (0 4px 6px), `--shadow-lg` (0 10px 15px)
  - Added specialized shadows: `--shadow-button` (base), `--shadow-button-hover` (elevated), `--shadow-card` (medium)
  - Defined `--color-card-border` for subtle border separation (hsl(220, 20%, 90%))
- **Interactive Elements**: Enhanced all buttons with 3D effects
  - Base state: `box-shadow: var(--shadow-button)` with subtle border
  - Hover state: `box-shadow: var(--shadow-button-hover)` with `transform: translateY(-2px)` for lift effect
  - Active state: `box-shadow: var(--shadow-sm)` with `transform: translateY(0)` for press effect
  - Applied to `.btn`, `.btn-primary`, `.btn-secondary`, and `.btn-outline`
- **Card Components**: Added depth to all card-based elements
  - Base shadow: `box-shadow: var(--shadow-sm)` with `border: 1px solid var(--color-card-border)`
  - Hover enhancement: `box-shadow: var(--shadow-lg)` with `transform: translateY(-4px)` for `.card:hover`
  - Special effects: `.column-card` includes `transform: translateY(-4px)` on hover for pronounced lift
  - Applied to `.card`, `.column-card`, `.testimonial-card`, `.service-card`, `.reason-card`
  - Testimonials page: Unified all card HTML structures to use consistent inline styling
- **Form Elements**: Enhanced inputs with focus-driven depth
  - Base state: `box-shadow: var(--shadow-sm)` with border
  - Focus state: `box-shadow: var(--shadow-md)` for visual emphasis
  - Applied to `input`, `textarea`, `select` elements
- **FAQ Component**: Implemented button-level shadows for proper visibility
  - Removed parent `.faq-item` overflow and shadows to prevent clipping
  - Applied shadows directly to `.faq-question` buttons with `!important` for cascade precedence
  - Base state: `box-shadow: var(--shadow-sm) !important`
  - Hover state: `box-shadow: var(--shadow-md) !important` with color transition
- **Structural Elements**: Added grounding shadows to header and footer
  - Header: `box-shadow: var(--shadow-sm)` for subtle separation
  - Footer: `box-shadow: 0 -1px 3px rgba(0,0,0,0.1)` for inverted depth effect
- **Design Philosophy**: Consistent elevation hierarchy throughout the site
  - Small shadows (sm) for base states and subtle separation
  - Medium shadows (md) for hover states and emphasis
  - Large shadows (lg) for pronounced card hover states
  - All interactive elements provide tactile feedback through shadow and transform transitions
- **Testing**: Validated through automated end-to-end tests confirming all cards, buttons, forms, and FAQ elements display proper shadows and interactive depth effects across all pages

## External Dependencies

- **Express.js**: Used for serving static files and handling API requests.
- **Google Maps**: Embedded for location display on the company page.