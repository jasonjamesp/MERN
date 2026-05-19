import React, { useState } from 'react';
import axios from 'axios';
import { Search, Map as MapIcon } from 'lucide-react';
import RoadmapFlow from './components/RoadmapFlow';

function App() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('Beginner');
  const [isLoading, setIsLoading] = useState(false);
  const [roadmap, setRoadmap] = useState(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5005/api/generate', { topic, level });
      
      // Ensure nodes use our custom type
      const nodesWithCustomType = response.data.nodes.map(node => ({
        ...node,
        type: 'custom' // Use the custom node type we created
      }));

      setRoadmap({
        topic: response.data.topic,
        level: response.data.level,
        nodes: nodesWithCustomType,
        edges: response.data.edges
      });
    } catch (err) {
      console.error(err);
      setError('Failed to generate roadmap. Please try again or check the server connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>
          <span className="gradient-text">Scholar</span>Stream
        </h1>
        <p>Your AI-Powered Knowledge Architect. Enter any topic to generate a learning roadmap.</p>
      </header>

      <form onSubmit={handleGenerate} className="search-container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="e.g., Quantum Computing, Roman Empire, Machine Learning..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isLoading}
          />
          <select 
            className="level-select"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            disabled={isLoading}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button type="submit" className="search-button" disabled={isLoading || !topic.trim()}>
            <Search size={20} />
            {isLoading ? 'Architecting...' : 'Generate'}
          </button>
        </div>
      </form>

      {error && (
        <div style={{ color: '#ef4444', textAlign: 'center', marginBottom: '2rem' }}>
          {error}
        </div>
      )}

      {/* Roadmap Canvas */}
      <div className="roadmap-container relative">
        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p className="gradient-text" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              Synthesizing knowledge on "{topic}"...
            </p>
          </div>
        )}
        
        {roadmap ? (
          <RoadmapFlow initialNodes={roadmap.nodes} initialEdges={roadmap.edges} />
        ) : !isLoading && (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
            <MapIcon size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
            <p>Your roadmap will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
