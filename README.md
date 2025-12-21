# NuMark Biotechnology Portfolio

A modern, responsive portfolio website for NuMark Biotechnology - showcasing AI-powered cancer diagnostics and biotechnology solutions.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant design

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Sections

1. **Hero Section**: Compelling introduction with call-to-action
2. **About**: Company mission, vision, and values
3. **Services**: AI diagnostics, RNA analysis, genetic data analysis
4. **Technology**: Advanced AI platform overview
5. **Team**: Expert team showcase
6. **Achievements**: Recognition and awards
7. **Contact**: Contact information and form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

### Option 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and deploy

### Option 3: Manual Upload

1. Build the project:
   ```bash
   npm run build
   ```

2. Go to [vercel.com](https://vercel.com)
3. Drag and drop the `out` folder to deploy

## Environment Variables

No environment variables are required for the basic deployment. For contact form functionality, you may want to add:

- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_PHONE_NUMBER`

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    900: '#0c4a6e',
  }
}
```

### Content
Update the content in `app/page.tsx` to reflect your specific company information.

### Animations
Modify animation variants in the component for different effects.

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Static Generation**: Pre-rendered for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary to NuMark Biotechnology.

## Support

For technical support or questions about the website, please contact the development team.