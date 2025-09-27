import React, { useState } from 'react';

const Sidebar = ({ config, setConfig, selectedTheme, onThemeChange, themes, setIsPreview }) => {
  const [activeTab, setActiveTab] = useState('global');
  const [expandedSections, setExpandedSections] = useState({ 
    colors: true, 
    typography: false, 
    spacing: false, 
    buttons: false,
    hero: false,
    items: false,
    shadows: false,
    animation: false
  });

  const handleConfigChange = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const ColorPicker = ({ label, value, onChange, description }) => (
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
      <div className="flex items-center space-x-2">
        <input
          type="color"
          value={value || '#000000'}
          onChange={(e) => onChange(e.target.value)}
          className="w-7 h-7 rounded border border-gray-300 cursor-pointer"
        />
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
          placeholder="#000000"
        />
      </div>
      {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
    </div>
  );

  const SliderInput = ({ label, value, onChange, min, max, step = 1, unit = 'px' }) => {
    const numValue = parseFloat(value) || min;
    return (
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <label className="text-xs font-medium text-gray-600">{label}</label>
          <span className="text-xs text-gray-500">{numValue}{unit}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={numValue}
          onChange={(e) => onChange(unit ? `${e.target.value}${unit}` : e.target.value)}
          className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
    );
  };

  const SelectInput = ({ label, value, onChange, options, description }) => (
    <div className="mb-3">
      <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
      <select
        value={value || options[0]?.value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:border-blue-500 focus:outline-none bg-white"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
    </div>
  );

  const SectionHeader = ({ title, isExpanded, onToggle }) => (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full py-2 px-3 bg-gray-50 hover:bg-gray-100 rounded-md mb-2 transition-colors"
    >
      <span className="text-sm font-medium text-gray-700">{title}</span>
      <svg
        className={`w-3 h-3 transition-transform text-gray-500 ${isExpanded ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  return (
    <div className="w-96 bg-white shadow-xl border-l border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <button 
          onClick={() => setIsPreview(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors mb-3"
        >
          Preview Theme
        </button>
        
        {/* Theme Selection */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Active Theme</label>
          <select 
            value={selectedTheme.id} 
            onChange={(e) => onThemeChange(e.target.value)}
            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:border-blue-500 focus:outline-none bg-white"
          >
            {themes.map(theme => (
              <option key={theme.id} value={theme.id}>{theme.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {[
          { id: 'global', label: 'Global' },
          { id: 'sections', label: 'Sections' },
          { id: 'advanced', label: 'Advanced' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-3 text-xs font-medium transition-colors ${
              activeTab === tab.id 
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {activeTab === 'global' && (
          <div className="space-y-4">
            {/* Colors Section */}
            <div>
              <SectionHeader 
                title="Colors" 
                isExpanded={expandedSections.colors} 
                onToggle={() => toggleSection('colors')}
              />
              {expandedSections.colors && (
                <div className="pl-2">
                  <ColorPicker
                    label="Primary Color"
                    value={config.colors?.primary || config.primaryColor || '#3b82f6'}
                    onChange={(value) => {
                      if (config.colors) {
                        setConfig(prev => ({ ...prev, colors: { ...prev.colors, primary: value } }));
                      } else {
                        handleConfigChange('primaryColor', value);
                      }
                    }}
                    description="Main brand color for buttons and accents"
                  />
                  <ColorPicker
                    label="Secondary Color"
                    value={config.colors?.secondary || config.secondaryColor || '#6b7280'}
                    onChange={(value) => {
                      if (config.colors) {
                        setConfig(prev => ({ ...prev, colors: { ...prev.colors, secondary: value } }));
                      } else {
                        handleConfigChange('secondaryColor', value);
                      }
                    }}
                    description="Secondary buttons and elements"
                  />
                  <ColorPicker
                    label="Background Color"
                    value={config.colors?.background || config.backgroundColor || '#ffffff'}
                    onChange={(value) => {
                      if (config.colors) {
                        setConfig(prev => ({ ...prev, colors: { ...prev.colors, background: value } }));
                      } else {
                        handleConfigChange('backgroundColor', value);
                      }
                    }}
                    description="Main page background"
                  />
                  <ColorPicker
                    label="Surface Color"
                    value={config.colors?.surface || config.surfaceColor || '#f9fafb'}
                    onChange={(value) => {
                      if (config.colors) {
                        setConfig(prev => ({ ...prev, colors: { ...prev.colors, surface: value } }));
                      } else {
                        handleConfigChange('surfaceColor', value);
                      }
                    }}
                    description="Cards and elevated surfaces"
                  />
                  <ColorPicker
                    label="Text Primary"
                    value={config.colors?.text || config.textColor || '#1f2937'}
                    onChange={(value) => {
                      if (config.colors) {
                        setConfig(prev => ({ ...prev, colors: { ...prev.colors, text: value } }));
                      } else {
                        handleConfigChange('textColor', value);
                      }
                    }}
                    description="Main text color"
                  />
                  <ColorPicker
                    label="Text Secondary"
                    value={config.colors?.textSecondary || config.textSecondary || '#6b7280'}
                    onChange={(value) => {
                      if (config.colors) {
                        setConfig(prev => ({ ...prev, colors: { ...prev.colors, textSecondary: value } }));
                      } else {
                        handleConfigChange('textSecondary', value);
                      }
                    }}
                    description="Secondary text and descriptions"
                  />
                  <ColorPicker
                    label="Border Color"
                    value={config.colors?.border || config.borderColor || '#e5e7eb'}
                    onChange={(value) => {
                      if (config.colors) {
                        setConfig(prev => ({ ...prev, colors: { ...prev.colors, border: value } }));
                      } else {
                        handleConfigChange('borderColor', value);
                      }
                    }}
                    description="Borders and dividers"
                  />
                </div>
              )}
            </div>

            {/* Typography Section */}
            <div>
              <SectionHeader 
                title="Typography" 
                isExpanded={expandedSections.typography} 
                onToggle={() => toggleSection('typography')}
              />
              {expandedSections.typography && (
                <div className="pl-2">
                  <SelectInput
                    label="Font Family"
                    value={config.fontFamily || 'Inter'}
                    onChange={(value) => handleConfigChange('fontFamily', value)}
                    options={[
                      { value: 'Inter', label: 'Inter (Modern)' },
                      { value: 'Arial', label: 'Arial (Sans-serif)' },
                      { value: 'Georgia', label: 'Georgia (Serif)' },
                      { value: 'Times New Roman', label: 'Times New Roman' },
                      { value: 'Helvetica', label: 'Helvetica' },
                      { value: 'Roboto', label: 'Roboto' },
                      { value: 'Open Sans', label: 'Open Sans' }
                    ]}
                  />
                  <SliderInput
                    label="Base Font Size"
                    value={config.baseFontSize || '16px'}
                    onChange={(value) => handleConfigChange('baseFontSize', value)}
                    min={12}
                    max={24}
                    unit="px"
                  />
                  <SliderInput
                    label="Line Height"
                    value={config.lineHeight || '1.5'}
                    onChange={(value) => handleConfigChange('lineHeight', value)}
                    min={1}
                    max={2}
                    step={0.1}
                    unit=""
                  />
                  <SelectInput
                    label="Font Weight"
                    value={config.fontWeight || '400'}
                    onChange={(value) => handleConfigChange('fontWeight', value)}
                    options={[
                      { value: '300', label: 'Light (300)' },
                      { value: '400', label: 'Regular (400)' },
                      { value: '500', label: 'Medium (500)' },
                      { value: '600', label: 'Semibold (600)' },
                      { value: '700', label: 'Bold (700)' }
                    ]}
                  />
                </div>
              )}
            </div>

            {/* Spacing & Layout */}
            <div>
              <SectionHeader 
                title="Spacing & Layout" 
                isExpanded={expandedSections.spacing} 
                onToggle={() => toggleSection('spacing')}
              />
              {expandedSections.spacing && (
                <div className="pl-2">
                  <SliderInput
                    label="Border Radius"
                    value={config.borderRadius || '8px'}
                    onChange={(value) => handleConfigChange('borderRadius', value)}
                    min={0}
                    max={32}
                    unit="px"
                  />
                  <SliderInput
                    label="Container Padding"
                    value={config.containerPadding || '16px'}
                    onChange={(value) => handleConfigChange('containerPadding', value)}
                    min={8}
                    max={48}
                    unit="px"
                  />
                  <SliderInput
                    label="Section Spacing"
                    value={config.sectionSpacing || '48px'}
                    onChange={(value) => handleConfigChange('sectionSpacing', value)}
                    min={24}
                    max={96}
                    unit="px"
                  />
                  <SliderInput
                    label="Card Spacing"
                    value={config.cardSpacing || '24px'}
                    onChange={(value) => handleConfigChange('cardSpacing', value)}
                    min={8}
                    max={48}
                    unit="px"
                  />
                </div>
              )}
            </div>

            {/* Buttons */}
            <div>
              <SectionHeader 
                title="Buttons" 
                isExpanded={expandedSections.buttons} 
                onToggle={() => toggleSection('buttons')}
              />
              {expandedSections.buttons && (
                <div className="pl-2">
                  <ColorPicker
                    label="Primary Button Color"
                    value={config.buttonPrimaryBg || config.primaryColor || '#3b82f6'}
                    onChange={(value) => handleConfigChange('buttonPrimaryBg', value)}
                  />
                  <ColorPicker
                    label="Primary Button Text"
                    value={config.buttonPrimaryText || '#ffffff'}
                    onChange={(value) => handleConfigChange('buttonPrimaryText', value)}
                  />
                  <ColorPicker
                    label="Secondary Button Color"
                    value={config.buttonSecondaryBg || '#f3f4f6'}
                    onChange={(value) => handleConfigChange('buttonSecondaryBg', value)}
                  />
                  <ColorPicker
                    label="Secondary Button Text"
                    value={config.buttonSecondaryText || '#374151'}
                    onChange={(value) => handleConfigChange('buttonSecondaryText', value)}
                  />
                  <SliderInput
                    label="Button Border Radius"
                    value={config.buttonBorderRadius || config.borderRadius || '8px'}
                    onChange={(value) => handleConfigChange('buttonBorderRadius', value)}
                    min={0}
                    max={32}
                    unit="px"
                  />
                  <SelectInput
                    label="Button Size"
                    value={config.buttonSize || 'medium'}
                    onChange={(value) => handleConfigChange('buttonSize', value)}
                    options={[
                      { value: 'small', label: 'Small' },
                      { value: 'medium', label: 'Medium' },
                      { value: 'large', label: 'Large' }
                    ]}
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'sections' && (
          <div className="space-y-4">
            {/* Hero Section */}
            <div>
              <SectionHeader 
                title="Hero Section" 
                isExpanded={expandedSections.hero} 
                onToggle={() => toggleSection('hero')}
              />
              {expandedSections.hero && (
                <div className="pl-2">
                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Hero Title</label>
                    <input
                      type="text"
                      value={config.heroTitle || ''}
                      onChange={(e) => handleConfigChange('heroTitle', e.target.value)}
                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                      placeholder="Enter hero title"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Hero Subtitle</label>
                    <textarea
                      value={config.heroSubtitle || ''}
                      onChange={(e) => handleConfigChange('heroSubtitle', e.target.value)}
                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded h-16 resize-none focus:border-blue-500 focus:outline-none"
                      placeholder="Enter hero subtitle"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-xs font-medium text-gray-600 mb-1">Background Image URL</label>
                    <input
                      type="url"
                      value={config.heroImage || ''}
                      onChange={(e) => handleConfigChange('heroImage', e.target.value)}
                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                      placeholder="Enter image URL"
                    />
                  </div>
                  <ColorPicker
                    label="Hero Overlay Color"
                    value={config.heroOverlay || '#000000'}
                    onChange={(value) => handleConfigChange('heroOverlay', value)}
                  />
                  <SliderInput
                    label="Overlay Opacity"
                    value={config.heroOverlayOpacity || '0.4'}
                    onChange={(value) => handleConfigChange('heroOverlayOpacity', value)}
                    min={0}
                    max={1}
                    step={0.1}
                    unit=""
                  />
                </div>
              )}
            </div>

            {/* Items Section */}
            <div>
              <SectionHeader 
                title="Items Section" 
                isExpanded={expandedSections.items} 
                onToggle={() => toggleSection('items')}
              />
              {expandedSections.items && (
                <div className="pl-2">
                  <SelectInput
                    label="Items Per Row"
                    value={config.itemsPerRow || '4'}
                    onChange={(value) => handleConfigChange('itemsPerRow', value)}
                    options={[
                      { value: '2', label: '2 Items' },
                      { value: '3', label: '3 Items' },
                      { value: '4', label: '4 Items' },
                      { value: '5', label: '5 Items' },
                      { value: '6', label: '6 Items' }
                    ]}
                  />
                  <ColorPicker
                    label="Items Background"
                    value={config.itemsBackground || '#f9fafb'}
                    onChange={(value) => handleConfigChange('itemsBackground', value)}
                  />
                  <ColorPicker
                    label="Item Card Background"
                    value={config.itemCardBg || '#ffffff'}
                    onChange={(value) => handleConfigChange('itemCardBg', value)}
                  />
                  <SliderInput
                    label="Item Card Border Radius"
                    value={config.itemCardRadius || config.borderRadius || '8px'}
                    onChange={(value) => handleConfigChange('itemCardRadius', value)}
                    min={0}
                    max={24}
                    unit="px"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'advanced' && (
          <div className="space-y-4">
            {/* Shadows */}
            <div>
              <SectionHeader 
                title="Shadows & Effects" 
                isExpanded={expandedSections.shadows} 
                onToggle={() => toggleSection('shadows')}
              />
              {expandedSections.shadows && (
                <div className="pl-2">
                  <SelectInput
                    label="Card Shadow"
                    value={config.cardShadow || 'medium'}
                    onChange={(value) => handleConfigChange('cardShadow', value)}
                    options={[
                      { value: 'none', label: 'None' },
                      { value: 'small', label: 'Small' },
                      { value: 'medium', label: 'Medium' },
                      { value: 'large', label: 'Large' },
                      { value: 'xl', label: 'Extra Large' }
                    ]}
                  />
                  <SelectInput
                    label="Button Shadow"
                    value={config.buttonShadow || 'small'}
                    onChange={(value) => handleConfigChange('buttonShadow', value)}
                    options={[
                      { value: 'none', label: 'None' },
                      { value: 'small', label: 'Small' },
                      { value: 'medium', label: 'Medium' },
                      { value: 'large', label: 'Large' }
                    ]}
                  />
                </div>
              )}
            </div>

            {/* Animation */}
            <div>
              <SectionHeader 
                title="Animation" 
                isExpanded={expandedSections.animation} 
                onToggle={() => toggleSection('animation')}
              />
              {expandedSections.animation && (
                <div className="pl-2">
                  <SelectInput
                    label="Transition Speed"
                    value={config.transitionSpeed || 'medium'}
                    onChange={(value) => handleConfigChange('transitionSpeed', value)}
                    options={[
                      { value: 'fast', label: 'Fast (150ms)' },
                      { value: 'medium', label: 'Medium (300ms)' },
                      { value: 'slow', label: 'Slow (500ms)' }
                    ]}
                  />
                  <SelectInput
                    label="Hover Effects"
                    value={config.hoverEffects || 'enabled'}
                    onChange={(value) => handleConfigChange('hoverEffects', value)}
                    options={[
                      { value: 'enabled', label: 'Enabled' },
                      { value: 'disabled', label: 'Disabled' }
                    ]}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Preview */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <h3 className="text-xs font-semibold text-gray-700 mb-2">Live Preview</h3>
        <div 
          className="p-3 border rounded-lg"
          style={{ 
            backgroundColor: config.colors?.surface || config.surfaceColor || '#f9fafb',
            borderRadius: config.borderRadius || '8px',
            borderColor: config.colors?.border || config.borderColor || '#e5e7eb'
          }}
        >
          <h4 
            className="text-sm font-semibold mb-2"
            style={{ 
              color: config.colors?.text || config.textColor || '#1f2937',
              fontFamily: config.typography?.fontFamily || config.fontFamily || 'Inter',
              fontSize: config.baseFontSize || '16px'
            }}
          >
            Sample Heading
          </h4>
          <p 
            className="text-xs mb-3"
            style={{ 
              color: config.colors?.textSecondary || config.textSecondary || '#6b7280',
              fontFamily: config.typography?.fontFamily || config.fontFamily || 'Inter'
            }}
          >
            This is sample text to preview your styling choices.
          </p>
          <div className="flex space-x-2">
            <button 
              className="px-3 py-1 text-xs font-medium rounded transition-colors"
              style={{ 
                backgroundColor: config.buttonPrimaryBg || config.colors?.primary || config.primaryColor || '#3b82f6',
                color: config.buttonPrimaryText || '#ffffff',
                borderRadius: config.buttonBorderRadius || config.borderRadius || '8px'
              }}
            >
              Primary
            </button>
            <button 
              className="px-3 py-1 text-xs font-medium rounded transition-colors"
              style={{ 
                backgroundColor: config.buttonSecondaryBg || '#f3f4f6',
                color: config.buttonSecondaryText || '#374151',
                borderRadius: config.buttonBorderRadius || config.borderRadius || '8px'
              }}
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;