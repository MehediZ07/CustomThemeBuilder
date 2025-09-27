import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Items from './components/Items';
import Bundle from './components/Bundle';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

export const designpullerTheme = {
  id: 'designpuller',
  name: 'DesignPuller',
  description: 'Professional design marketplace theme with dark styling',
  components: {
    Header,
    Footer,
    sections: {
      hero: Hero,
      collections: Collections,
      items: Items,
      bundles: Bundle,
      subscription: Subscription
    }
  },
  sections: [
    { id: 'hero', type: 'hero', order: 0 },
    { id: 'collections', type: 'collections', order: 1 },
    { id: 'items', type: 'items', order: 2 },
    { id: 'bundles', type: 'bundles', order: 3 },
    { id: 'subscription', type: 'subscription', order: 4 }
  ],
  defaultConfig: {
    colors: {
      primary: '#8B5CF6',
      secondary: '#A855F7',
      accent: '#FBBF24',
      background: '#0E0E0E',
      surface: '#1A1A1A',
      text: '#FFFFFF',
      textSecondary: '#D1D5DB',
      border: '#374151'
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
      headingFont: 'Inter, system-ui, sans-serif',
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
    borderRadius: '8px',
    fontFamily: 'Inter',
    baseFontSize: '16px',
    buttonPrimaryBg: '#8B5CF6',
    buttonPrimaryText: '#FFFFFF',
    buttonSecondaryBg: '#374151',
    buttonSecondaryText: '#D1D5DB',
    buttonBorderRadius: '8px',
    heroImage: 'https://daujxgrs0jsvx.cloudfront.net/media/Background.png',
    heroTitle: '#1 DESIGN LIBRARY',
    heroSubtitle: 'Perfect for POD, Craft & More',
    heroOverlay: '#000000',
    heroOverlayOpacity: '0.6',
    itemsPerRow: '4',
    cardShadow: 'medium',
    buttonShadow: 'small',
    transitionSpeed: 'medium',
    hoverEffects: 'enabled'
  }
};