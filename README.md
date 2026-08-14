# 📝 React Sagarmatha — Todo App & Workshop Guide

A modern, lightweight Todo application built with **React 19** and **Vite**, designed as a clean starter project and workshop activity for mastering React state management and component-driven architecture.

---

## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Step-by-Step Setup Guide](#-step-by-step-setup-guide)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Navigate to Project Directory](#2-navigate-to-project-directory)
  - [3. Install Dependencies](#3-install-dependencies)
  - [4. Start Development Server](#4-start-development-server)
  - [5. Build for Production](#5-build-for-production)
  - [6. Preview Production Build](#6-preview-production-build)
- [Project Structure](#-project-structure)
- [Architecture & Core Concepts](#-architecture--core-concepts)
  - [Lifting State Up](#lifting-state-up)
  - [State Immutability](#state-immutability)
  - [Derived State](#derived-state)
- [Workshop Challenges & Extensions](#-workshop-challenges--extensions)
- [Scripts Reference](#-scripts-reference)
- [Author](#-author)

---

## ✨ Features

- **Add New Tasks:** Interactive form input to create todos.
- **Toggle Completion:** Check off completed items with dynamic UI updates.
- **Delete Tasks:** Remove individual todos cleanly.
- **Real-Time Counter:** Live count of remaining vs. total tasks.
- **Clean Styling:** Modern, responsive vanilla CSS design.

---

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool / Bundler:** [Vite](https://vitejs.dev/)
- **Language:** JavaScript (ES6+ / JSX)
- **Styling:** Vanilla CSS (CSS variables and modern layout)

---

## 📋 Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: `v18.0.0` or newer ([Download Node.js](https://nodejs.org/))
- **npm**: Comes bundled with Node.js (`npm -v` to check)
- **Git**: For version control ([Download Git](https://git-scm.com/))

---

## 🚀 Step-by-Step Setup Guide

Follow these steps to clone, set up, and run the project locally.

### 1. Clone the Repository

Open your terminal or command prompt and run:

```bash
git clone https://github.com/VirajSawad1021/React_Sagarmatha.git
```

### 2. Navigate to Project Directory

```bash
cd React_Sagarmatha
```

### 3. Install Dependencies

Install the required npm packages:

```bash
npm install
```

### 4. Start Development Server

Run the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

After running the command, open your browser and navigate to the displayed local URL:
```text
http://localhost:5173
```

### 5. Build for Production

To create an optimized production build:

```bash
npm run build
```

This will bundle the assets into the `dist/` directory.

### 6. Preview Production Build

To locally test the production build:

```bash
npm run preview
```

---

## 📂 Project Structure

```text
React_Sagarmatha/
├── dist/                     # Production build output (generated upon build)
├── node_modules/             # Installed dependencies
├── public/                   # Static assets
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx      # Input form for adding new todos
│   │   └── TodoItem.jsx      # Single todo item row with toggle and delete
│   ├── App.jsx               # Root component: manages state & handles actions
│   ├── index.css             # Global styles and CSS variables
│   └── main.jsx              # Entry point for React DOM rendering
├── .gitignore                # Files ignored by Git
├── index.html                # HTML entry template
├── package.json              # Project scripts and dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation and setup guide
```

---

## 🧠 Architecture & Core Concepts

### Lifting State Up
`App.jsx` acts as the single source of truth:
```text
        App          ← holds `todos` in useState
         │
         │  data flows DOWN as props
         ▼
   ┌─────────────┬──────────────┐
   │  TodoForm   │   TodoItem   │
   └─────────────┴──────────────┘
         │              │
         └──────────────┘
      events flow UP by calling
      callback functions passed down
```

### State Immutability
Always create new arrays/objects rather than mutating state directly:
- **Adding:** `setTodos([...todos, newTodo])` instead of `todos.push(newTodo)`
- **Toggling:** `todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo)`
- **Deleting:** `todos.filter(todo => todo.id !== id)`

### Derived State
Don't duplicate state. Values that can be calculated from existing state are computed directly on render:
```javascript
const remaining = todos.filter((todo) => !todo.done).length;
```

---

## 📜 Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite local development server |
| `npm run build` | Compiles and optimizes code into `/dist` for production |
| `npm run preview` | Spins up a local web server to preview the production build |

---

## 👤 Author

- **Viraj Sawad** — [GitHub Profile](https://github.com/VirajSawad1021)

---
*Happy Coding! 🚀*
