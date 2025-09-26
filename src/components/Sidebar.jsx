import React from 'react';

const Sidebar = ({ styles, setStyles, selectedTheme, setSelectedTheme, setSections, themes, setIsPreview }) => {
  const handleStyleChange = (key, value) => {
    setStyles(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-80 bg-white shadow-lg p-6 overflow-auto">
      <div className="mb-6">
        <button 
          onClick={() => setIsPreview(true)}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mb-4"
        >
          Preview
        </button>
      </div>
      
      <h2 className="text-xl font-bold mb-6">Theme Settings</h2>
      
      {/* Theme Selection */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Theme</h3>
        <select 
          value={selectedTheme.id} 
          onChange={(e) => {
            const theme = themes.find(t => t.id === parseInt(e.target.value));
            setSelectedTheme(theme);
            setSections(theme.sections);
          }}
          className="w-full px-3 py-2 border rounded"
        >
          {themes.map(theme => (
            <option key={theme.id} value={theme.id}>{theme.name}</option>
          ))}
        </select>
      </div>
      
      <div className="space-y-6">
        {/* Colors */}
        <div>
          <h3 className="font-semibold mb-3">Colors</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Primary Color</label>
              <input
                type="color"
                value={styles.primaryColor}
                onChange={(e) => handleStyleChange('primaryColor', e.target.value)}
                className="w-full h-10 rounded border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Background Color</label>
              <input
                type="color"
                value={styles.backgroundColor}
                onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                className="w-full h-10 rounded border"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Text Color</label>
              <input
                type="color"
                value={styles.textColor}
                onChange={(e) => handleStyleChange('textColor', e.target.value)}
                className="w-full h-10 rounded border"
              />
            </div>
          </div>
        </div>

        {/* Typography */}
        <div>
          <h3 className="font-semibold mb-3">Typography</h3>
          <div>
            <label className="block text-sm font-medium mb-1">Font Family</label>
            <select
              value={styles.fontFamily}
              onChange={(e) => handleStyleChange('fontFamily', e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="Inter">Inter</option>
              <option value="Arial">Arial</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Helvetica">Helvetica</option>
            </select>
          </div>
        </div>

        {/* Hero Section */}
        <div>
          <h3 className="font-semibold mb-3">Hero Section</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Hero Title</label>
              <input
                type="text"
                value={styles.heroTitle}
                onChange={(e) => handleStyleChange('heroTitle', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter hero title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hero Background Image URL</label>
              <input
                type="url"
                value={styles.heroImage}
                onChange={(e) => handleStyleChange('heroImage', e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter image URL"
              />
            </div>
          </div>
        </div>

        {/* Layout */}
        <div>
          <h3 className="font-semibold mb-3">Layout</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Border Radius</label>
              <select
                value={styles.borderRadius}
                onChange={(e) => handleStyleChange('borderRadius', e.target.value)}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="0px">None</option>
                <option value="4px">Small</option>
                <option value="8px">Medium</option>
                <option value="16px">Large</option>
                <option value="24px">Extra Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Card Size</label>
              <select
                value={styles.cardSize}
                onChange={(e) => handleStyleChange('cardSize', e.target.value)}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div>
          <h3 className="font-semibold mb-3">Preview</h3>
          <div 
            className="p-4 border-2 border-dashed border-gray-300"
            style={{ 
              backgroundColor: styles.backgroundColor,
              borderRadius: styles.borderRadius
            }}
          >
            <h4 
              className="font-semibold mb-2"
              style={{ 
                color: styles.textColor,
                fontFamily: styles.fontFamily
              }}
            >
              Sample Text
            </h4>
            <button 
              className="px-4 py-2 text-white text-sm"
              style={{ 
                backgroundColor: styles.primaryColor,
                borderRadius: styles.borderRadius
              }}
            >
              Sample Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;