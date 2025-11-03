# Wolfron Technologies LLP - Company Website

A professional, responsive company website built with Next.js, TypeScript, and Tailwind CSS for Wolfron Technologies LLP.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📋 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with metadata and schema
- ✅ Smooth animations and transitions
- ✅ Modern, clean UI/UX
- ✅ Accessible design (AA contrast level)
- ✅ Contact form with email integration
- ✅ Google Analytics ready

## 🏗️ Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── achievements/   # Achievements page
│   ├── careers/        # Careers/Join Us page
│   ├── contact/        # Contact Us page
│   ├── journey/        # Our Journey timeline
│   ├── products/       # Products & Services page
│   ├── team/           # Team page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
└── public/             # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: #B00B1D (Deep Red)
- **Secondary**: #121212 (Jet Black)
- **Accent**: #F2F2F2 (Light Gray)

### Typography
- Primary Font: Poppins
- Fallback: Inter, Roboto, sans-serif

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📧 Contact Form Setup

The contact form currently uses a mailto fallback. To integrate with a backend API:

1. Create an API route at `app/api/contact/route.ts`
2. Update the form submission handler in `app/contact/page.tsx`
3. Configure email service (e.g., SendGrid, Resend, or NodeMailer)

## 🔧 Configuration

### Google Analytics
Update the Google Analytics ID in `app/layout.tsx`:
```typescript
gtag('config', 'G-XXXXXXXXXX'); // Replace with your GA ID
```

### Meta Tags
SEO metadata is configured in `app/layout.tsx`. Customize as needed.

## 📱 Pages

- **Home**: Hero section, highlights, mission
- **About**: Company info, mission, vision, values
- **Products**: TaxiWale Partners and services
- **Journey**: Company timeline
- **Achievements**: Awards and milestones
- **Team**: Co-founders and team members
- **Contact**: Contact form and information
- **Careers**: Internship positions and application

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

© 2025 Wolfron Technologies LLP. All Rights Reserved.

## 🤝 Support

For support, email wolfrontechnologies@gmail.com or visit [Contact Page](/contact).

