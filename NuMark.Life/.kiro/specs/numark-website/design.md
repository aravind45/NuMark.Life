# Design Document: NuMark Healthcare Website

## Overview

The NuMark website is a modern, responsive single-page application (SPA) that serves as the company's primary digital presence. The design emphasizes clean, professional aesthetics appropriate for the healthcare technology sector, with a focus on clear information hierarchy, accessibility, and responsive behavior across all device types.

The website will be built using React for component-based architecture, enabling maintainable and reusable UI elements. The design follows a mobile-first approach with progressive enhancement for larger screens, ensuring optimal user experience across all devices.

### Technology Stack

- **Frontend Framework**: React 18+ with functional components and hooks
- **Styling**: CSS Modules with CSS custom properties for theming
- **Build Tool**: Vite for fast development and optimized production builds
- **Responsive Design**: CSS Grid and Flexbox with mobile-first media queries
- **Smooth Scrolling**: Native CSS scroll-behavior with JavaScript fallback for navigation
- **Icons**: React Icons library for consistent iconography

## Architecture

### Component Hierarchy

```
App
├── Header (Navigation)
│   ├── Logo
│   ├── DesktopNav
│   └── MobileNav (hamburger menu)
├── HeroSection
│   ├── HeroContent
│   └── CTAButton
├── AboutSection (Vision & Mission)
├── ProblemSolutionSection
│   ├── ProblemCard
│   └── SolutionCard
├── TechnologySection
│   ├── TechCard (Liquid Biopsy)
│   ├── TechCard (NGS Platform)
│   └── TechCard (TechBio AI/ML)
├── MilestonesSection
│   └── MilestoneTimeline
│       ├── MilestoneItem (Milestone 1)
│       ├── MilestoneItem (Milestone 3)
│       └── MilestoneItem (Milestone 5)
├── ContactSection
│   └── ContactForm
└── Footer
```

### State Management

The application uses minimal state management through React hooks:

- **Navigation State**: `useState` for mobile menu open/closed state
- **Scroll State**: `useState` for tracking active section during scroll (for nav highlighting)
- **Form State**: `useState` for contact form inputs and validation

No global state management library is needed due to the simple, mostly static nature of the content.

### Routing Strategy

The website uses hash-based navigation for section scrolling rather than full routing:
- Each section has a unique ID
- Navigation links use anchor references (#about, #technology, etc.)
- Smooth scroll behavior navigates between sections
- No page reloads required for navigation

## Components and Interfaces

### Header Component

**Purpose**: Provides persistent navigation across all sections

**Props**: None (uses internal state)

**State**:
```typescript
interface HeaderState {
  isMobileMenuOpen: boolean;
  activeSection: string;
}
```

**Behavior**:
- Fixed positioning at top of viewport
- Responsive transformation: full nav bar (desktop) → hamburger menu (mobile)
- Highlights active section based on scroll position
- Smooth scroll to sections on link click

### HeroSection Component

**Purpose**: Creates impactful first impression with vision statement and primary CTA

**Props**:
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}
```

**Behavior**:
- Full viewport height (min 80vh)
- Centered content with gradient background
- Animated entrance on page load
- Responsive text sizing

### ContentSection Component (Reusable)

**Purpose**: Generic container for content sections with consistent styling

**Props**:
```typescript
interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}
```

**Behavior**:
- Provides consistent padding and spacing
- Alternating background colors for visual separation
- Responsive width constraints (max-width: 1200px)

### TechCard Component

**Purpose**: Displays individual technology features with icon and description

**Props**:
```typescript
interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
```

**Behavior**:
- Card-based layout with hover effects
- Icon at top, title, and description
- Responsive grid layout (1 column mobile, 3 columns desktop)

### MilestoneTimeline Component

**Purpose**: Visualizes company milestones in chronological progression

**Props**:
```typescript
interface Milestone {
  id: number;
  title: string;
  description: string;
}

interface MilestoneTimelineProps {
  milestones: Milestone[];
}
```

**Behavior**:
- Vertical timeline on mobile, horizontal on desktop
- Visual connectors between milestones
- Numbered milestone indicators

### ContactSection Component

**Purpose**: Provides contact information and engagement options

**Props**: None (static content)

**Behavior**:
- Displays contact methods (email, phone placeholder)
- Multiple CTA buttons for different engagement types
- Links to contact section from other CTAs throughout page

### CTAButton Component (Reusable)

**Purpose**: Consistent call-to-action button styling

**Props**:
```typescript
interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}
```

**Behavior**:
- Primary variant: bold accent color with high contrast
- Secondary variant: outlined style
- Hover and focus states for accessibility
- Smooth transitions

## Data Models

### Site Content Structure

```typescript
interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
  };
  
  about: {
    vision: string;
    mission: string;
  };
  
  problem: {
    title: string;
    description: string;
    painPoints: string[];
  };
  
  solution: {
    title: string;
    description: string;
    features: string[];
  };
  
  technology: {
    title: string;
    platforms: TechPlatform[];
  };
  
  milestones: Milestone[];
  
  contact: {
    title: string;
    description: string;
  };
}

interface TechPlatform {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface Milestone {
  id: number;
  title: string;
  description: string;
}
```

### Responsive Breakpoints

```typescript
const breakpoints = {
  mobile: '0px',      // 0-767px
  tablet: '768px',    // 768-1023px
  desktop: '1024px'   // 1024px+
};
```

### Color Scheme

```typescript
const colors = {
  // Primary colors (medical/tech blues)
  primary: {
    dark: '#0A2463',      // Deep navy blue
    main: '#1E88E5',      // Professional blue
    light: '#64B5F6',     // Light blue
  },
  
  // Accent colors
  accent: {
    main: '#00BFA5',      // Teal (innovation)
    secondary: '#7C4DFF',  // Purple (technology)
  },
  
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F5F7FA',
    gray: '#90A4AE',
    darkGray: '#37474F',
    black: '#1A1A1A',
  },
  
  // Semantic colors
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
};
```

### Typography Scale

```typescript
const typography = {
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Poppins', 'Inter', sans-serif",
  },
  
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Responsive Layout Adaptation

*For any* viewport width, the website layout should adapt without horizontal overflow, maintain readable text sizes (minimum 16px base), and apply appropriate responsive styles for the device category (mobile < 768px, tablet 768-1024px, desktop > 1024px).

**Validates: Requirements 1.1, 1.2, 1.3, 1.5**

### Property 2: Viewport Resize Reflow

*For any* viewport size change, the website should reflow content and update layout without requiring a page reload.

**Validates: Requirements 1.4**

### Property 3: Navigation Link Behavior

*For any* navigation link or CTA button that targets a section, clicking it should smoothly scroll to the corresponding section without page reload.

**Validates: Requirements 2.2, 7.3**

### Property 4: Sticky Navigation Persistence

*For any* scroll position on the page, the navigation menu should remain fixed at the top of the viewport.

**Validates: Requirements 2.5**

### Property 5: Mobile Navigation Transformation

*For any* viewport width below 768px, the navigation menu should transform into a hamburger menu icon, and the full navigation links should be hidden until the hamburger is clicked.

**Validates: Requirements 2.3**

### Property 6: Hero Section Minimum Height

*For any* viewport height, the hero section should occupy at least 80% of the viewport height.

**Validates: Requirements 3.5**

### Property 7: Image Alt Text Completeness

*For any* image element in the website, it should have a non-empty alt attribute for accessibility.

**Validates: Requirements 9.2**

### Property 8: Color Contrast Compliance

*For any* text element and its background, the color contrast ratio should meet WCAG AA standards (minimum 4.5:1 for normal text, 3:1 for large text).

**Validates: Requirements 9.3**

### Property 9: Keyboard Navigation Support

*For any* interactive element (links, buttons, form inputs), it should be reachable and operable using keyboard controls (Tab, Enter, Space, Arrow keys).

**Validates: Requirements 9.4**

## Error Handling

### Network and Loading Errors

**Image Loading Failures**:
- Use placeholder images with appropriate alt text
- Implement lazy loading with fallback for unsupported browsers
- Graceful degradation if images fail to load

**Font Loading Failures**:
- Define fallback font stacks in CSS
- Use system fonts as ultimate fallback
- Ensure readability even if custom fonts don't load

### Browser Compatibility Issues

**CSS Feature Detection**:
- Use `@supports` queries for modern CSS features
- Provide fallbacks for older browsers
- Progressive enhancement approach

**JavaScript Errors**:
- Wrap interactive features in try-catch blocks
- Ensure core content is accessible even if JavaScript fails
- Use semantic HTML so content is usable without JavaScript

### Responsive Breakpoint Edge Cases

**Between Breakpoints**:
- Use fluid typography and spacing
- Avoid hard breakpoint jumps
- Test at various viewport sizes, not just standard breakpoints

**Very Small or Very Large Screens**:
- Set minimum and maximum widths where appropriate
- Use clamp() for fluid sizing with bounds
- Test on extreme viewport sizes (320px mobile, 4K displays)

### User Input Validation

**Contact Form Validation**:
- Client-side validation for immediate feedback
- Clear error messages for invalid inputs
- Prevent form submission with invalid data
- Sanitize inputs to prevent XSS

### Accessibility Errors

**Missing Focus Indicators**:
- Ensure all interactive elements have visible focus states
- Use :focus-visible for keyboard-only focus indicators
- Test with keyboard navigation

**Screen Reader Issues**:
- Use ARIA labels where semantic HTML isn't sufficient
- Ensure proper heading hierarchy
- Test with screen readers (NVDA, JAWS, VoiceOver)

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit tests for specific examples and edge cases with property-based tests for universal correctness properties. This dual approach ensures comprehensive coverage:

- **Unit tests**: Verify specific component rendering, user interactions, and edge cases
- **Property tests**: Verify responsive behavior, accessibility compliance, and universal UI properties across many generated inputs

### Unit Testing

**Framework**: Jest with React Testing Library

**Focus Areas**:
1. **Component Rendering**: Verify each component renders with correct props
2. **User Interactions**: Test button clicks, navigation, form submissions
3. **Edge Cases**: Empty states, missing data, error conditions
4. **Integration**: Test component interactions and data flow

**Example Unit Tests**:
- Hero section renders with provided content
- Mobile menu toggles open/closed on hamburger click
- Navigation links scroll to correct sections
- Contact section displays contact information
- Milestone timeline renders all milestones in order

### Property-Based Testing

**Framework**: fast-check (JavaScript property-based testing library)

**Configuration**: Minimum 100 iterations per property test

**Focus Areas**:
1. **Responsive Behavior**: Test layout adaptation across random viewport sizes
2. **Accessibility**: Test color contrast and keyboard navigation across all elements
3. **Navigation**: Test scroll behavior for any navigation target
4. **Universal UI Properties**: Test properties that should hold for all inputs

**Property Test Tags**: Each test must include a comment with format:
```javascript
// Feature: numark-website, Property 1: Responsive Layout Adaptation
```

**Example Property Tests**:
- For any viewport width, layout adapts without overflow (Property 1)
- For any viewport resize, content reflows without reload (Property 2)
- For any navigation link, clicking scrolls to target section (Property 3)
- For any scroll position, navigation remains fixed (Property 4)
- For any mobile viewport, navigation shows hamburger menu (Property 5)
- For any viewport height, hero section is at least 80% height (Property 6)
- For any image, alt text is present and non-empty (Property 7)
- For any text element, color contrast meets WCAG AA (Property 8)
- For any interactive element, keyboard navigation works (Property 9)

### Visual Regression Testing

**Tool**: Percy or Chromatic for visual diff testing

**Coverage**:
- Desktop, tablet, and mobile viewports
- All major sections of the website
- Interactive states (hover, focus, active)
- Cross-browser rendering

### Accessibility Testing

**Automated Tools**:
- axe-core for automated accessibility checks
- Lighthouse for accessibility audits
- WAVE for visual accessibility feedback

**Manual Testing**:
- Keyboard navigation through all interactive elements
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast verification
- Focus management validation

### Cross-Browser Testing

**Browsers**: Chrome, Firefox, Safari, Edge (latest versions)

**Testing Approach**:
- Automated tests run in multiple browsers via Playwright or Cypress
- Visual regression tests across browsers
- Manual testing for browser-specific issues

### Performance Testing

**Metrics**:
- First Contentful Paint (FCP) < 1.5s
- Largest Contentful Paint (LCP) < 2.5s
- Time to Interactive (TTI) < 3.0s
- Cumulative Layout Shift (CLS) < 0.1

**Tools**:
- Lighthouse for performance audits
- WebPageTest for detailed performance analysis
- Chrome DevTools for profiling

### Test Organization

```
tests/
├── unit/
│   ├── components/
│   │   ├── Header.test.jsx
│   │   ├── HeroSection.test.jsx
│   │   ├── TechCard.test.jsx
│   │   ├── MilestoneTimeline.test.jsx
│   │   └── ContactSection.test.jsx
│   └── utils/
│       └── navigation.test.js
├── properties/
│   ├── responsive.property.test.js
│   ├── accessibility.property.test.js
│   ├── navigation.property.test.js
│   └── ui-properties.property.test.js
├── integration/
│   ├── navigation-flow.test.jsx
│   └── user-journey.test.jsx
└── e2e/
    └── full-site.spec.js
```

### Continuous Integration

**CI Pipeline**:
1. Run unit tests on every commit
2. Run property tests on every commit
3. Run accessibility tests on every PR
4. Run visual regression tests on every PR
5. Run cross-browser tests before merge
6. Run performance audits on staging deployment

**Quality Gates**:
- All unit tests must pass
- All property tests must pass (100 iterations each)
- No accessibility violations (axe-core)
- No visual regressions without approval
- Performance metrics within thresholds

## Implementation Notes

### Mobile-First Approach

Start with mobile styles as the base, then use min-width media queries to enhance for larger screens:

```css
/* Mobile base styles */
.container {
  padding: 1rem;
}

/* Tablet enhancement */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop enhancement */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

### CSS Custom Properties for Theming

Use CSS custom properties for consistent theming and easy maintenance:

```css
:root {
  --color-primary: #1E88E5;
  --color-accent: #00BFA5;
  --spacing-unit: 8px;
  --font-size-base: 16px;
}
```

### Smooth Scroll Implementation

Use native CSS smooth scrolling with JavaScript fallback:

```css
html {
  scroll-behavior: smooth;
}
```

```javascript
// Fallback for browsers that don't support smooth scroll
if (!('scrollBehavior' in document.documentElement.style)) {
  // Implement polyfill or use library
}
```

### Accessibility Best Practices

1. **Semantic HTML**: Use appropriate HTML5 elements (header, nav, main, section, article, footer)
2. **ARIA Labels**: Add ARIA labels only when semantic HTML isn't sufficient
3. **Focus Management**: Ensure logical tab order and visible focus indicators
4. **Alt Text**: Provide descriptive alt text for all images
5. **Color Contrast**: Maintain WCAG AA contrast ratios (4.5:1 for normal text)
6. **Keyboard Navigation**: All interactive elements must be keyboard accessible

### Performance Optimization

1. **Code Splitting**: Use React.lazy() for route-based code splitting
2. **Image Optimization**: Use modern formats (WebP) with fallbacks, implement lazy loading
3. **CSS Optimization**: Minimize CSS, remove unused styles, use CSS containment
4. **JavaScript Optimization**: Minimize bundle size, defer non-critical scripts
5. **Caching Strategy**: Implement appropriate cache headers for static assets

### Deployment Considerations

1. **Build Optimization**: Use Vite's production build with minification and tree-shaking
2. **Asset Hosting**: Consider CDN for static assets
3. **Environment Variables**: Use .env files for configuration
4. **Error Monitoring**: Implement error tracking (e.g., Sentry)
5. **Analytics**: Add analytics tracking (e.g., Google Analytics, Plausible)
