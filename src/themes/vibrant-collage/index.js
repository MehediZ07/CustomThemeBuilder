import { VibrantHeader } from './components/Header.jsx';
import { VibrantFooter } from './components/Footer.jsx';
import { VibrantHeroSection } from './components/HeroSection.jsx';
import { VibrantCollectionsSection } from './components/CollectionsSection.jsx';
import { VibrantItemsSection } from './components/ItemsSection.jsx';
import { VibrantBundleSection } from './components/BundleSection.jsx';
import { VibrantSubscriptionSection } from './components/SubscriptionSection.jsx';

export const vibrantCollageTheme = {
  id: 'vibrant-collage',
  name: 'Vibrant Collage',
  description: 'Colorful, creative collage-style layout with vibrant design elements',
  category: 'ecommerce',
  
  // Default configuration
  defaultConfig: {
    // Colors
    primaryColor: '#8b5cf6',
    secondaryColor: '#f59e0b',
    backgroundColor: '#ffffff',
    surfaceColor: '#f8fafc',
    textColor: '#1f2937',
    textSecondary: '#6b7280',
    borderColor: '#e5e7eb',
    
    // Typography
    fontFamily: 'Inter',
    baseFontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '400',
    
    // Spacing & Layout
    borderRadius: '12px',
    containerPadding: '16px',
    sectionSpacing: '48px',
    cardSpacing: '20px',
    
    // Buttons
    buttonPrimaryBg: '#8b5cf6',
    buttonPrimaryText: '#ffffff',
    buttonSecondaryBg: '#f3f4f6',
    buttonSecondaryText: '#374151',
    buttonBorderRadius: '12px',
    buttonSize: 'medium',
    
    // Sections
    heroImage: 'https://daujxgrs0jsvx.cloudfront.net/media/Banner (1)_25XIYcj.jpg',
    heroTitle: 'UNLIMITED CREATIVITY AT YOUR FINGERTIPS!',
    heroSubtitle: 'Discover thousands of premium design resources',
    heroOverlay: '#000000',
    heroOverlayOpacity: '0.3',
    
    // Items Section
    itemsPerRow: '4',
    itemsBackground: '#ffffff',
    itemCardBg: '#ffffff',
    itemCardRadius: '12px',
    
    // Effects
    cardShadow: 'medium',
    buttonShadow: 'small',
    transitionSpeed: 'medium',
    hoverEffects: 'enabled',
    
    // Legacy
    cardSize: 'medium'
  },

  // Section configuration
  sections: [
    { id: 'hero', type: 'hero', order: 0, required: true },
    { id: 'collections', type: 'collections', order: 1, required: false },
    { id: 'items', type: 'items', order: 2, required: false },
    { id: 'bundles', type: 'bundles', order: 3, required: false },
    { id: 'subscription', type: 'subscription', order: 4, required: false }
  ],

  // Theme-specific components
  components: {
    Header: VibrantHeader,
    Footer: VibrantFooter,
    sections: {
      hero: VibrantHeroSection,
      collections: VibrantCollectionsSection,
      items: VibrantItemsSection,
      bundles: VibrantBundleSection,
      subscription: VibrantSubscriptionSection
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