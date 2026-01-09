# Workspace Instructions

## Development Checklist ✓

**Before committing any changes:**
- [ ] `npm run lint` — No ESLint errors
- [ ] `npm run build` — Builds without errors
- [ ] `npm run test` — All 21 tests pass

## Overview

**Soc Ops** is a React + Vite + Tailwind CSS v4 social bingo game for networking events.

**Stack**: React 19, TypeScript, Vite, Tailwind CSS v4, Vitest

## Quick Start

```bash
npm install              # Install dependencies
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Build for production
npm run lint             # Check for errors
npm run test             # Run tests (watch: --watch flag)
```

## Project Structure

| Path | Purpose |
|------|---------|
| `src/components/` | React UI: BingoBoard, BingoSquare, GameScreen, StartScreen, BingoModal |
| `src/data/questions.ts` | 24+ social icebreaker questions (customize here) |
| `src/utils/bingoLogic.ts` | Core game logic: board generation, win detection |
| `src/utils/bingoLogic.test.ts` | 21 unit tests for game logic |
| `src/hooks/useBingoGame.ts` | Game state management |
| `src/index.css` | Global Tailwind styles |

## Key Features

- **5x5 Bingo Board**: 24 questions + 1 free center space, randomly shuffled each game
- **Win Detection**: Rows, columns, diagonals
- **Customizable Questions**: Edit `src/data/questions.ts` to personalize
- **Responsive UI**: Works on desktop and mobile
- **Auto-Deploy**: GitHub Pages deploys on every push to `main`

## Common Tasks

**Edit questions**: `src/data/questions.ts` (hot-reloads in dev mode)

**Customize styling**: Tailwind classes in component `className` props, global styles in `src/index.css`

**Run tests in watch mode**: `npm run test -- --watch`

**Build for production**: `npm run build` → outputs to `dist/`

## Testing

Test file: `src/utils/bingoLogic.test.ts` (21 tests)

Covers: Board generation, square toggling, win detection, square identification

## Deployment

Auto-deploys to: `https://{username}.github.io/{repo-name}/` on push to `main`

Configure in repository Settings > Pages > Deploy from a branch > GitHub Actions.

## Resources

- `.lab/GUIDE.md` — AI-assisted development workflow
- `.github/prompts/setup.prompt.md` — Environment setup prompt
- `.github/instructions/` — Frontend design & Tailwind v4 best practices
