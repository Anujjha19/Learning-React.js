import React, { useState } from "react";

const Accordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>Accordion Header</h3>
        <span>{isExpanded ? "-" : "+"}</span>
      </div>
      {isExpanded && (
        <div className="accordion-content">
          <p>Accordion Content</p>
          <p>Accordion Content</p>
          <p>Accordion Content</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
