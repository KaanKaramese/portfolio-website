import App from './App';
import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Kaan Karameşe. All rights reserved.</span>
    </footer>
  );
}

function AppWithFooter() {
  return (
    <>
      <App />
      <Footer />
    </>
  );
}

export default AppWithFooter;
