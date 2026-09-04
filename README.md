# ZEETREAT Website

A premium e-commerce website for ZEETREAT Herbal Hair Oil, built with Next.js, React, Three.js, and Tailwind CSS.

## Features

- ✨ Premium, modern design with sophisticated natural aesthetic
- 🎨 Responsive mobile-first layout (320px - 4K)
- 🌐 3D interactive product showcase with Three.js
- 🎬 Smooth animations and transitions with Framer Motion
- ♿ Full accessibility support (WCAG 2.1)
- 🔍 SEO optimized with metadata and sitemap
- 📱 Touch-friendly mobile navigation
- ⚡ Optimized performance and fast load times
- 🎯 Conversion-focused design with clear CTAs

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3 with custom design tokens
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── services/          # Services page
│   ├── equipment/         # Products page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── careers/           # Careers page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── robots.txt/        # SEO robots
│   └── sitemap.xml/       # XML sitemap
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── ProductShowcase.tsx # 3D product display
│   ├── Product3D.tsx      # Three.js 3D bottle
│   ├── Benefits.tsx       # Benefits section
│   ├── WhyZeetreat.tsx   # Why choose us
│   ├── Ingredients.tsx    # Ingredients listing
│   ├── HowToUse.tsx       # Usage instructions
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── FAQ.tsx            # FAQ accordion
│   ├── CTASection.tsx     # Call-to-action
│   ├── ContactForm.tsx    # Contact form
│   └── Footer.tsx         # Footer
public/                    # Static assets
├── zeetreat-logo.png     # [TO BE ADDED] Official logo
└── zeetreat-product.png  # [TO BE ADDED] Product bottle image
```

## Getting Started

### Prerequisites
- Node.js 16.8 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/AbbasSafi-commits/zeetreat-website.git
cd zeetreat-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the production bundle
npm run build

# Start the production server
npm start

# Run linting
npm run lint
```

## 3D Product Showcase

The website features an interactive 3D product showcase using Three.js:

- **Desktop**: Mouse-controlled rotation and interaction
- **Mobile**: Touch-responsive with auto-rotation
- **Fallback**: Graceful degradation for browsers without WebGL support
- **Performance**: Optimized rendering with lazy loading

### 3D Bottle Features

- Realistic cylindrical bottle geometry
- Dynamic canvas-based label texture
- Premium lighting with multiple light sources
- Smooth animations and floating motion
- Responsive sizing for all screen sizes

## Design System

### Color Palette

- **Gold**: Brand accent color (#c9a882 primary, variations from #d4bfa0 to #9d7d57)
- **Sage**: Secondary accent (#8cb588 primary, variations)
- **Neutral**: Professional grays and whites for main content

### Typography

- **Serif**: Headlines and premium accents (Georgia fallback)
- **Sans-serif**: Body text and UI (System stack)
- **Font Sizes**: Carefully tuned hierarchy from 12px to 72px

### Spacing

- Generous whitespace for premium feel
- Consistent padding/margin scale
- Mobile-first responsive adjustments

## Key Pages

### Homepage
Features hero section, 3D product showcase, benefits, ingredients, how-to-use, testimonials, FAQ, and CTAs.

### Product Information
- Benefits and features
- Complete ingredient list with descriptions
- Usage instructions with 6-step visual guide
- Premium packaging information

### Support Pages
- About: Company story and values
- Contact: Contact form with validation
- Careers: Join our team information
- Blog: Hair care tips and insights

### Legal Pages
- Privacy Policy
- Terms of Service
- Robots.txt
- XML Sitemap

## Important: Adding Official Assets

This website is designed to use official ZEETREAT branding and product images.

### Logo
Place your official ZEETREAT logo at:
```
public/zeetreat-logo.png
```
The logo will automatically be used in the navbar and footer.

### Product Image
Place your official product bottle image at:
```
public/zeetreat-product.png
```

If you want to use the actual product photo instead of the 3D version:
1. Add the image to `/public/zeetreat-product.png`
2. Update `ProductShowcase.tsx` to use the image component instead of Product3D

### Testimonials
Replace placeholder testimonials in `Testimonials.tsx` with real customer reviews.

### Contact Information
Update contact details in:
- `Footer.tsx` - Contact links
- `contact/page.tsx` - Contact information
- Social media links where applicable

## Performance Optimization

- Image optimization with Next.js Image component
- Lazy loading for non-critical components
- Code splitting and dynamic imports
- Optimized Three.js rendering
- Minimal CSS with Tailwind purging
- Production builds with tree-shaking

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 14+, Chrome Android

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast WCAG AA compliant
- Reduced motion support (`prefers-reduced-motion`)
- Mobile-optimized touch targets (48px minimum)

## SEO

- Metadata on every page
- Open Graph and Twitter card support
- XML sitemap for search engines
- Semantic HTML headings
- Image alt text
- Structured data ready

## Environment Variables

Create a `.env.local` file:

```env
# Add any backend API endpoints here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## Deployment

This site is optimized for deployment on:
- Vercel (recommended - built by Next.js creators)
- Netlify
- AWS Amplify
- Self-hosted with Node.js

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

## Development Guidelines

### Component Structure
- Keep components focused and reusable
- Use TypeScript for type safety
- Implement proper error boundaries
- Add loading states for async operations

### Styling
- Use Tailwind CSS utility classes
- Extend theme in `tailwind.config.ts`
- Avoid inline styles
- Mobile-first responsive design

### Performance
- Lazy load heavy components
- Optimize images
- Monitor Core Web Vitals
- Use dynamic imports for 3D components

## Troubleshooting

### 3D Product Not Showing
- Check browser WebGL support
- Ensure Three.js library is loaded
- Check browser console for errors
- Verify component isn't hidden by CSS

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node.js version compatibility

### Performance Issues
- Check Network tab for large assets
- Use Lighthouse for metrics
- Monitor JavaScript bundle size
- Profile with React DevTools

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

All rights reserved. ZEETREAT is a registered trademark.

## Support

For questions or issues:
- Email: contact@zeetreat.com
- Website: https://www.zeetreat.com
- Phone: [Your contact number]

---

**Last Updated**: September 2026
**Version**: 1.0.0
**Status**: Production Ready
