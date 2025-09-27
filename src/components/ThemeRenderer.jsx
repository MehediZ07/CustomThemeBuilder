import React from 'react';
import { getTheme } from '../themes';

const ThemeRenderer = ({ themeId, config, data, sections, isPreview = false, sectionOnly = false }) => {
  const theme = getTheme(themeId);
  const { Header, Footer, sections: sectionComponents } = theme.components;

  const renderSection = (section) => {
    const SectionComponent = sectionComponents[section.type];
    if (!SectionComponent) {
      console.warn(`Section component "${section.type}" not found for theme "${themeId}"`);
      return null;
    }
    return <SectionComponent key={section.id} config={config} data={data} />;
  };

  // For individual section rendering in editor
  if (sectionOnly) {
    return (
      <div>
        {sections.map(renderSection)}
      </div>
    );
  }

  if (isPreview) {
    return (
      <div className="bg-black min-h-screen">
        <div className="bg-white">
          <Header config={config} />
          {sections.map(renderSection)}
          <Footer config={config} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header config={config} />
      {sections.map(renderSection)}
      <Footer config={config} />
    </div>
  );
};

export default ThemeRenderer;