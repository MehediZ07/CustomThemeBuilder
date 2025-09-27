import { ModernHeader } from './components/Header.jsx';
import { ModernFooter } from './components/Footer.jsx';
import { ModernHeroSection } from './components/HeroSection.jsx';
import { ModernCollectionsSection } from './components/CollectionsSection.jsx';
import { ModernItemsSection } from './components/ItemsSection.jsx';
import { ModernBundleSection } from './components/BundleSection.jsx';
import { ModernSubscriptionSection } from './components/SubscriptionSection.jsx';

export const sellzzyTheme = {
  id: 'sellzzy',
  name: 'Sellzzy',
  description: 'Clean, modern grid-based layout',
  category: 'ecommerce',
  
  // Default configuration
  defaultConfig: {
    // Colors
    primaryColor: '#3b82f6',
    secondaryColor: '#6b7280',
    backgroundColor: '#ffffff',
    surfaceColor: '#f9fafb',
    textColor: '#1f2937',
    textSecondary: '#6b7280',
    borderColor: '#e5e7eb',
    
    // Typography
    fontFamily: 'Inter',
    baseFontSize: '16px',
    lineHeight: '1.5',
    fontWeight: '400',
    
    // Spacing & Layout
    borderRadius: '8px',
    containerPadding: '16px',
    sectionSpacing: '48px',
    cardSpacing: '24px',
    
    // Buttons
    buttonPrimaryBg: '#3b82f6',
    buttonPrimaryText: '#ffffff',
    buttonSecondaryBg: '#f3f4f6',
    buttonSecondaryText: '#374151',
    buttonBorderRadius: '8px',
    buttonSize: 'medium',
    
    // Sections
    heroImage: 'https://daujxgrs0jsvx.cloudfront.net/media/Banner (1)_25XIYcj.jpg',
    heroTitle: 'UNLIMITED CREATIVITY AT YOUR FINGERTIPS!',
    heroSubtitle: 'Discover premium design resources, bundles, and creative assets',
    heroOverlay: '#000000',
    heroOverlayOpacity: '0.4',
    
    // Items Section
    itemsPerRow: '4',
    itemsBackground: '#f9fafb',
    itemCardBg: '#ffffff',
    itemCardRadius: '8px',
    
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
    Header: ModernHeader,
    Footer: ModernFooter,
    sections: {
      hero: ModernHeroSection,
      collections: ModernCollectionsSection,
      items: ModernItemsSection,
      bundles: ModernBundleSection,
      subscription: ModernSubscriptionSection
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