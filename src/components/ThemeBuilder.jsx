import React, { useState, useMemo, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { collections, items, bundles, subscriptions } from '../data/mockData';
import { getAllThemes, getTheme } from '../themes';
import ThemeRenderer from './ThemeRenderer';
import Sidebar from './Sidebar.jsx';

const ThemeBuilder = () => {
  const themes = getAllThemes();
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [sections, setSections] = useState(themes[0].sections);
  const [isPreview, setIsPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState(selectedTheme.defaultConfig);
  const data = useMemo(() => ({ collections, items, bundles, subscriptions }), []);

  const handleDragEnd = useCallback((result) => {
    if (!result.destination) return;

    const newSections = Array.from(sections);
    const [reorderedItem] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, reorderedItem);

    setSections(newSections.map((section, index) => ({ ...section, order: index })));
  }, [sections]);

  const handleThemeChange = useCallback(async (themeId) => {
    setIsLoading(true);
    try {
      const theme = getTheme(themeId);
      setSelectedTheme(theme);
      setSections(theme.sections);
      setConfig(theme.defaultConfig);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isPreview) {
    return (
      <div className="bg-black min-h-screen">
        <ThemeRenderer 
          themeId={selectedTheme.id}
          config={config}
          data={data}
          sections={sections}
          isPreview={true}
        />
        <button 
          onClick={() => setIsPreview(false)}
          className="fixed top-4 right-4 bg-white px-4 py-2 rounded shadow-lg"
        >
          Back to Editor
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 overflow-auto">
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-center">Loading theme...</div>
            </div>
          </div>
        )}
        <div className="p-4">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-2">Template Preview</h1>
          </div>

          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="sections">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {sections.map((section, index) => (
                    <Draggable key={section.id} draggableId={section.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`mb-4 ${snapshot.isDragging ? 'opacity-50' : ''}`}
                        >
                          <div className="bg-white rounded-lg shadow-sm border-2 border-dashed border-gray-300 p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-600 capitalize">
                                {section.type} Section
                              </span>
                              <div className="flex space-x-2">
                                <span className="text-xs text-gray-400">Drag to reorder</span>
                              </div>
                            </div>
                            <ThemeRenderer 
                              themeId={selectedTheme.id}
                              config={config}
                              data={data}
                              sections={[section]}
                              sectionOnly={true}
                            />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>

      <Sidebar 
        config={config} 
        setConfig={setConfig} 
        selectedTheme={selectedTheme}
        onThemeChange={handleThemeChange}
        themes={themes}
        setIsPreview={setIsPreview}
      />
    </div>
  );
};

export default ThemeBuilder;