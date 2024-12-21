import React,{useState} from "react";
import Square from './Square';
import ResetButton from './ResetButton';
import { checkWinner } from '../utils/gameLogic';
const Board=()=> {
    const [squares,setSquares]=useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = checkWinner(squares);

    const handleSquareClick = (index) => {
        if (squares[index] || winner) return; // Ignore if square is already filled or game is won
    
        const newSquares = [...squares];
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);
        setIsXNext(!isXNext);
      };
      const resetGame = () => {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
      };  
      return (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
          <div className="grid grid-cols-3 gap-2 w-48">
            {squares.map((value, index) => (
              <Square
                key={index}
                value={value}
                onClick={() => handleSquareClick(index)}
              />
            ))}
          </div>
          {winner && <p className="text-lg font-semibold mt-4">Winner: {winner}</p>}
          {!winner && squares.every((square) => square) && (
            <p className="text-lg font-semibold mt-4">It's a Draw!</p>
          )}
          <ResetButton onClick={resetGame} />
        </div>
      );

    }

    export default Board;
