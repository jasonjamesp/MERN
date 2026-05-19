# ScholarStream 🚀

**ScholarStream** is an AI-Powered Knowledge Architect. Simply enter any topic you want to learn, and the application generates a structured, interactive, and visual learning roadmap tailored to your specific difficulty level. 

## ✨ Features

- **AI Roadmap Generation**: Leverages Google's Gemini AI to dynamically generate logical learning progressions for any subject.
- **Interactive Visualizations**: Uses `reactflow` to render roadmaps as interactive, node-based flowcharts that you can pan and zoom.
- **Difficulty Levels**: Tailor your learning path! Choose between **Beginner**, **Intermediate**, or **Advanced** to get nodes matched to your skill level.
- **Actionable Learning Resources**: Expand any node to view 2-3 specific learning methods, complete with direct, clickable URLs (e.g., YouTube searches, official docs, tutorials) to start learning immediately.
- **Premium UI**: Features a sleek, modern, dark-themed interface built with a focus on user experience and dynamic aesthetics.

## 🛠️ Tech Stack

**Frontend (Client)**
- **React (Vite)**: Lightning-fast frontend framework.
- **React Flow**: For rendering the interactive node-based diagrams.
- **Lucide React**: For beautiful, crisp iconography.
- **Axios**: For handling HTTP requests.
- **Vanilla CSS**: Custom styling with premium dark mode colors and glassmorphism effects.

**Backend (Server)**
- **Node.js & Express**: Robust server architecture and REST API.
- **Google Generative AI SDK**: Integrating the `gemini-2.5-flash` model for intelligent content generation.
- **MongoDB & Mongoose**: For persisting the generated roadmaps so they can be retrieved later.
- **Dotenv & CORS**: For environment variables and cross-origin resource sharing.

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.
- A MongoDB cluster/connection URI.
- A Google Gemini API Key.

### 1. Backend Setup
1. Open a terminal and navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add your credentials:
   ```env
   PORT=5005
   MONGO_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   ```
4. Start the server:
   ```bash
   node index.js
   ```

### 2. Frontend Setup
1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173/` (or the port provided by Vite).

## 💡 How to Use
1. Select your desired difficulty level (Beginner, Intermediate, Advanced).
2. Type in a topic (e.g., "Quantum Computing", "React Hooks", "Roman Empire").
3. Click **Generate** and watch the AI architect your learning path.
4. Click on **How to learn** at the bottom of any node to access direct links to tutorials and resources!
