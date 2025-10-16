# Ramarya Consultancy Website

A modern, SEO-optimized Next.js website for Ramarya Consultancy showcasing services, portfolio projects, job listings, and contact information.

## Features

- **Fast & Modern:** Built with Next.js 15, TypeScript, and Tailwind CSS
- **SEO Optimized:** Server-side rendering, metadata, and semantic HTML
- **Responsive Design:** Works perfectly on desktop, tablet, and mobile
- **Performance:** Minimal JavaScript, fast loading times
- **Clean Code:** TypeScript, ESLint configured
- **Portfolio Showcase:** 13+ projects with detailed descriptions
- **Job Listings:** 7 positions with filtering by tags
- **Contact Form:** Full-featured form with email integration

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer
- **Font:** Inter (Google Fonts)

## Project Structure

```
ramarya-website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── jobs/
│   │   └── page.tsx              # Jobs page with filters
│   ├── portfolio/
│   │   └── page.tsx              # Portfolio page with filters
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Navigation header
│   └── Footer.tsx                # Site footer
├── data/
│   ├── portfolio.ts              # Portfolio projects data
│   └── jobs.ts                   # Job listings data
├── public/
│   └── assets/                   # Images and assets
├── .env.example                  # Environment variables template
├── IMAGE_PROMPTS.md              # Image generation prompts
└── README.md                     # This file
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=contact@ramarya.com
```

**For Gmail:**
1. Enable 2-factor authentication
2. Generate an "App Password" at https://myaccount.google.com/apppasswords
3. Use the app password as `SMTP_PASS`

### 3. Add Images

Generate or download images and place them in `public/assets/`. See `IMAGE_PROMPTS.md` for detailed image generation prompts.

**Required images:**
- `logo.png` - Main logo (800x200px)
- `logo-white.png` - White logo for dark backgrounds (800x200px)
- `team.png` - Team photo (800x834px)

**Project images:** (1200x630px each)
- `repriceiq.png`, `hushread.png`, `sources-of-strength.png`
- `mudlove.png`, `kingsloot.png`, `palletiq.png`
- `bingeq.png`, `pb35.png`, `baseball-motivation.png`
- `flybravo-golf.png`, `epubjs-reader.png`, `scoutiq.png`, `winkik.png`

**Note:** If images are missing, the site will display gradient backgrounds with project names as fallback.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
```

### 6. Start Production Server

```bash
npm start
```

## Pages Overview

### Home Page (`/`)
- Hero section with tagline and CTA buttons
- Stats section (years of experience, revenue, projects, users)
- Services grid (6 key services)
- Process/approach section (3 steps)
- Featured projects (6 projects)
- CTA section

### Portfolio Page (`/portfolio`)
- All 13 projects with detailed information
- Filter by category (E-commerce, Content Management, Healthcare, etc.)
- Filter by status (active/archived)
- Project cards with features, tech stack, and metrics
- Links to live projects

### Jobs Page (`/jobs`)
- 7 job listings with full details
- Filter by tags (Remote, Full Stack, Node.js, React, etc.)
- Expandable job cards showing requirements and responsibilities
- Apply buttons linking to contact form
- Benefits section

### Contact Page (`/contact`)
- Full contact form with validation
- Contact information
- Why Choose Ramarya section
- Form submission via API with email notifications

## Customization

### Update Company Information

Edit the content directly in:
- `app/page.tsx` - Home page content
- `components/Footer.tsx` - Footer content
- `components/Header.tsx` - Navigation

### Add/Edit Projects

Edit `data/portfolio.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Project Name',
  description: 'Project description...',
  features: ['Feature 1', 'Feature 2'],
  techStack: ['React', 'Node.js'],
  category: 'E-commerce',
  metrics: '1000+ users',
  url: 'https://project-url.com',
  image: 'project-image.png',
  status: 'active'
}
```

### Add/Edit Jobs

Edit `data/jobs.ts` - Follow the same structure as existing jobs.

## SEO Optimization

The site includes:
- Server-side rendering for all content
- Optimized metadata in `app/layout.tsx`
- Semantic HTML structure
- Fast loading times
- Mobile-responsive design

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

Works on any platform supporting Next.js: Netlify, AWS Amplify, DigitalOcean, etc.

Don't forget to set environment variables in your hosting platform.

## Troubleshooting

### Contact Form Not Working
- Check `.env.local` has correct SMTP credentials
- Verify email isn't in spam folder

### Images Not Showing
- Ensure images are in `public/assets/` directory
- Check file names match exactly (case-sensitive)

### Build Errors
```bash
rm -rf .next
npm run build
```

## Support

For issues or questions: contact@ramarya.com

---

**Built with Next.js 15, TypeScript & Tailwind CSS**
© 2025 Ramarya Consultancy. All rights reserved.
