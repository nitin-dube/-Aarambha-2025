# Aarambha Mahotsava 2025 - Sarala Birla University

Lightweight, production-ready website for the Aarambha Mahotsava 2025 event. Built with a Vite + React (TypeScript) frontend and an Express backend that serves the production build.

## Quick start (development)

1. Clone the repo and install dependencies:

```powershell
git clone https://github.com/nitin-dube/-Aarambha-2025.git
cd "final arambha"
npm run install:all
```

2. Run dev servers (client + server):

```powershell
npm run dev
```

Open the frontend at http://localhost:5173 and the backend API at http://localhost:3000

## Build & run (production)

1. Create a production build for the client and start the server (server will serve `client/dist`):

```powershell
npm run build
$env:NODE_ENV='production'
npm start
```

2. Visit the site at http://localhost:3000

## Deployment

This project is Vercel-ready. You can also deploy the server and static build to any static host + Node server. See `DEPLOYMENT.md` for detailed steps.

## What changed in this README

- Added concise Quick Start and Build/Run instructions.
- Kept the detailed event, architecture, and deployment docs below.

# Install server dependencies
cd server && npm install

# Install client dependencies
cd client && npm install

# Run development (both server and client)
npm run dev

# Run only server in development
npm run server:dev

# Run only client in development
npm run client:dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Features

### 🏠 Home Page
- Hero section with event branding
- Animated confetti on load
- Event highlights with icons and timing
- Mr. & Ms. Fresher promotion section
- Call-to-action buttons

### 📅 Events Page
- Detailed event timeline
- "Add to Calendar" functionality (.ics download)
- Event highlights with descriptions
- Registration CTAs

### 👥 Committee Page
- Faculty and Student committee tabs
- Member cards with roles and departments
- Committee statistics
- Contact information

### 🎫 Passes Page
- Pricing information (₹600)
- What's included section
- Collection details and timing
- Contact information for passes
- Animated counter for passes left

### 📝 Registration Page
- Multiple registration types:
  - General Registration
  - Cultural Performance Auditions
  - Music Performance
  - Dance Performance
- Registration process steps
- Contact information

### ℹ️ Event Info Page
- Venue, date, and time details
- Rules and guidelines
- FAQ section with accordion
- Contact information

### 📞 Contact Page
- Multiple contact methods
- Event coordinator details
- Office hours information
- Quick action buttons

### 🖼️ Gallery Page
- Placeholder gallery grid
- Category filters
- Photo submission information
- Coming soon notice

### 🚫 404 Page
- Animated 404 error
- Quick navigation links
- Popular pages section

## 🎨 Design Features

### Responsive Design
- **Mobile-first** approach
- Perfect on phones, tablets, and desktops
- Grid-based layout scaling
- Sticky navigation with active link highlighting

### Animations
- **Framer Motion** for smooth animations
- Scroll-reveal animations
- Hover effects and transitions
- **Reduced motion** support for accessibility
- Confetti animation on home page load

### Color Palette
- **Primary**: Red (#dc2626)
- **Secondary**: Blue (#0ea5e9)
- **Accent**: Yellow (#facc15)
- Energetic but readable colors
- Sufficient contrast for accessibility

### Typography
- **Inter** for English text
- **Noto Sans Devanagari** for Hindi text
- Clear hierarchy and readability

## 🔧 Components

### Reusable Components
- **Button**: Primary, secondary, outline variants
- **Card**: Hover effects and consistent styling
- **Badge**: Status indicators with colors
- **Modal**: Accessible modal with backdrop
- **Accordion**: FAQ and collapsible content
- **Tabs**: Tabbed navigation
- **Timeline**: Event timeline with icons
- **Counter**: Animated number counting

## 📊 SEO & Performance

### SEO Features
- Meta tags and Open Graph tags
- Sitemap.xml
- Robots.txt
- Semantic HTML structure
- Clean URLs

### Performance
- **Lighthouse 90+** target scores
- Image lazy loading
- Responsive images
- No layout shift
- Optimized bundle size

### Accessibility
- **WCAG AA** compliance
- Keyboard navigation
- Screen reader support
- Focus management
- Color contrast compliance

## 📞 Contact Information

### Event Coordinators
- **Akash Kumar Singh**: 7255003131
- **Chandra Bhushan Kumar Singh**: 7979937314

### University Contact
- **Phone**: +91 XXX XXX XXXX
- **Email**: info@sbu.ac.in
- **Address**: Birla Campus, Ranchi-Purulia Highway, Ranchi, Jharkhand 835217

## 🎯 Event Highlights

1. **Unlimited Food Fiesta** (12:00 PM – 3:00 PM)
2. **Cultural Performances** (3:00 PM – 5:00 PM)
3. **Mr. & Ms. Fresher** (5:00 PM – 7:00 PM)
4. **Open Floor Dance** (7:00 PM – 10:00 PM)

## 📋 Pass Information

- **Price**: ₹600 (All Access Pass)
- **Includes**: Access to all events, Food & refreshments, Event merchandise, Cultural performances
- **Collection**: Die Mensa Mess Table (10:00 AM – 4:00 PM, Monday to Saturday)
- **Payment**: Cash or UPI (offline only)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

The built application will be served from the `client/dist` directory by the Express server.

## 📝 Content Management

All text content is centralized in `client/src/config/content.ts` for easy editing without code changes. This includes:
- Event details and timing
- Committee member information
- Contact information
- FAQ content
- Rules and guidelines

## 🤝 Contributing

1. Follow the existing code style
2. Use TypeScript for type safety
3. Ensure responsive design
4. Test on multiple devices
5. Maintain accessibility standards

## 📄 License

This project is created for Sarala Birla University's Aarambha Mahotsava 2025 event.

---

**© 2025 Aarambha Mahotsava | Sarala Birla University. All rights reserved.**

*Built with ❤️ for the students of Sarala Birla University*
