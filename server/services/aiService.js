const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateRoadmap = async (topic, level = 'Beginner') => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const prompt = `
    You are an expert knowledge architect. I need a ${level}-level study roadmap for the topic: "${topic}".
    Tailor the complexity and depth of the nodes specifically for a ${level} audience.
    Output the response STRICTLY as a JSON object containing two arrays: "nodes" and "edges", suitable for React Flow.
    
    Format requirements:
    1. "nodes" should be an array of objects. Each node must have:
       - "id": a unique string (e.g., "1", "2", "3").
       - "position": { "x": number, "y": number }. Arrange them logically, for example top-to-bottom or left-to-right (space them out by 150-200px).
       - "data": { 
           "label": "Short Title", 
           "description": "1-2 sentence detailed description appropriate for a ${level}",
           "learningMethods": [
             {
               "title": "Short title of the resource (e.g., 'Watch React Hooks Tutorial', 'Read Official Docs')",
               "url": "A real, specific URL for learning this (e.g., 'https://react.dev', 'https://www.youtube.com/results?search_query=react+hooks')"
             }
           ]
         }. Provide 2-3 learning methods per node.
    2. "edges" should be an array of objects connecting the nodes. Each edge must have:
       - "id": a unique string (e.g., "e1-2").
       - "source": id of the source node.
       - "target": id of the target node.
       - "animated": true.

    Ensure the nodes represent a logical progression of learning the topic from beginner to advanced. Keep it to 5-8 nodes.
    DO NOT wrap the response in markdown blocks like \`\`\`json. Return only the raw JSON.
  `;

  try {
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().trim();
    
    // Attempt to parse the JSON. If it includes markdown code blocks by accident, clean it up.
    let cleanJSON = responseText;
    if (cleanJSON.startsWith('\`\`\`json')) {
      cleanJSON = cleanJSON.substring(7, cleanJSON.length - 3);
    } else if (cleanJSON.startsWith('\`\`\`')) {
      cleanJSON = cleanJSON.substring(3, cleanJSON.length - 3);
    }

    const roadmapData = JSON.parse(cleanJSON);
    return roadmapData;
  } catch (error) {
    console.error("Error generating roadmap from Gemini:", error);
    throw new Error("Failed to generate roadmap from AI");
  }
};

module.exports = { generateRoadmap };
