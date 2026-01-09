import { useState } from 'react';
import { questions } from '../data/questions';

interface CardDeckScreenProps {
  onReset: () => void;
}

export function CardDeckScreen({ onReset }: CardDeckScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set());
  const [isFlipping, setIsFlipping] = useState(false);

  const drawCard = () => {
    if (isFlipping) return;

    const availableQuestions = questions.filter(q => !usedQuestions.has(q));
    
    if (availableQuestions.length === 0) {
      // All questions used, reset the deck
      setUsedQuestions(new Set());
      return;
    }

    setIsFlipping(true);
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    
    setTimeout(() => {
      setCurrentQuestion(randomQuestion);
      setUsedQuestions(prev => new Set([...prev, randomQuestion]));
      setIsFlipping(false);
    }, 300);
  };

  const remainingCards = questions.length - usedQuestions.size;

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-bg-dark">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 
            className="text-3xl font-bold"
            style={{
              fontFamily: 'Orbitron, monospace',
              color: 'var(--color-neon-cyan)',
              textShadow: '0 0 10px var(--color-neon-cyan)'
            }}
          >
            CARD DECK
          </h1>
          <button
            onClick={onReset}
            className="px-4 py-2 text-sm font-bold transition-all"
            style={{
              fontFamily: 'Orbitron, monospace',
              color: 'var(--color-neon-magenta)',
              background: 'rgba(182, 0, 255, 0.1)',
              border: '1px solid var(--color-neon-magenta)',
              borderRadius: '4px'
            }}
          >
            RESET
          </button>
        </div>

        {/* Cards remaining counter */}
        <div 
          className="text-center mb-6"
          style={{
            color: 'var(--color-neon-cyan)',
            fontSize: '0.875rem',
            fontFamily: 'Orbitron, monospace'
          }}
        >
          {remainingCards} CARDS REMAINING
        </div>

        {/* Card display area */}
        <div className="relative mb-8" style={{ minHeight: '400px' }}>
          {/* Card back (deck) */}
          <div
            className={`absolute inset-0 transition-all duration-300 cursor-pointer ${
              currentQuestion ? 'opacity-0 scale-95' : 'opacity-100 scale-100 hover:scale-105'
            }`}
            onClick={drawCard}
            style={{
              background: 'linear-gradient(135deg, var(--color-neon-purple) 0%, var(--color-neon-blue) 100%)',
              borderRadius: '12px',
              boxShadow: '0 0 30px var(--color-neon-purple), 0 0 60px var(--color-neon-blue)',
              border: '2px solid var(--color-neon-cyan)',
              padding: '2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: isFlipping ? 'rotateY(90deg)' : 'rotateY(0deg)'
            }}
          >
            <div className="text-center">
              <div
                className="text-6xl mb-4"
                style={{
                  color: 'var(--color-neon-cyan)',
                  textShadow: '0 0 20px var(--color-neon-cyan)'
                }}
              >
                ?
              </div>
              <div
                className="text-xl font-bold"
                style={{
                  fontFamily: 'Orbitron, monospace',
                  color: 'var(--color-neon-cyan)'
                }}
              >
                TAP TO DRAW
              </div>
            </div>
          </div>

          {/* Card front (question) */}
          {currentQuestion && (
            <div
              className={`absolute inset-0 transition-all duration-300 ${
                isFlipping ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
              style={{
                background: 'rgba(26, 10, 46, 0.8)',
                borderRadius: '12px',
                boxShadow: '0 0 30px var(--color-neon-cyan), 0 0 60px var(--color-neon-magenta)',
                border: '2px solid var(--color-neon-cyan)',
                padding: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)'
              }}
            >
              <p
                className="text-2xl text-center leading-relaxed"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Orbitron, monospace'
                }}
              >
                {currentQuestion}
              </p>
            </div>
          )}
        </div>

        {/* Action button */}
        {currentQuestion && !isFlipping && (
          <button
            onClick={drawCard}
            className="w-full font-bold py-4 px-8 text-lg transition-all duration-300 active:scale-95"
            style={{
              fontFamily: 'Orbitron, monospace',
              background: 'linear-gradient(135deg, var(--color-neon-cyan), var(--color-neon-blue))',
              color: 'var(--color-bg-dark)',
              borderRadius: '8px',
              boxShadow: '0 0 20px var(--color-neon-cyan)',
              border: '1px solid var(--color-neon-cyan)'
            }}
          >
            DRAW NEXT CARD
          </button>
        )}

        {remainingCards === 0 && (
          <div
            className="text-center mt-4"
            style={{
              color: 'var(--color-neon-magenta)',
              fontFamily: 'Orbitron, monospace'
            }}
          >
            All cards drawn! Tap to shuffle deck.
          </div>
        )}
      </div>
    </div>
  );
}
