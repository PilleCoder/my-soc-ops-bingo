interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      style={{
        background: 'rgba(10, 10, 15, 0.8)'
      }}
    >
      <div 
        className="relative p-8 max-w-xs w-full text-center animate-[bounce_0.5s_ease-out]"
        style={{
          background: 'rgba(26, 10, 46, 0.9)',
          borderRadius: '8px',
          boxShadow: '0 0 40px var(--color-neon-magenta), 0 0 80px var(--color-neon-purple), inset 0 0 30px rgba(182, 0, 255, 0.3)'
        }}
      >
        <div 
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(45deg, var(--color-neon-cyan), var(--color-neon-magenta), var(--color-neon-purple), var(--color-neon-cyan))',
            padding: '3px',
            borderRadius: '8px',
            zIndex: -1,
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            animation: 'pulse-glow 1.5s ease-in-out infinite'
          }}
        />
        <div className="text-6xl mb-4 animate-[pulse-glow_1s_ease-in-out_infinite]">🎉</div>
        <h2 
          className="text-4xl font-black mb-2 tracking-wider animate-[glitch_0.3s_ease-in-out_infinite]"
          style={{
            fontFamily: 'Orbitron, monospace',
            color: 'var(--color-neon-magenta)',
            textShadow: '0 0 10px var(--color-neon-magenta), 0 0 20px var(--color-neon-magenta), 0 0 30px var(--color-neon-magenta), 2px 2px 0 var(--color-neon-cyan), -2px -2px 0 var(--color-neon-purple)'
          }}
        >
          BINGO!
        </h2>
        <p 
          className="mb-6 text-lg"
          style={{
            color: '#a0a0ff',
            textShadow: '0 0 5px rgba(160, 160, 255, 0.8)'
          }}
        >
          You completed a line!
        </p>
        
        <button
          onClick={onDismiss}
          className="w-full font-bold py-3 px-6 transition-all duration-300 active:scale-95 tracking-wider"
          style={{
            fontFamily: 'Orbitron, monospace',
            background: 'linear-gradient(135deg, var(--color-neon-magenta), var(--color-neon-purple))',
            color: '#ffffff',
            borderRadius: '4px',
            boxShadow: '0 0 20px var(--color-neon-magenta), 0 0 40px var(--color-neon-purple), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            border: '1px solid var(--color-neon-magenta)'
          }}
        >
          KEEP PLAYING
        </button>
      </div>
    </div>
  );
}
