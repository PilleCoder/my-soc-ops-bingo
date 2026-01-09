import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center border-2 transition-all duration-300 select-none min-h-[60px] text-xs leading-tight font-medium';

  const getSquareStyle = () => {
    if (square.isMarked) {
      if (isWinning) {
        return {
          background: 'rgba(255, 0, 255, 0.2)',
          borderColor: 'var(--color-neon-magenta)',
          color: '#ff80ff',
          boxShadow: '0 0 15px var(--color-neon-magenta), 0 0 30px var(--color-neon-magenta), inset 0 0 15px rgba(255, 0, 255, 0.3)',
        };
      }
      return {
        background: 'rgba(57, 255, 20, 0.15)',
        borderColor: 'var(--color-neon-green)',
        color: '#7fff7f',
        boxShadow: '0 0 10px var(--color-neon-green), 0 0 20px var(--color-neon-green), inset 0 0 10px rgba(57, 255, 20, 0.2)',
      };
    }
    return {
      background: 'rgba(26, 10, 46, 0.4)',
      borderColor: 'rgba(0, 240, 255, 0.4)',
      color: '#8080ff',
      boxShadow: '0 0 5px rgba(0, 240, 255, 0.3)',
    };
  };

  const hoverStyle = !square.isMarked && !square.isFreeSpace ? {
    ':hover': {
      borderColor: 'var(--color-neon-cyan)',
      boxShadow: '0 0 10px var(--color-neon-cyan)',
    }
  } : {};

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${freeSpaceClasses} hover:brightness-125`}
      style={getSquareStyle()}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto uppercase tracking-wide">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span 
          className="absolute top-0.5 right-0.5 text-xs font-bold"
          style={{
            color: isWinning ? 'var(--color-neon-magenta)' : 'var(--color-neon-green)',
            textShadow: isWinning 
              ? '0 0 5px var(--color-neon-magenta)' 
              : '0 0 5px var(--color-neon-green)'
          }}
        >
          ✓
        </span>
      )}
    </button>
  );
}
