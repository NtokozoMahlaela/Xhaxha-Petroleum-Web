import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Something went wrong.</h1>
          <p>Please check the console for more information.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the app with error boundary
try {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Error rendering app:', error);
  root.render(
    <div style={{ padding: '20px' }}>
      <h1>Failed to load the application</h1>
      <p>Error: {error.message}</p>
    </div>
  );
}
