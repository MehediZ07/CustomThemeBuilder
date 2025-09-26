import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { themes, collections, items } from '../data/mockData';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import HeroSection from './sections/HeroSection.jsx';
import CollectionsSection from './sections/CollectionsSection.jsx';
import ItemsSection from './sections/ItemsSection.jsx';
import BundleSection from './sections/BundleSection.jsx';
import SubscriptionSection from './sections/SubscriptionSection.jsx';
import Sidebar from './Sidebar.jsx';

const ThemeBuilder = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [sections, setSections] = useState(themes[0].sections);
  const [isPreview, setIsPreview] = useState(false);
  const [styles, setStyles] = useState({
    primaryColor: '#3b82f6',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    fontFamily: 'Inter',
    borderRadius: '8px',
    cardSize: 'medium',
    heroImage: 'https://daujxgrs0jsvx.cloudfront.net/media/Banner (1)_25XIYcj.jpg',
    heroTitle: 'UNLIMITED CREATIVITY AT YOUR FINGERTIPS!'
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newSections = Array.from(sections);
    const [reorderedItem] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, reorderedItem);

    setSections(newSections.map((section, index) => ({ ...section, order: index })));
  };

  const renderSection = (section) => {
    switch (section.type) {
      case 'hero':
        return <HeroSection styles={styles} />;
      case 'collections':
        return <CollectionsSection collections={collections} styles={styles} />;
      case 'items':
        return <ItemsSection items={items} styles={styles} />;
      case 'bundles':
        return <BundleSection styles={styles} />;
      case 'subscription':
        return <SubscriptionSection styles={styles} />;
      default:
        return null;
    }
  };

  if (isPreview) {
    return (
      <div className="bg-black min-h-screen">
        <div className="bg-white">
          <Header theme={selectedTheme.name.toLowerCase()} />
          {sections.map((section) => (
            <div key={section.id}>
              {renderSection(section)}
            </div>
          ))}
          <Footer theme={selectedTheme.name.toLowerCase()} />
        </div>
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
                            {renderSection(section)}
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
        styles={styles} 
        setStyles={setStyles} 
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        setSections={setSections}
        themes={themes}
        setIsPreview={setIsPreview}
      />
    </div>
  );
};

export default ThemeBuilder;