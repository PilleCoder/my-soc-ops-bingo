# Soc Ops Bingo — Workspace Instructions

A React-based social bingo game for in-person mixers built with Vite, TypeScript, and Tailwind CSS v4.

## Development Checklist

Before committing changes, verify all of the following:

- [ ] `npm run lint` passes with no errors
- [ ] `npm run build` completes successfully
- [ ] `npm run test` passes all test suites
- [ ] `npm run dev` starts the dev server without errors
- [ ] Manual testing in browser confirms expected behavior

## Project Overview

**Soc Ops** is a social mixer game where players find people matching bingo questions and get 5 in a row to win. The app generates randomized 5x5 bingo boards with a free space in the center.

### Key Features

- **Randomized Boards**: Each player gets a unique question arrangement
- **Game States**: Start screen → playing board → bingo modal
- **Persistent State**: Game progress saved to localStorage
- **Responsive UI**: Works on desktop and mobile
- **Automatic Deployment**: Pushes to GitHub Pages on main branch commits

### Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 with @tailwindcss/vite
- **Testing**: Vitest with React Testing Library
- **Linting**: ESLint 9 with TypeScript support

## Project Structure

```
src/
├── App.tsx                      # Main app component with routing logic
├── main.tsx                     # Entry point
├── index.css                    # Global styles (Tailwind imports)
├── components/
│   ├── BingoBoard.tsx          # Game board grid (5x5)
│   ├── BingoSquare.tsx         # Individual square with click handler
│   ├── BingoModal.tsx          # Win celebration modal
│   ├── GameScreen.tsx          # Board + modal container
│   └── StartScreen.tsx         # Welcome + game start
├── data/
│   └── questions.ts            # Array of bingo question strings
├── hooks/
│   └── useBingoGame.ts         # Game state management hook
├── types/
│   └── index.ts                # TypeScript interfaces & types
├── utils/
│   ├── bingoLogic.ts           # Core game algorithms
│   └── bingoLogic.test.ts      # Test suite (21 tests)
└── test/
    └── setup.ts                # Vitest configuration
```

## Key Concepts & Files

### Game Logic (`src/utils/bingoLogic.ts`)

Core functions for generating and managing the bingo game:

- **`generateBoard()`**: Creates a randomized 5×5 board with one free space (center)
- **`toggleSquare()`**: Marks/unmarks a square when clicked
- **`checkBingo()`**: Detects winning conditions (rows, columns, diagonals)
- **`getWinningSquareIds()`**: Returns the set of winning square IDs for highlighting

All functions are pure and thoroughly tested in `bingoLogic.test.ts`.

### State Management (`src/hooks/useBingoGame.ts`)

The `useBingoGame` hook manages:

- `gameState`: 'start' | 'playing' | 'bingo'
- `board`: Array of `BingoSquareData` objects
- `winningLine`: Details of the winning row/column/diagonal (if any)
- `showBingoModal`: Modal visibility flag
- `winningSquareIds`: Set of square IDs to highlight

State persists to localStorage between sessions.

### Types (`src/types/index.ts`)

- `BingoSquareData`: Square data (id, text, isMarked, isFreeSpace)
- `BingoLine`: Winning line metadata (type, index, squares)
- `GameState`: Game phase type

## Customization Guide

### Adding/Editing Questions

Edit `src/data/questions.ts` to customize the question pool:

```typescript
export const questions: string[] = [
  "has lived in another country",
  "speaks more than 2 languages",
  "plays an instrument",
  // Add more questions here
];
```

**Notes:**
- Questions should be short, friendly, and suitable for mixers
- At least 24 unique questions are needed (5×5 board minus free space)
- Adding more questions increases board variety

### Styling with Tailwind CSS v4

The project uses Tailwind CSS v4 with these latest features:

- **CSS-first approach**: Variables and custom functions in CSS
- **@apply removed**: Use composition instead (create helper components)
- **Powerful utilities**: More granular spacing, colors, and effects
- **CSS Nesting**: Write nested selectors directly in CSS

For detailed v4 patterns, see `.github/instructions/tailwind-4.instructions.md`.

### UI/Design Guidelines

Follow the guidance in `.github/instructions/frontend-design.instructions.md` for:

- Creating bold, distinctive designs (avoid generic AI aesthetics)
- Maintaining visual coherence
- Responsive and accessible components

## Running Tasks

### Development

```bash
npm run dev
```

Starts Vite dev server on `http://localhost:5173` with hot module reloading.

### Build

```bash
npm run build
```

Compiles TypeScript (`tsc -b`) and bundles for production. Output goes to `dist/`.

### Linting

```bash
npm run lint
```

Runs ESLint across the codebase. Enforces:

- TypeScript type correctness
- React hooks rules
- React refresh compatibility
- No unused variables or await statements (if configured)

### Testing

```bash
npm run test
```

Runs Vitest in run mode. Currently covers `bingoLogic` with 21 tests.

**To run tests in watch mode:**

```bash
npx vitest
```

### Deployment

The project auto-deploys to GitHub Pages via GitHub Actions on push to `main`:

- **URL**: `https://{github-username}.github.io/{repo-name}`
- **Workflow**: `.github/workflows/deploy.yml` (auto-created by Vite)
- **Requirements**: Enable Pages in repo settings → *Deploy from a branch* → *GitHub Actions*

## Testing & Quality

### Test Coverage

Current test suite in `src/utils/bingoLogic.test.ts` covers:

- Board generation (6 tests)
- Square toggling (5 tests)
- Bingo detection (7 tests)
- Winning square identification (3 tests)

**Adding new tests:**

```typescript
import { describe, it, expect } from 'vitest';

describe('MyFeature', () => {
  it('should do something', () => {
    expect(myFunction()).toBe(expected);
  });
});
```

### Writing Testable Code

- Keep game logic in pure functions (no side effects)
- Test business logic separately from UI components
- Use React Testing Library for component tests

## Common Tasks

### Reset Game State

The game persists state to localStorage. To reset:

1. Open browser DevTools (F12)
2. Go to *Application* → *Local Storage*
3. Delete entry with key `bingo-game-state`
4. Refresh the page

### Debug Game Logic

Use React DevTools and Vite's client-side debugging:

1. Ensure `npm run dev` is running
2. Open browser DevTools
3. Check *Console* for errors
4. Set breakpoints in the *Sources* tab

### Add a New Component

1. Create file in `src/components/MyComponent.tsx`
2. Export as React functional component:

```typescript
export function MyComponent() {
  return <div>Content</div>;
}
```

3. Import and use in parent component
4. Add tests if component has logic

## Git & Collaboration

- **Branch naming**: Use descriptive names (`feature/my-feature`, `fix/bug-name`)
- **Commit messages**: Be clear and concise
- **Pull requests**: Reference issues and include context
- **Code reviews**: Use GitHub's review features

## Environment Setup

### Prerequisites

- Node.js 22+ (see `.nvmrc` if using nvm)
- npm 10+
- Git

### Installation

```bash
git clone <your-repo>
cd my-soc-ops-bingo
npm install
npm run dev
```

### Recommended Extensions

The workspace includes a `.vscode/extensions.json` with recommendations:

- **ESLint**: Lint errors inline
- **Prettier**: Code formatting (optional, ESLint handles it)
- **React Refresh**: HMR support

Install all at once: `Extensions: Show Recommended Extensions`

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Dev server won't start | Check port 5173 is free; run `npx vite --host` to bind to all interfaces |
| Module not found errors | Run `npm install` to ensure all dependencies are present |
| Tests failing | Run `npm run lint` and `npm run build` first to catch TypeScript errors |
| Hot reload not working | Check browser console for errors; restart dev server |
| Questions not appearing | Ensure `src/data/questions.ts` exports non-empty array; board needs 24+ unique items |

## Architecture Decisions

### Why Pure Functions for Game Logic?

Game logic is isolated in pure functions (`generateBoard`, `checkBingo`, etc.) to:

- Enable thorough testing without mocking
- Make behavior predictable and debuggable
- Support easy refactoring without side effects

### Why localStorage for State?

Player progress persists across browser sessions/refreshes:

- No backend needed for a client-side game
- Automatic save on state changes
- Reset via DevTools if needed

### Why Tailwind CSS?

- Rapid UI development with utility classes
- Consistent design token system
- v4 brings powerful CSS-in-JS improvements
- Great mobile responsiveness built-in

## Resources & Documentation

- [React 19 Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vitest Docs](https://vitest.dev/)

## Questions & Support

For issues, questions, or suggestions:

1. Check the `.lab/GUIDE.md` for workshop context
2. Review existing issues on GitHub
3. Open a new issue with clear description
4. Use GitHub Discussions for general questions

---

**Last Updated**: January 2026
**Maintainer**: Harald Kirschner (@digitarald)
