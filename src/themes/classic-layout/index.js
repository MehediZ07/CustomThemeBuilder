import { ClassicHeader } from './components/Header.jsx';
import { ClassicFooter } from './components/Footer.jsx';
import { ClassicHeroSection } from './components/HeroSection.jsx';
import { ClassicCollectionsSection } from './components/CollectionsSection.jsx';
import { ClassicItemsSection } from './components/ItemsSection.jsx';
import { ClassicBundleSection } from './components/BundleSection.jsx';
import { ClassicSubscriptionSection } from './components/SubscriptionSection.jsx';

export const classicLayoutTheme = {
  id: 'classic-layout',
  name: 'Classic Layout',
  description: 'Traditional, elegant layout design',
  category: 'ecommerce',
  
  // Default configuration
  defaultConfig: {
    // Colors
    primaryColor: '#2563eb',
    secondaryColor: '#64748b',
    backgroundColor: '#f8fafc',
    surfaceColor: '#ffffff',
    textColor: '#1e293b',
    textSecondary: '#64748b',
    borderColor: '#e2e8f0',
    
    // Typography
    fontFamily: 'Georgia',
    baseFontSize: '16px',
    lineHeight: '1.6',
    fontWeight: '400',
    
    // Spacing & Layout
    borderRadius: '4px',
    containerPadding: '20px',
    sectionSpacing: '56px',
    cardSpacing: '28px',
    
    // Buttons
    buttonPrimaryBg: '#2563eb',
    buttonPrimaryText: '#ffffff',
    buttonSecondaryBg: '#f1f5f9',
    buttonSecondaryText: '#334155',
    buttonBorderRadius: '4px',
    buttonSize: 'large',
    
    // Sections
    heroImage: 'https://daujxgrs0jsvx.cloudfront.net/media/Banner (1)_25XIYcj.jpg',
    heroTitle: 'PREMIUM DESIGN COLLECTIONS',
    heroSubtitle: 'Elegant and timeless design resources for professionals',
    heroOverlay: '#1e293b',
    heroOverlayOpacity: '0.5',
    
    // Items Section
    itemsPerRow: '3',
    itemsBackground: '#f8fafc',
    itemCardBg: '#ffffff',
    itemCardRadius: '4px',
    
    // Effects
    cardShadow: 'large',
    buttonShadow: 'medium',
    transitionSpeed: 'medium',
    hoverEffects: 'enabled',
    
    // Legacy
    cardSize: 'large'
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
    Header: ClassicHeader,
    Footer: ClassicFooter,
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