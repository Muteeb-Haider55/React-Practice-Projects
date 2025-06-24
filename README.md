
# React Practice Projects 🛠️

This repository contains multiple mini React projects that helped me revise and strengthen my understanding of core React concepts including **Hooks**, **Context API**, **Redux Toolkit**, **Tailwind CSS**, and **React Router DOM**. Each project is built step by step by solving real errors and questions I faced during development.

## 📦 Projects Included

### 1. **Color Switcher (usestate) 🎨**
- state management using usestate 
- how to change the state .


### 2. **Card with Light and Dark Mode 🌗**
- Used Context to toggle between light and dark mode.
- Applied conditional Tailwind classes based on dark/light mode.
- Learned the difference between using a **simple function and arrow function** in event handling.

### 3. **Todo App using Context API ✅**
- Managed todo list using Context API.
- Passed state and dispatch methods using a provider.
- Used `useState`, `useEffect` to store and fetch todos from `localStorage`.
- Solved the **arrow function confusion vs normal function** in `onClick` handlers.

### 4. **Todo App using Redux Toolkit 🗂️**
- Built a scalable todo app using Redux Toolkit.
- Properly configured `createSlice`, `nanoid` for unique IDs.
- Solved a critical mistake in dispatching action:
  - Initially dispatched a string — fixed by dispatching an object like `{ text: inputValue }`.
- Understood and applied **Redux payload structure** correction.
- Used `useSelector`, `useDispatch` to access and modify Redux store.

### 5. **React Router DOM Setup 🛤️**
- Practiced route creation using `createBrowserRouter` and `createRoutesFromElements`.
- Solved the **Route.Provider error** by using the correct `<Route>` element.
- Understood the importance of using `<Layout />` instead of `Layout` to avoid "function as child" errors.

### 6. **Tailwind CSS Utility Practice 🎨**
- Used Tailwind classes such as:
  - `duration` — for transition timing.
  - `shrink-0` — to prevent flex children from shrinking.
  - `gap` vs `margin` — learned their usage difference in layouts.
- Solved issue when Tailwind didn’t work due to deleting `index.css` — reconfigured `tailwind.config.js` and `postcss.config.js`.

---

## 🧩 **Common Errors Solved During These Projects**

| ❌ Error | 💡 Solution |
|---------|-------------|
| **`Route.Provider` is not valid** | Replaced with correct `<Route>` |
| **Function as child warning** | Used `<Layout />` instead of `Layout` |
| **Redux payload undefined** | Fixed by dispatching object: `{ text: inputValue }` |
| **`todo.text` not rendering** | Passed correct structure to reducer |
| **VS Code not detecting file rename** | Used `Developer: Reload Window` |

---

## 🔧 **Tech Stack**

- React.js (with Hooks)
- Context API
- Redux Toolkit
- React Router DOM v6
- Tailwind CSS
- Vite

---

## 📚 **What I Practiced**

- React Hooks: `useState`, `useEffect`, `useContext`
- Context API vs Redux Toolkit differences
- Proper Redux Toolkit slice creation
- Event handling differences between **arrow function** and **simple function**
- Route setup with React Router DOM
- Tailwind CSS utility-first design
- Debugging real-world React errors

---

## 🚀 **How to Run**

```bash
git clone https://github.com/Muteeb-Haider55/React-Practice-Projects.git
cd react-mini-projects
npm install
npm run dev
