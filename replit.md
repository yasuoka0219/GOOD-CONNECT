# GOOD CONNECT - テレアポ代行サービス公式サイト

## Overview

This project is the official website for "GOOD CONNECT," a telemarketing and sales support service operated by GOLVOYA Inc. The primary goal is to promote the service's reliability and track record, driving inquiries through a professional online presence. The site emphasizes industry-low pricing and a supportive approach to script design and client engagement.

The project involved a complete conversion of a React-based application to pure HTML, CSS, and JavaScript. It comprises five key pages: Home, Staff Introduction, Testimonials, Column, and Company Profile. The design adheres to the minimalist, white-based GOLVOYA brand with orange accents.

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
- **Homepage (`index.html`)**: Features an 8-section layout including Hero, Services (4-column), 8 Reasons to Choose Us (grid with hover effects), Case Studies (3-column cards), Pricing, FAQ (accordion), Contact Form with validation, and a consistent Footer.
- **Staff Page (`staff.html`)**: Showcases 3 staff profiles with circular photos and orange borders.
- **Testimonials Page (`testimonials.html`)**: Displays 4 client case studies with business images, performance metrics, and client comments in a 2-column grid.
- **Column Page (`column.html`)**: Presents 10 column articles with thumbnail images and hover effects in a 3-column grid.
- **Company Page (`company.html`)**: Provides company information, an embedded Google Map, and access details.
- **SEO**: Implemented with appropriate meta titles, descriptions, OGP settings, and `ja` language declaration.

## External Dependencies

- **Express.js**: Used for serving static files and handling API requests.
- **Google Maps**: Embedded for location display on the company page.