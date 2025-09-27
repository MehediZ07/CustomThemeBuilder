import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { ClassicHeroSection } from './components/HeroSection.jsx';
import { ClassicCollectionsSection } from './components/CollectionsSection.jsx';
import { ClassicItemsSection } from './components/ItemsSection.jsx';
import { ClassicBundleSection } from './components/BundleSection.jsx';
import { ClassicSubscriptionSection } from './components/SubscriptionSection.jsx';

export const modernGridTheme = {
  id: 'modern-grid',
  name: 'Modern Grid',
  description: 'Traditional, elegant layout design',
  category: 'ecommerce',
  
  defaultConfig: {
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      accent: '#f59e0b',
      background: '#f8fafc',
      surface: '#ffffff',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0'
    },
    typography: {
      fontFamily: 'Georgia, serif',
      headingFont: 'Georgia, serif',
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem'
      }
    },
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4rem'
    },
    layout: {
      maxWidth: '1200px',
      containerPadding: '1rem'
    },
    // Sidebar compatibility
    primaryColor: '#2563eb',
    secondaryColor: '#64748b',
    backgroundColor: '#f8fafc',
    surfaceColor: '#ffffff',
    textColor: '#1e293b',
    textSecondary: '#64748b',
    borderColor: '#e2e8f0',
    borderRadius: '4px',
    fontFamily: 'Georgia',
    baseFontSize: '16px',
    buttonPrimaryBg: '#2563eb',
    buttonPrimaryText: '#ffffff',
    buttonSecondaryBg: '#f1f5f9',
    buttonSecondaryText: '#334155',
    buttonBorderRadius: '4px',
    heroImage: 'https://daujxgrs0jsvx.cloudfront.net/media/Banner (1)_25XIYcj.jpg',
    heroTitle: 'PREMIUM DESIGN COLLECTIONS',
    heroSubtitle: 'Elegant and timeless design resources for professionals',
    heroOverlay: '#1e293b',
    heroOverlayOpacity: '0.5',
    itemsPerRow: '3',
    cardShadow: 'large',
    buttonShadow: 'medium',
    transitionSpeed: 'medium',
    hoverEffects: 'enabled'
  },

  // Section configuration (different order than modern)
  sections: [
    { id: 'hero', type: 'hero', order: 0, required: true },
    { id: 'items', type: 'items', order: 1, required: false },
    { id: 'bundles', type: 'bundles', order: 2, required: false },
    { id: 'collections', type: 'collections', order: 3, required: false },
    { id: 'subscription', type: 'subscription', order: 4, required: false }
  ],

  // Theme-specific components
  components: {
    Header: Header,
    Footer: Footer,
    sections: {
      hero: ClassicHeroSection,
      collections: ClassicCollectionsSection,
      items: ClassicItemsSection,
      bundles: ClassicBundleSection,
      subscription: ClassicSubscriptionSection
    }
  },

  // Customization options
  customization: {
    colors: ['primaryColor', 'backgroundColor', 'textColor'],
    typography: ['fontFamily'],
    layout: ['borderRadius', 'cardSize'],
    hero: ['heroImage', 'heroTitle']
  }
};