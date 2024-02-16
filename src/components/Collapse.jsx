import React, { useState, useEffect } from "react";


function Collapse({ title, children, isInitiallyOpen = false, onToggle = () => {} }) {
  const [isCollapsed, setIsCollapsed] = useState(!isInitiallyOpen);

  useEffect(() => {
    onToggle(isCollapsed);
  }, [isCollapsed, onToggle]);

  return (
    <div className="collapse-container">
      <div
        className={`collapse-header ${isCollapsed ? "" : "open"}`}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h1>{title}</h1>
        <span className={`chevron bottom ${isCollapsed ? "" : "hidden"}`}></span>
        <span className={`chevron top ${isCollapsed ? "hidden" : ""}`}></span>
      </div>
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}>
      
        {children}
      </div>
    </div>
  );
}

export default Collapse;