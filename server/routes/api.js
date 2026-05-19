const express = require('express');
const router = express.Router();
const Roadmap = require('../models/Roadmap');
const { generateRoadmap } = require('../services/aiService');

// POST /api/generate
// Generate a new roadmap using Gemini AI and save it to MongoDB
router.post('/generate', async (req, res) => {
  try {
    const { topic, level } = req.body;
    if (!topic) {
      return res.status(400).json({ error: 'Topic is required' });
    }

    // Call Gemini AI
    const roadmapData = await generateRoadmap(topic, level);

    // Save to DB
    const newRoadmap = new Roadmap({
      topic,
      level: level || 'Beginner',
      nodes: roadmapData.nodes,
      edges: roadmapData.edges
    });

    const savedRoadmap = await newRoadmap.save();

    res.status(201).json(savedRoadmap);
  } catch (error) {
    console.error('Error in /api/generate:', error);
    res.status(500).json({ error: 'Failed to generate roadmap' });
  }
});

// GET /api/roadmaps/:id
// Fetch a specific roadmap by ID
router.get('/roadmaps/:id', async (req, res) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);
    if (!roadmap) {
      return res.status(404).json({ error: 'Roadmap not found' });
    }
    res.json(roadmap);
  } catch (error) {
    console.error('Error fetching roadmap:', error);
    res.status(500).json({ error: 'Failed to fetch roadmap' });
  }
});

module.exports = router;
