import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">🚀 React Site</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;