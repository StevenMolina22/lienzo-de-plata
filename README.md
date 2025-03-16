# Lienzo de Plata Foundation for Elders - Project Documentation

## Index
- [Project Overview](#project-overview)
- [Core Technologies](#core-technologies)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Page Structure](#page-structure)
- [Component Hierarchy](#component-hierarchy)
- [Data Management](#data-management)
- [Responsive Design](#responsive-design)
- [User Flows](#user-flows)
- [Installation & Deployment](#installation--deployment)
  - [Requirements](#requirements)
  - [Setup Instructions](#setup-instructions)
  - [Deployment](#deployment)
- [Performance Optimizations](#performance-optimizations)
- [Extensibility](#extensibility)
- [Accessibility Considerations](#accessibility-considerations)
- [Future Development Roadmap](#future-development-roadmap)
- [Contact & Support](#contact--support)
- [Developer Documentation](#developer-documentation)
  - [Component API Reference](#component-api-reference)
  - [State Management](#state-management)
  - [Custom Directives](#custom-directives)
  - [Build & Deploy Workflow](#build--deploy-workflow)
  - [Code Style Guide](#code-style-guide)

## Project Overview

**Lienzo de Plata** is a responsive web application built on Nuxt.js that serves as a platform for a non-profit organization dedicated to helping elderly people. The platform facilitates donations, volunteer registrations, and community engagement through an intuitive interface.

![Lienzo de Plata](https://i.imgur.com/example.jpg)

## Core Technologies

- **Framework**: Nuxt.js 2.15.7 (Vue.js-based framework)
- **UI Components**: Custom Vue components
- **Styling**: CSS/SCSS with Bootstrap 5.1.3
- **Animations**: Vue WOW, Vue Ellipse Progress
- **Sliders/Carousels**: Swiper, Vue Awesome Swiper, Vue Tiny Slider
- **Media**: Jarallax for parallax effects
- **Responsiveness**: Mobile-first approach with adaptive layouts

## Key Features

1. **Donation Platform**: Secure donation flow with campaign support
2. **Volunteer Registration**: Online application process for potential volunteers
3. **News & Updates**: Blog functionality for organization announcements
4. **Cause Campaigns**: Highlighted fundraising initiatives with progress tracking
5. **Photo Gallery**: Visual showcase of organization activities
6. **Online Store**: Basic e-commerce functionality
7. **Contact System**: Integrated contact forms with location map
8. **Responsive Design**: Fully responsive across all device sizes

## Architecture

The application follows the Nuxt.js architecture with:

- **Pages**: Route-based Vue components (representing full pages)
- **Components**: Reusable UI elements (cards, sections, forms, etc.)
- **Layouts**: Page templates with shared elements
- **Data**: JSON configuration for content management
- **Assets**: Images, fonts, and styles
- **Store**: Vuex state management

## Page Structure

| Page | Description | Key Components |
|------|-------------|----------------|
| Home | Landing page with slider and key sections | MainSliderOne, AboutTwo, CausesCarousel, ContactHome |
| About | Organization information | AboutOne, FunfactOne, VolunteerAbout |
| Causes | Fundraising campaigns | CausesGrid |
| Contact | Contact information and form | ContactPageForm, GoogleMap |
| Become Volunteer | Volunteer application | BecomeVolunteerForm |
| News | Blog and updates | NewsGrid |
| News Details | Single article view | NewsSingle |
| Gallery | Photo showcase | GalleryGrid |
| Volunteers | Team showcase | VolunteerGrid |
| Store | E-commerce functionality | ProductCardTwo |

## Component Hierarchy

The application utilizes a modular component architecture:

```
Page Components
├── Layout Components (Header, Footer)
├── Section Components (About, Causes, etc.)
│   ├── UI Components (Cards, Buttons)
│   └── Form Components
└── Utility Components (Search, Mobile Navigation)
```

## Data Management

Content is primarily managed through a structured JSON data file (`data/data.json`), which includes:

- Navigation menus
- Slider content
- Campaign information
- Volunteer profiles
- Gallery images
- News articles
- Call-to-action blocks

This approach allows for easy content updates without code changes.

## Responsive Design

The application employs a mobile-first responsive design approach with:

- Fluid grid layouts
- Responsive images and media
- Adaptive navigation (mobile drawer for small screens)
- Bootstrap breakpoints for consistent responsive behavior

## User Flows

### Donation Flow
1. User browses causes on homepage or causes page
2. Selects a specific cause to support
3. Views detailed information about the cause
4. Completes donation form
5. Receives confirmation of donation

### Volunteer Registration
1. User navigates to "Become Volunteer" page
2. Reviews volunteer requirements
3. Completes registration form with personal information
4. Submits application
5. Receives acknowledgment of submission

## Installation & Deployment

### Requirements
- Node.js (12.x or higher)
- npm or yarn

### Setup Instructions

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd lienzo-de-plata

# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build
yarn generate
```

### Deployment

The application can be deployed as a static site to services like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## Performance Optimizations

1. **Lazy Loading**: Components loaded only when needed
2. **Client-Only Components**: Heavy components rendered only on client
3. **Image Optimization**: Proper sizing and compression
4. **Code Splitting**: Automatic chunk splitting by Nuxt.js

## Extensibility

The modular architecture allows for easy extension through:

1. **Adding New Pages**: Create new .vue files in the pages directory
2. **Extending Components**: Build on existing components or create new ones
3. **Content Updates**: Modify data.json file for content changes
4. **Style Customization**: Modify CSS variables for theming

## Accessibility Considerations

- Semantic HTML structure
- ARIA attributes where appropriate
- Keyboard navigation support
- Screen reader friendly content
- Sufficient color contrast

## Future Development Roadmap

1. **Enhanced Donation System**: Integration with payment processors
2. **User Accounts**: Personal dashboards for donors and volunteers
3. **Event Management**: Calendar and registration for events
4. **Multilingual Support**: Content in multiple languages
5. **Advanced Analytics**: Detailed reporting on donations and engagement

## Contact & Support

For technical support or inquiries about this project:

- **Email**: lienzodeplata@company.com
- **Phone**: 310 123 0000
- **GitHub**: [Repository Link]

---

## Developer Documentation

### Component API Reference

#### Key Components

**MainSliderOne**
- Purpose: Hero slider for homepage
- Props: None (uses data from data.json)
- Events: None
- Dependencies: Swiper, MainSliderCounter

**CausesCard**
- Purpose: Display individual cause/campaign
- Props: 
  - title: String
  - amount: Object {raised, goal}
  - category: String
  - thumbnail: String
  - excerpt: String
  - url: String
- Events: None
- Dependencies: Vue-Count-To, ObserveVisibility

**ContactForm**
- Purpose: Reusable contact form
- Props: None
- Events: form-submit
- Dependencies: None

### State Management

The application uses Vuex for managing:
- Mobile drawer state
- Search popup state
- User preferences

### Custom Directives

- **v-observe-visibility**: Used for triggering animations when elements enter viewport

### Build & Deploy Workflow

1. Development in local environment
2. Testing across devices
3. Build for production
4. Static site generation
5. Deployment to hosting

### Code Style Guide

- Component names: PascalCase
- Props: camelCase
- CSS classes: kebab-case
- Component structure: template, script, style
