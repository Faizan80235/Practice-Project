import React, { useState, useEffect } from 'react';
import Home from "./Pages/Main";

// Custom Cursor Component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.type === 'button' ||
        target.classList.contains('clickable') ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnterWindow = () => {
      setIsHidden(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add styles for all interactive elements
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
      
      .custom-cursor-dot {
        position: fixed;
        top: 0;
        left: 0;
        width: 8px;
        height: 8px;
        background: linear-gradient(135deg, #64ffda, #667eea);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.15s ease-out;
        mix-blend-mode: difference;
      }

      .custom-cursor-ring {
        position: fixed;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(100, 255, 218, 0.3);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        transform: translate(-50%, -50%);
        transition: all 0.3s ease-out;
      }

      .custom-cursor-dot.pointer {
        transform: translate(-50%, -50%) scale(1.5);
        background: linear-gradient(135deg, #667eea, #764ba2);
      }

      .custom-cursor-ring.pointer {
        transform: translate(-50%, -50%) scale(1.5);
        border-color: rgba(102, 126, 234, 0.8);
        border-width: 3px;
      }

      .custom-cursor-dot.hidden,
      .custom-cursor-ring.hidden {
        opacity: 0;
      }

      .custom-cursor-ring::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border: 1px solid rgba(100, 255, 218, 0.1);
        border-radius: 50%;
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(1.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.body.style.cursor = 'auto';
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor-dot ${isHidden ? 'hidden' : ''} ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      <div
        className={`custom-cursor-ring ${isHidden ? 'hidden' : ''} ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Home />
    </div>
  );
};

export default App;