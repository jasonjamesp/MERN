# ScholarStream 

**ScholarStream** is an AI-Powered Knowledge Architect. Simply enter any topic you want to learn, and the application generates a structured, interactive, and visual learning roadmap tailored to your specific difficulty level. 

## Features

- **AI Roadmap Generation**: Leverages Google's Gemini AI to dynamically generate logical learning progressions for any subject.
- **Difficulty Levels**: Tailor your learning path! Choose between **Beginner**, **Intermediate**, or **Advanced** to get nodes matched to your skill level.
- **Actionable Learning Resources**: Expand any node to view 2-3 specific learning methods, complete with direct, clickable URLs (e.g., YouTube searches, official docs, tutorials) to start learning immediately.
- **Flexible UI**: Features a sleek, modern, dark-themed interface built with a focus on user experience and dynamic aesthetics.

## Tech Stack

**Frontend (Client)**
- **React (Vite)**: Lightning-fast frontend framework.
- **React Flow**: For rendering the interactive node-based diagrams.
- **Axios**: For handling HTTP requests.
- **Vanilla CSS**: Custom styling with premium dark mode colors and glassmorphism effects.

**Backend (Server)**
- **Node.js & Express**: Robust server architecture and REST API.
- **Google Generative AI SDK**: Integrating the `gemini-2.5-flash` model for intelligent content generation.
- **MongoDB & Mongoose**: For persisting the generated roadmaps so they can be retrieved later.


## How to Use
1. Select your desired difficulty level (Beginner, Intermediate, Advanced).
2. Type in a topic (e.g., "Quantum Computing", "React Hooks", "MERN Stack").
3. Click **Generate** and watch the AI architect your learning path.
4. Click on **How to learn** at the bottom of any node to access direct links to tutorials and resources!
