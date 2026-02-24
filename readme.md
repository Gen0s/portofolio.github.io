# 🌌 Personal Portfolio Website

A premium modern portfolio website built with **React + Vite**, styled with the **Nord color palette**, featuring:

- Responsive homepage layout
- Projects page with animated cards
- Resume page with alternating timeline
- Scroll‑activated animated skill bars
- Downloadable CV
- Clean modern UI with smooth transitions

---

## 🚀 Tech Stack

- React
- Vite
- React Router
- Tailwind CSS (utility-based styling)
- Intersection Observer API (skill animations)

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg
│       └── cv.pdf
│
├── src/
│   ├── data/
│   │   ├── personal.js
│   │   ├── socials.js
│   │   └── projects.js
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── card.jsx
│   │       └── button.jsx
│   │
│   ├── PortfolioApp.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠 Installation & Local Development

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start development server

```bash
npm run dev
```

Then open:

```
http://localhost:5173
```

---

## ✏️ How To Customize

### Update Personal Info
Edit:

```
src/data/personal.js
```

Change your:
- Name
- Title
- Description
- Profile image path

---

### Update Social Links
Edit:

```
src/data/socials.js
```

Add your:
- LinkedIn
- GitHub
- Instagram
- Business website

---

### Add / Edit Projects
Edit:

```
src/data/projects.js
```

Add new project objects to automatically generate cards.

---

### Replace Profile Photo
Put your image inside:

```
public/assets/profile.jpg
```

---

### Replace CV
Put your file inside:

```
public/assets/cv.pdf
```

---

## 🎨 Design System

This portfolio uses the **Nord color palette**:

- Polar Night: `#2e3440`
- Snow Storm: `#eceff4`
- Frost Blue: `#88c0d0`
- Frost Dark: `#5e81ac`
- Muted Gray: `#4c566a`

The aesthetic focuses on:

- Clean spacing
- Subtle motion
- Premium developer look
- Professional minimalism

---

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be generated inside the `dist/` folder.

You can upload the contents of `dist/` to:
- Your domain hosting
- GitHub Pages
- Netlify
- Vercel

---

## 📄 License

This project is open-source and free to modify for personal use.

---

## 🙌 Author

Built and designed by **Your Name**.

---

If you like this project, feel free to ⭐ the repository.

