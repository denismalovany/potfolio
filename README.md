# Product Designer Portfolio

A clean, professional portfolio website for a Product Designer, built with Next.js and Tailwind CSS.

## Features

- Responsive design optimized for desktop and mobile
- Fast loading with static generation
- SEO optimized with meta tags and Open Graph
- Accessible with semantic HTML and keyboard navigation
- Typography-first design with clear hierarchy
- Case study pages with sticky table of contents

## Setup Instructions

1. Clone or navigate to the project directory:
   ```bash
   cd "/Users/denys/Desktop/test page/portfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - Reusable React components
- `src/data/` - Content data files (case studies, about, site info)
- `public/images/` - Placeholder images (replace with real ones)

## Customization

### Content Replacement

1. **Site Data** (`src/data/site.ts`): Update name, title, positioning, contact info.
2. **About Data** (`src/data/about.ts`): Replace bio, skills, timeline with real content.
3. **Case Studies** (`src/data/caseStudies.ts`): Replace demo content with real case studies. Add full details for each.

### Images

Replace placeholder images in `public/images/` with real screenshots and photos:
- `case1-thumb.jpg`, `case1-screen1.jpg`, etc. - Case study images
- `portrait.jpg` - Profile photo

### Styling

The design uses Tailwind CSS. Customize colors, fonts, and spacing in component files.

## Build and Deploy

1. Build for production:
   ```bash
   npm run build
   ```

2. Start production server:
   ```bash
   npm start
   ```

Deploy to Vercel, Netlify, or any static hosting service.

## Architecture Notes

- **Data-Driven**: Content stored in TypeScript files for easy editing.
- **Component-Based**: Modular components for maintainability.
- **Static Generation**: Fast loading and SEO benefits.
- **Responsive**: Mobile-first design with Tailwind breakpoints.
- **Accessible**: Semantic HTML, alt text, focus states.

## Demo Content

The site includes:
- 1 fully detailed case study
- 2 placeholder case studies
- Sample about content
- NDA-safe presentation patterns (anonymized metrics, blurred visuals)

Replace all placeholder content with real information before publishing.
