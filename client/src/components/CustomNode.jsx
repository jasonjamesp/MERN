import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const CustomNode = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="custom-node">
      <Handle type="target" position={Position.Top} className="w-2 h-2 !bg-accent-color" />
      <div className="node-label">{data.label}</div>
      {data.description && <div className="node-desc">{data.description}</div>}
      
      {data.learningMethods && data.learningMethods.length > 0 && (
        <div className="learning-methods-container">
          <button 
            className="learning-methods-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <BookOpen size={14} />
            <span>How to learn</span>
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          
          {isExpanded && (
            <ul className="learning-methods-list">
              {data.learningMethods.map((method, index) => (
                <li key={index}>
                  <a href={method.url} target="_blank" rel="noopener noreferrer" className="learning-method-link">
                    {method.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <Handle type="source" position={Position.Bottom} className="w-2 h-2 !bg-primary-color" />
    </div>
  );
};

export default memo(CustomNode);
