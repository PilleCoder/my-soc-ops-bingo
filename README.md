<div align="center">

# 🎲 Soc Ops

### Break the ice, make connections, have fun! 🎉

**A modern social bingo game designed for in-person mixers, team events, and community gatherings.**

[![Live Demo](https://img.shields.io/badge/🎮_Play_Now-Live_Demo-blue?style=for-the-badge)](https://pillecoder.github.io/my-soc-ops-bingo/)
[![Built with React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![Powered by Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

![Game Preview](https://github.com/user-attachments/assets/37ff6687-3672-44cc-9714-9c9d380bce0b)

</div>

---

## ✨ What is Soc Ops?

**Soc Ops** (Social Operations) transforms the classic bingo game into an interactive icebreaker experience. Players mingle, discover interesting facts about each other, and race to complete their unique bingo board. It's the perfect way to:

- 🤝 **Break the ice** at conferences, meetups, and team events
- 💬 **Spark conversations** with fun, engaging questions
- 🏆 **Gamify networking** with a friendly competitive element
- 📱 **Go paperless** with a modern web-based experience

---

## 🎮 How to Play

1. **Start the game** and receive your randomized 5×5 bingo board
2. **Mingle and ask** people if they match the squares (e.g., "has lived in another country")
3. **Tap squares** to mark them when you find a match
4. **Get 5 in a row** (horizontal, vertical, or diagonal) to win!
5. **Celebrate** your victory with the bingo modal! 🎊

![Bingo Board](https://github.com/user-attachments/assets/aa663120-728e-48d3-9366-bc548ae8a2dc)

---

## 🚀 Quick Start

### Prerequisites

- [Node.js 22+](https://nodejs.org/) (LTS recommended)
- npm 10+ (comes with Node.js)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/PilleCoder/my-soc-ops-bingo.git
cd my-soc-ops-bingo

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser and start playing! 🎉

---

## 🛠️ Tech Stack

This project showcases modern web development practices:

| Technology | Purpose |
|------------|---------|
| ⚛️ **React 19** | UI framework with the latest features |
| 📘 **TypeScript** | Type-safe development |
| ⚡ **Vite 7** | Lightning-fast build tool and dev server |
| 🎨 **Tailwind CSS 4** | Utility-first styling with CSS-first configuration |
| 🧪 **Vitest** | Fast unit testing framework |
| 🎭 **React Testing Library** | Component testing utilities |
| 📦 **ESLint 9** | Code quality and consistency |

---

## 🎨 Features

- ✅ **Randomized Boards** – Every player gets a unique arrangement
- ✅ **Persistent State** – Progress is saved to localStorage
- ✅ **Responsive Design** – Works seamlessly on mobile and desktop
- ✅ **Win Detection** – Automatic detection of rows, columns, and diagonals
- ✅ **Visual Feedback** – Highlighted winning squares
- ✅ **Customizable Questions** – Easy to modify for your event
- ✅ **Auto-deployment** – Pushes to GitHub Pages on every commit

---

## 🧩 Customization

### Add Your Own Questions

Edit `src/data/questions.ts` to customize the bingo questions for your event:

```typescript
export const questions: string[] = [
  "has lived in another country",
  "speaks more than 2 languages",
  "plays an instrument",
  // Add your own questions here!
];
```

**Tips:**
- Keep questions short and friendly
- Make them conversation starters
- Aim for diversity (hobbies, experiences, skills)
- Need at least 24 unique questions (5×5 board minus free space)

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Deploy to GitHub Pages

This project automatically deploys to GitHub Pages via GitHub Actions:

1. Enable GitHub Pages in **Settings** → **Pages**
2. Select **GitHub Actions** as the source
3. Push to the `main` branch
4. Your game will be live at `https://{username}.github.io/{repo-name}` 🌐

---

## 🧪 Development

### Run Tests

```bash
npm run test        # Run once
npx vitest          # Watch mode
```

### Lint Code

```bash
npm run lint
```

### Project Structure

```
src/
├── components/     # React components
├── hooks/          # Custom React hooks
├── utils/          # Game logic & utilities
├── data/           # Question data
└── types/          # TypeScript type definitions
```

---

## 🤝 Contributing

Contributions are welcome! Whether it's:

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 Design enhancements

Please check out the [Lab Guide](.lab/GUIDE.md) for development guidelines.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built as part of the **VS Code Agent Lab** workshop
- Created by **Harald Kirschner** ([@digitarald](https://github.com/digitarald))
- Powered by the amazing open-source community

---

<div align="center">

**⭐ Star this repo if you found it useful! ⭐**

Made with ❤️ for the developer community

[Report Bug](https://github.com/PilleCoder/my-soc-ops-bingo/issues) · [Request Feature](https://github.com/PilleCoder/my-soc-ops-bingo/issues) · [Discussions](https://github.com/PilleCoder/my-soc-ops-bingo/discussions)

</div>
