import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-bg-dark">
      {/* Header */}
      <header 
        className="flex items-center justify-between p-3 backdrop-blur-sm"
        style={{
          background: 'rgba(26, 10, 46, 0.5)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
          boxShadow: '0 2px 10px rgba(0, 240, 255, 0.2)'
        }}
      >
        <button
          onClick={onReset}
          className="text-sm px-3 py-1.5 transition-all duration-300"
          style={{
            color: 'var(--color-neon-cyan)',
            border: '1px solid rgba(0, 240, 255, 0.5)',
            borderRadius: '2px',
            textShadow: '0 0 5px var(--color-neon-cyan)'
          }}
        >
          ← BACK
        </button>
        <h1 
          className="font-bold tracking-widest"
          style={{
            fontFamily: 'Orbitron, monospace',
            color: 'var(--color-neon-cyan)',
            textShadow: '0 0 10px var(--color-neon-cyan)'
          }}
        >
          SOC OPS
        </h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p 
        className="text-center text-sm py-2 px-4"
        style={{
          color: '#8080ff',
          textShadow: '0 0 5px rgba(128, 128, 255, 0.5)'
        }}
      >
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div 
          className="text-center py-2 font-bold text-sm tracking-wider animate-[pulse-glow_1s_ease-in-out_infinite]"
          style={{
            background: 'rgba(255, 0, 255, 0.2)',
            color: 'var(--color-neon-magenta)',
            borderTop: '1px solid var(--color-neon-magenta)',
            borderBottom: '1px solid var(--color-neon-magenta)',
            boxShadow: '0 0 20px var(--color-neon-magenta), inset 0 0 20px rgba(255, 0, 255, 0.3)',
            textShadow: '0 0 10px var(--color-neon-magenta)'
          }}
        >
          🎉 BINGO! YOU GOT A LINE!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
