const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true }
  },
  data: {
    label: { type: String, required: true },
    description: { type: String },
    learningMethods: [{ 
      title: { type: String }, 
      url: { type: String } 
    }]
  },
  type: { type: String, default: 'default' }
});

const edgeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  source: { type: String, required: true },
  target: { type: String, required: true },
  animated: { type: Boolean, default: true }
});

const roadmapSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  level: { type: String, default: 'Beginner' },
  nodes: [nodeSchema],
  edges: [edgeSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Roadmap', roadmapSchema);
