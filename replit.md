# The Golden Aura Trust Website

## Overview
A professional multi-page website for "The Golden Aura Trust" - a dedicated force in the promotion and development of chess across Karnataka and India. The Trust is affiliated with KSCA, BUDCA, FIDE, and AICF.

## Core Features
- **Home page**: 
  - Hero section with chess theme
  - Overview of the Trust
  - News section (placeholder)
  - Mission statement with three pillars (Accessibility, Community, Innovation)
  - "Be a Part of the Movement" call-to-action
  - Upcoming events with registration QR code placeholder
  - Image carousel/gallery
  - Partners section (placeholder)
  
- **About Us page**: Mission, vision, team members, and impact statistics
- **Events page**: Display of upcoming and past chess tournaments/events
- **Contact Us page**: Contact form and trust's contact details

## Visual Design
- **Colors**: 
  - Primary: #F4A261 (warm golden)
  - Secondary: #2A9D8F (trustworthy teal)
  - Accent: #E76F51 (warm coral)
  - Background: #FEFAE0 (soft cream)
  - Text: #264653 (deep blue-grey)
- **Fonts**: Montserrat (headings), Open Sans (body text)
- **Design**: Clean sections with ample whitespace, hero banners on each page, fully responsive with mobile-first approach

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
React 18 TypeScript application with:
- `shadcn/ui` components (built on Radix UI)
- `Wouter` for client-side routing
- `TanStack Query` for server state management
- `Tailwind CSS` for styling
- `Framer Motion` for animations
- Responsive mobile menu

### Backend Architecture
Express.js server with:
- RESTful API design
- Type-safe routes with Zod validation
- In-memory storage for development

### Data Storage
PostgreSQL schema with Drizzle ORM:
- `events` table: id, title, description, date, location, imageUrl
- `contactMessages` table: id, name, email, message

## API Endpoints
- `GET /api/events` - Fetch all events
- `POST /api/contact` - Submit contact form message

## Development
Run with: `npm run dev`
Build for production: `npm run build`

## File Structure
```
client/src/
  pages/
    home.tsx        # Home page with chess-focused content
    about.tsx       # About page with mission/vision/team
    events.tsx      # Events listing page
    contact.tsx     # Contact form and info
  components/
    navbar.tsx      # Responsive navigation with mobile menu
    footer.tsx      # Site footer with social media links
    ui/             # Shadcn UI components
shared/
  schema.ts         # Database schema and types
server/
  routes.ts         # API routes
  storage.ts        # Data storage layer
```

## Affiliations
- Karnataka State Chess Association (KSCA)
- Bengaluru Urban District Chess Association (BUDCA)
- International Chess Federation (FIDE)
- All India Chess Federation (AICF)
