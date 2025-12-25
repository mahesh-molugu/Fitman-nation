# FitMan Nation - Fitness & Wellness Platform

A complete, responsive frontend website for FitMan Nation - "Train Smarter. With Mentors."

## 🚀 Features

### Complete Website Structure
- **Homepage** - Hero section, What We Do, Programs overview, Testimonials, Events preview, CTA banners
- **About Us** - Brand story, mission, vision, team information
- **Programs** - 6 comprehensive program types with detailed features, benefits, and pricing
- **How It Works** - Step-by-step process guide
- **Events** - Calendar view with registration functionality
- **Online Classes** - Yoga, Zumba, Mobility, and Strength training classes
- **Success Stories** - Client testimonials and transformation stories
- **Blog** - Fitness articles, tips, and resources
- **Contact** - Comprehensive contact form with WhatsApp integration and FAQ
- **Legal Pages** - Privacy Policy, Terms of Service, Refund Policy

### Key Features
✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **SEO Optimized** - Meta tags, semantic HTML, fast loading  
✅ **Lead Capture** - Sticky banner with email capture  
✅ **WhatsApp Integration** - Direct contact via WhatsApp Business  
✅ **Google Analytics Ready** - Event tracking for all CTAs  
✅ **Fast Loading** - Optimized assets and code splitting  
✅ **Accessibility** - ARIA labels, keyboard navigation, focus states  

## 🎨 Brand Identity

- **Colors**: Black (#000000), Red (#DC143C), White (#FFFFFF)
- **Fonts**: Montserrat, Poppins
- **Style**: Clean, modern, bold, motivational

## 📦 Technology Stack

- **React 19** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Hero.jsx         # Hero section
│   ├── WhatWeDo.jsx     # Services showcase
│   ├── ProgramsOverview.jsx
│   ├── TestimonialsSlider.jsx
│   ├── EventsPreview.jsx
│   └── LeadCaptureBanner.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Programs.jsx
│   ├── HowItWorks.jsx
│   ├── Events.jsx
│   ├── OnlineClasses.jsx
│   ├── SuccessStories.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── PrivacyPolicy.jsx
│   ├── TermsOfService.jsx
│   └── RefundPolicy.jsx
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🔧 Configuration

### Google Analytics
Update the Google Analytics ID in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
```

### WhatsApp Number
Update WhatsApp number in:
- `src/pages/Contact.jsx` (line with `wa.me/919876543210`)
- `src/components/Footer.jsx`

### Email Address
Update email in:
- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`
- Legal pages

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🎯 Call-to-Action Tracking

All CTAs are set up for Google Analytics event tracking:
- Hero buttons
- Program enrollment
- Event registration
- Class booking
- Form submissions
- Lead capture banner

## 💳 Payment Integration

Payment integration placeholders are ready. To integrate:
1. **Razorpay**: Add Razorpay SDK and configure in payment components
2. **Stripe**: Add Stripe.js and configure payment elements
3. **UPI**: Integrate UPI payment gateway

## 📧 Form Integration

Contact forms are configured to:
1. Open WhatsApp with pre-filled message
2. Send data to email (configure backend)
3. Track conversions in Google Analytics

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder contains the production-ready files.

### Deploy to:
- **Netlify**: Connect GitHub repo or drag & drop `dist/` folder
- **Vercel**: Connect GitHub repo or use Vercel CLI
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `dist/` contents to web server

## 📝 Content Updates

### To Update Content:
1. **Programs**: Edit `src/pages/Programs.jsx`
2. **Events**: Edit `src/pages/Events.jsx`
3. **Testimonials**: Edit `src/components/TestimonialsSlider.jsx` and `src/pages/SuccessStories.jsx`
4. **Blog Posts**: Edit `src/pages/Blog.jsx`
5. **Team Info**: Edit `src/pages/About.jsx`

## 🔒 Security Notes

- Forms include consent checkboxes
- HTTPS required for production
- Input validation on all forms
- Secure payment gateway integration needed

## 📞 Support

For questions or issues:
- Email: support@fitmannation.com
- WhatsApp: +91 98765 43210

## 📄 License

© 2024 FitMan Nation. All rights reserved.

---

**Built with ❤️ for FitMan Nation**
