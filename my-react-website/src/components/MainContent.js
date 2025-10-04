import React, { useState } from 'react';

function MainContent() {
  const [count, setCount] = useState(0);

  return (
    <main className="main-content">
      <section className="hero" id="home">
        <h1>Welcome to My React Website</h1>
        <p>This is a beautiful, responsive React template deployed on GitHub Pages. Perfect for portfolios, projects, or personal websites!</p>
        
        <div className="counter">
          <p>Interactive Counter: <strong>{count}</strong></p>
          <button onClick={() => setCount(count + 1)}>
            ➕ Increment
          </button>
          <button onClick={() => setCount(count - 1)}>
            ➖ Decrement
          </button>
          <button onClick={() => setCount(0)}>
            🔄 Reset
          </button>
        </div>
      </section>
      
      <section className="features" id="features">
        <h2>✨ Amazing Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>⚛️ React 18</h3>
            <p>Built with the latest React features including hooks and functional components for modern development.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>Looks great on all devices - desktop, tablet, and mobile. Fully responsive CSS Grid and Flexbox layout.</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Modern UI</h3>
            <p>Beautiful gradients, smooth animations, and clean design that follows modern web standards.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Fast Performance</h3>
            <p>Optimized for speed with minimal dependencies and efficient React rendering.</p>
          </div>
          <div className="feature-card">
            <h3>🌐 GitHub Pages</h3>
            <p>Deployed on GitHub Pages with zero configuration. Free hosting with custom domain support.</p>
          </div>
          <div className="feature-card">
            <h3>🔧 Easy Customization</h3>
            <p>Well-structured code that's easy to modify and extend for your specific needs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;