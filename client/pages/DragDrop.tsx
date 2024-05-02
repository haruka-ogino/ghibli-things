import { useState } from 'react'
import Pieces from './DragNDrop/Pieces'
import Board from './DragNDrop/Board'

export default function DragDrop() {
  const initialState = ['helloooooooooooooooooo', 'holaaaaaaaaaaaaaaaaa']
  const [pieces, setPieces] = useState(initialState)
  const initialBoard: string[] = ['']
  const [board, setBoard] = useState(initialBoard)

  return (
    <>
      <div>
        <h1>hey hey dragging and dropping here</h1>
        {pieces.map((piece, i) => (
          <Pieces key={i} i={i} piece={piece} />
        ))}
      </div>
      <h1>Board is bellow</h1>
      <div style={{ border: '2px solid blue', height: '50px' }}>
        {board.map((thing, i) => (
          <Board key={i} i={i} thing={thing} />
        ))}
      </div>
    </>
  )
}