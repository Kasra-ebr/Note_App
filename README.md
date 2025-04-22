
# 📒 Note App

> **Minimal. Fast. Productive.**  
> A lightweight note-taking app built with **React**, **TypeScript**, **Vite**, and native **State Management**.

[![Live Demo](https://img.shields.io/badge/Live-Demo-0abde3?style=for-the-badge&logo=vercel&logoColor=white)](https://note-app.vercel.app)
[![GitHub Stars](https://img.shields.io/github/stars/yourusername/note-app?style=for-the-badge)](https://github.com/yourusername/note-app/stargazers)

![React](https://img.shields.io/badge/React-Hooks-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-purple?style=flat-square&logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-Typed-blue?style=flat-square&logo=typescript)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-green?style=flat-square)

---

## ✨ Features

- 🚀 Instant note creation and live list updates
- 🧠 Smart sorting (latest, earliest, completed)
- 🧹 Mark notes as complete/incomplete
- 🗑️ Delete unwanted notes
- 📆 Friendly date formatting
- 💡 Minimal UI with maximum usability

---

## 🧱 Tech Stack

| Technology     | Description                                  |
|----------------|----------------------------------------------|
| **React**       | Functional UI library using Hooks            |
| **TypeScript**  | Strongly typed JavaScript                   |
| **Vite**        | Lightning-fast frontend tooling              |
| **useState**    | Built-in React state management              |
| **CSS Modules** | Scoped and modular CSS                       |

---

## 📸 Preview

![Note App Screenshot](https://i.postimg.cc/hv6h2vXB/Screenshot-274.png)

---

## 📁 Project Structure

```
REACT-NOTE-APP/
├── public/
├── src/
│   ├── assets/
│   │   └── RickandMorty.png
│   ├── components/
│   │   ├── AddNewNote.tsx
│   │   ├── NoteList.tsx
│   │   ├── NoteItem.tsx
│   │   ├── NoteStatus.tsx
│   │   ├── NoteHeader.tsx
│   │   ├── UI/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Form.tsx
│   ├── App.tsx
│   ├── main.tsx
├── package.json
└── README.md
```

---

## 🧠 Component Strategy

### ✅ Functional Components with Hooks
All components are functional and powered by `useState` for managing local state.

### ✅ DRY & Reusable UI
The app leverages reusable components like:
- `Input` — For all text field interactions
- `Button` — Reusable styled button
- `Form` — Wrapping component for submission

### ✅ Separation of Concerns
- UI components only handle rendering
- Logic (like sorting, filtering) lives in stateful parents
- This architecture makes testing and maintenance easy

### ✅ Simple Native State
No reducers or contexts are used. State is managed with `useState`, keeping everything simple and performant.

---

## 🚀 Getting Started

```bash
# Clone the repository
$ git clone https://github.com/yourusername/note-app.git

# Navigate to the project
$ cd note-app

# Install dependencies
$ npm install

# Run the development server
$ npm run dev
```

---

## 🧪 Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and create a pull request.

---

## 🛡️ License

MIT License. Feel free to use and remix for your own projects.

---

> Made with ❤️ using React + Vite + TypeScript
