# 📝 React Blog Application

A simple yet powerful **blog application** built with **React.js**, allowing users to create, edit, and delete blog posts.  
This project was developed as part of my **React learning journey** to explore hooks, routing, and API integration.

---

## 🚀 Features
- 📄 **View all blog posts**
- ➕ **Add new blog posts**
- ✏️ **Edit existing blog posts**
- ❌ **Delete blog posts**
- 🔄 **Data persistence** with JSON server
- 📱 **Responsive design** for mobile and desktop
- 🎯 **Custom hooks** (`useAxiosFetch`, `useWindowSize`)

---

## 🛠️ Tech Stack
- **Frontend:** React.js, JSX, CSS
- **Routing:** React Router
- **Data Fetching:** Axios
- **Backend (local):** JSON Server
- **State Management:** useState, useEffect, useReducer

---

## 📂 Project Structure
project-blog/
├── public/ # Static files
├── src/ # Main application source code
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Page-level components
│ ├── App.jsx # Main app component
│ └── index.jsx # Entry point
└── data/db.json # Local JSON database

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/yourusername/react-blog.git
cd react-blog/project-blog
### 2️⃣ Install dependencies
npm install
### 3️⃣ Run JSON Server (for backend)
npx json-server --watch data/db.json --port 3500
### 4️⃣ Start the React app
npm start


---

## 🎯 Learning Goals
Mastering React hooks (useState, useEffect, useReducer, useRef, useCallback, useMemo)

Implementing React Router for navigation

Using Axios for API calls

Handling CRUD operations with JSON Server

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

## 📜 License
This project is open-source and available under the MIT License.


