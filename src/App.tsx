import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { CardDeckScreen } from './components/CardDeckScreen';
import { BingoModal } from './components/BingoModal';
import type { GameMode } from './types';
import { useState } from 'react';

function App() {
  const [selectedMode, setSelectedMode] = useState<GameMode | null>(null);
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const handleStart = (mode: GameMode) => {
    setSelectedMode(mode);
    if (mode === 'bingo') {
      startGame();
    }
  };

  const handleReset = () => {
    setSelectedMode(null);
    resetGame();
  };

  if (!selectedMode || gameState === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  if (selectedMode === 'card-deck') {
    return <CardDeckScreen onReset={handleReset} />;
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={handleReset}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
