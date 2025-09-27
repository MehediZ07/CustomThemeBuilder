// Theme Registry - Central theme management system
import { sellzzyTheme } from './sellzzy/index.js';
import { modernGridTheme } from './modern-grid/index.js';
import { classicLayoutTheme } from './classic-layout/index.js';
import { vibrantCollageTheme } from './vibrant-collage/index.js';
import { designpullerTheme } from './designpuller/index.js';

export const themeRegistry = {
  'sellzzy': sellzzyTheme,
  'designpuller': designpullerTheme,
  'modern-grid': modernGridTheme,
  'vibrant-collage': vibrantCollageTheme,
  'classic-layout': classicLayoutTheme,
};

export const getTheme = (themeId) => {
  const theme = themeRegistry[themeId];
  if (!theme) {
    console.warn(`Theme "${themeId}" not found, falling back to modern-grid`);
    return themeRegistry['modern-grid'];
  }
  return theme;
};

export const getAllThemes = () => {
  return Object.values(themeRegistry);
};

export const getThemeIds = () => {
  return Object.keys(themeRegistry);
};