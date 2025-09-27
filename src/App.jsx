import ThemeBuilder from './components/ThemeBuilder.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ThemeBuilder />
      </ErrorBoundary>
    </div>
  );
}

export default App;