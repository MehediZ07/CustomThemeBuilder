// Theme Registry - Central theme management system
import { modernGridTheme } from './modern-grid/index.js';
import { classicLayoutTheme } from './classic-layout/index.js';

export const themeRegistry = {
  'modern-grid': modernGridTheme,
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