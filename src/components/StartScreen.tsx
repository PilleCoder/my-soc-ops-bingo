import type { GameMode } from '../types';

interface StartScreenProps {
  onStart: (mode: GameMode) => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-bg-dark">
      <div className="text-center max-w-sm">
        <h1 
          className="text-5xl font-bold mb-2 animate-[pulse-glow_2s_ease-in-out_infinite]" 
          style={{
            fontFamily: 'Orbitron, monospace',
            color: 'var(--color-neon-cyan)',
            textShadow: '0 0 10px var(--color-neon-cyan), 0 0 20px var(--color-neon-cyan), 0 0 30px var(--color-neon-cyan), 0 0 40px var(--color-neon-blue)'
          }}
        >
          SOC OPS
        </h1>
        <p 
          className="text-xl mb-8 tracking-widest"
          style={{
            color: 'var(--color-neon-magenta)',
            textShadow: '0 0 5px var(--color-neon-magenta), 0 0 10px var(--color-neon-magenta)'
          }}
        >
          SOCIAL BINGO
        </p>
        
        <div 
          className="relative p-6 mb-8 backdrop-blur-sm"
          style={{
            background: 'rgba(26, 10, 46, 0.6)',
            border: '2px solid transparent',
            borderRadius: '4px',
            backgroundClip: 'padding-box',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(182, 0, 255, 0.2)'
          }}
        >
          <div 
            className="absolute inset-0 rounded-sm"
            style={{
              background: 'linear-gradient(45deg, var(--color-neon-cyan), var(--color-neon-magenta), var(--color-neon-purple))',
              padding: '2px',
              borderRadius: '4px',
              zIndex: -1,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />
          <h2 
            className="font-bold mb-3 text-lg tracking-wide"
            style={{
              fontFamily: 'Orbitron, monospace',
              color: 'var(--color-neon-cyan)'
            }}
          >
            HOW TO PLAY
          </h2>
          <ul className="text-left text-sm space-y-2" style={{ color: '#a0a0ff' }}>
            <li>▸ Find people who match the questions</li>
            <li>▸ Tap a square when you find a match</li>
            <li>▸ Get 5 in a row to win!</li>
          </ul>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => onStart('bingo')}
            className="w-full font-bold py-4 px-8 text-lg transition-all duration-300 active:scale-95 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-blue))',
              color: 'var(--color-bg-dark)',
              borderRadius: '4px',
              boxShadow: '0 0 20px var(--color-neon-cyan), 0 0 40px var(--color-neon-blue), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              border: '1px solid var(--color-neon-cyan)',
              animation: 'pulse-glow 2s ease-in-out infinite'
            }}
          >
            BINGO BOARD
          </button>

          <button
            onClick={() => onStart('card-deck')}
            className="w-full font-bold py-4 px-8 text-lg transition-all duration-300 active:scale-95 tracking-wider"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(135deg, var(--color-neon-magenta), var(--color-neon-purple))',
              color: 'var(--color-bg-dark)',
              borderRadius: '4px',
              boxShadow: '0 0 20px var(--color-neon-magenta), 0 0 40px var(--color-neon-purple), inset 0 0 20px rgba(255, 255, 255, 0.2)',
              border: '1px solid var(--color-neon-magenta)'
            }}
          >
            CARD DECK SHUFFLE
          </button>
        </div>
      </div>
    </div>
  );
}
